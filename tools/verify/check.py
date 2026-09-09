# -*- coding: utf-8 -*-
"""Cross-check the two new data files against the source tables.

The site's data is compared, row by row, against the tables actually fetched
from Wikipedia and against a widely used exam list typed in below. Anything
that does not match is printed. A clean run does not prove the prose is
right; it proves that no name, year or venue drifted while it was being
written, which is the failure this check exists to catch.
"""
import io, re, os, sys, json, subprocess

HERE = os.path.dirname(os.path.abspath(__file__))
SITE = r'C:\Users\amanc\claude code\article-machine'


# ---------------------------------------------------------------- site data
def site_json(files, expr):
    """Run node once to pull structured data out of the site's own files."""
    src = ';'.join("eval(require('fs').readFileSync(%s,'utf8'))" % json.dumps(f)
                   for f in files)
    code = 'global.window={};' + src + ';console.log(JSON.stringify(' + expr + '))'
    out = subprocess.check_output(['node', '-e', code], cwd=SITE)
    return json.loads(out.decode('utf-8'))


sessions = site_json(['data-congress.js'],
                     'window.CONGRESS.sessions.map(function(s){'
                     'return {id:s.id,y:s.y,place:s.place,pres:s.pres,none:!!s.none};})')

rulers = site_json(['data-raj.js'],
                   "['bengal','ggBengal','ggIndia','viceroys','free'].reduce("
                   "function(a,g){return a.concat((window.RAJ[g]||[]).map("
                   "function(p){return {id:p.id,n:p.n,from:p.from,to:p.to,g:g};}));},[])")


# ------------------------------------------------------------- normalising
def key(name):
    """Surnames survive spelling drift better than full names do."""
    n = name.lower()
    n = re.sub(r'\(.*?\)', ' ', n)
    n = n.replace('.', ' ').replace(',', ' ').replace('-', ' ')
    n = re.sub(r'\b(sir|lord|dr|mr|nawab|maulana|acharya|pandit|shri|the|of|st|'
               r'baronet|bt|earl|baron|marquess|viscount|1st|2nd|3rd|4th|5th|6th|'
               r'8th|9th|10th|kedleston|penshurst|burma|india)\b', ' ', n)
    return [w for w in re.split(r'\s+', n) if len(w) > 2]


def surname(name):
    w = key(name)
    return w[-1] if w else ''


def shares(a, b):
    """True if the two names have any substantial word in common."""
    return bool(set(key(a)) & set(key(b)))


# ---------------------------------------------- source 1: the fetched pages
def wiki_rows(path):
    rows = []
    for line in io.open(path, encoding='utf-8'):
        if line.startswith('===') or not line.strip():
            continue
        rows.append([c.strip() for c in line.split(' | ')])
    return rows


inc_rows, gg_rows = wiki_rows(os.path.join(HERE, 'inc.txt')), \
                    wiki_rows(os.path.join(HERE, 'gg.txt'))

# president rows look like: No | month year | Name | portrait | Place | refs
wiki_pres = []
for r in inc_rows:
    if len(r) < 5:
        continue
    m = re.search(r'(1[89]\d\d)', r[1])
    if not m or not r[2] or 'px' in r[2]:
        continue
    wiki_pres.append((int(m.group(1)), r[2], r[4]))

# ruler rows look like: No | portrait / Name / | / from | / to | events | ...
wiki_rulers = []
for r in gg_rows:
    if len(r) < 4:
        continue
    name = re.sub(r'^\s*\d*px\s*/?\s*', '', r[1]).strip(' /')
    yrs = re.findall(r'(1[6789]\d\d|19[0-5]\d)', ' '.join(r[2:4]))
    if name and len(yrs) >= 2:
        wiki_rulers.append((name, int(yrs[0]), int(yrs[1])))


# ------------------------------------------- source 2: a standard exam list
EXAM = [
    (1885, 'Bonnerjee', 'Bombay'), (1886, 'Naoroji', 'Calcutta'),
    (1887, 'Tyabji', 'Madras'), (1888, 'Yule', 'Allahabad'),
    (1889, 'Wedderburn', 'Bombay'), (1890, 'Mehta', 'Calcutta'),
    (1891, 'Charlu', 'Nagpur'), (1892, 'Bonnerjee', 'Allahabad'),
    (1893, 'Naoroji', 'Lahore'), (1894, 'Webb', 'Madras'),
    (1895, 'Banerjee', 'Poona'), (1896, 'Sayani', 'Calcutta'),
    (1897, 'Nair', 'Amravati'), (1898, 'Bose', 'Madras'),
    (1899, 'Dutt', 'Lucknow'), (1900, 'Chandavarkar', 'Lahore'),
    (1901, 'Wacha', 'Calcutta'), (1902, 'Banerjee', 'Ahmedabad'),
    (1903, 'Ghosh', 'Madras'), (1904, 'Cotton', 'Bombay'),
    (1905, 'Gokhale', 'Benares'), (1906, 'Naoroji', 'Calcutta'),
    (1907, 'Ghosh', 'Surat'), (1908, 'Ghosh', 'Madras'),
    (1909, 'Malaviya', 'Lahore'), (1910, 'Wedderburn', 'Allahabad'),
    (1911, 'Dhar', 'Calcutta'), (1912, 'Mudholkar', 'Bankipore'),
    (1913, 'Mohammed', 'Karachi'), (1914, 'Basu', 'Madras'),
    (1915, 'Sinha', 'Bombay'), (1916, 'Mazumdar', 'Lucknow'),
    (1917, 'Besant', 'Calcutta'), (1919, 'Nehru', 'Amritsar'),
    (1920, 'Vijayaraghavachariar', 'Nagpur'), (1921, 'Khan', 'Ahmedabad'),
    (1922, 'Das', 'Gaya'), (1923, 'Ali', 'Kakinada'),
    (1924, 'Gandhi', 'Belgaum'), (1925, 'Naidu', 'Kanpur'),
    (1926, 'Iyengar', 'Guwahati'), (1927, 'Ansari', 'Madras'),
    (1928, 'Nehru', 'Calcutta'), (1929, 'Nehru', 'Lahore'),
    (1931, 'Patel', 'Karachi'), (1933, 'Sengupta', 'Calcutta'),
    (1934, 'Prasad', 'Bombay'), (1938, 'Bose', 'Haripura'),
    (1939, 'Bose', 'Tripuri'), (1940, 'Azad', 'Ramgarh'),
    (1946, 'Kripalani', 'Meerut'), (1948, 'Sitaramayya', 'Jaipur'),
]


def year_of(s):
    m = re.search(r'(1[89]\d\d)', s['y'])
    return int(m.group(1)) if m else None


problems, checked = [], 0

# --------------------------------------------- sessions vs the exam list
for yr, sur, place in EXAM:
    mine = [s for s in sessions
            if year_of(s) == yr and not s['none'] and
            (place.lower()[:5] in s['place'].lower() or
             s['place'].lower()[:5] in place.lower())]
    if not mine:
        mine = [s for s in sessions if year_of(s) == yr and not s['none']]
    if not mine:
        problems.append('MISSING session %d %s' % (yr, place))
        continue
    checked += 1
    if not any(sur.lower() in s['pres'].lower() or shares(sur, s['pres']) for s in mine):
        problems.append('PRESIDENT %d %s: exam list says %s, site says %s'
                        % (yr, place, sur, ' / '.join(s['pres'] for s in mine)))
    if not any(place.lower()[:5] in s['place'].lower() or
               s['place'].lower()[:5] in place.lower() for s in mine):
        problems.append('VENUE %d: exam list says %s, site says %s'
                        % (yr, place, ' / '.join(s['place'] for s in mine)))

# --------------------------------------------- sessions vs the wiki table
for yr, name, place in wiki_pres:
    # Rows marked `none` are years with no session but a sitting president,
    # and a president is exactly what this comparison is about, so they count.
    mine = [s for s in sessions if year_of(s) == yr]
    if not mine:
        continue
    if not any(shares(name, s['pres']) or
               name.lower() in s['pres'].lower() or
               surname(name) in s['pres'].lower() for s in mine):
        problems.append('WIKI PRESIDENT %d %s: wiki says %s, site says %s'
                        % (yr, place, name, ' / '.join(s['pres'] for s in mine)))

# ------------------------------------------------ rulers vs the wiki table
for name, a, b in wiki_rulers:
    mine = [p for p in rulers if shares(name, p['n'])]
    if not mine:
        problems.append('MISSING administrator: %s (%d-%d)' % (name, a, b))
        continue
    checked += 1
    if not any(abs(p['from'] - a) <= 1 and abs(p['to'] - b) <= 1 for p in mine):
        problems.append('TERM %s: wiki says %d-%d, site says %s'
                        % (name, a, b, ' / '.join('%d-%d' % (p['from'], p['to'])
                                                  for p in mine)))

print('checked %d rows against two sources' % checked)
print('site sessions: %d   site administrators: %d' % (len(sessions), len(rulers)))
print('wiki president rows: %d   wiki ruler rows: %d' % (len(wiki_pres), len(wiki_rulers)))
print('')
if problems:
    print('%d TO LOOK AT:' % len(problems))
    for x in problems:
        print('  -', x)
else:
    print('no mismatches')
