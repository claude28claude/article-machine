# -*- coding: utf-8 -*-
"""Pull the rows out of every wikitable in a fetched wikitext blob.

Wikipedia is used here only as a source of FACTS - names, years, places.
The prose on the site is written from scratch; nothing is copied.
"""
import json, io, re, sys

def clean(s):
    s = re.sub(r'<ref[^>]*?/>', '', s)
    s = re.sub(r'<ref.*?</ref>', '', s, flags=re.S)
    s = re.sub(r'\{\{(?:sfn|efn|refn|cite[^}]*)\|[^{}]*\}\}', '', s, flags=re.I)
    # {{sortname|Motilal|Nehru}} and {{sortname|A|B|C}} carry the actual names
    s = re.sub(r'\{\{\s*sortname\s*\|([^|}]*)\|([^|}]*)(?:\|[^}]*)?\}\}', r'\1 \2', s, flags=re.I)
    s = re.sub(r'\{\{[Ss]ort\|[^|}]*\|([^}]*)\}\}', r'\1', s)
    s = re.sub(r'\{\{[^{}]*\}\}', ' ', s)
    s = re.sub(r'\[\[[^\]|]*\|([^\]]*)\]\]', r'\1', s)
    s = re.sub(r'\[\[([^\]]*)\]\]', r'\1', s)
    s = re.sub(r'<br\s*/?>', ' / ', s)
    s = re.sub(r'<[^>]+>', '', s)
    s = s.replace("'''", '').replace("''", '')
    s = re.sub(r'\|\s*$', '', s)
    return re.sub(r'\s+', ' ', s).strip()

def tables(text):
    out, i = [], 0
    while True:
        a = text.find('{|', i)
        if a < 0:
            break
        depth, j = 0, a
        while j < len(text):
            if text.startswith('{|', j):
                depth += 1; j += 2
            elif text.startswith('|}', j):
                depth -= 1; j += 2
                if depth == 0:
                    break
            else:
                j += 1
        out.append(text[a:j]); i = j
    return out

def rows(tbl):
    out, cur = [], None
    for line in tbl.split('\n'):
        ls = line.strip()
        if ls.startswith('|-'):
            if cur is not None:
                out.append(cur)
            cur = []
        elif cur is not None and (ls.startswith('|') or ls.startswith('!')):
            body = ls[1:]
            if body.startswith('|') or body.startswith('!'):
                body = body[1:]
            for cell in re.split(r'\|\||!!', body):
                cell = re.sub(r'^[^|]{0,80}?\bstyle=[^|]*\|', '', cell)
                cell = re.sub(r'^\s*(?:rowspan|colspan|align|scope|class|bgcolor)\s*=\s*"?[^"|]*"?\s*\|', '',
                              cell, flags=re.I)
                out and None
                cur.append(clean(cell))
        elif cur is not None and ls and not ls.startswith('!') and not ls.startswith('|'):
            if cur:
                cur[-1] = (cur[-1] + ' ' + clean(ls)).strip()
    if cur is not None:
        out.append(cur)
    return [r for r in out if any(c for c in r)]

if __name__ == '__main__':
    d = json.load(io.open(sys.argv[1], encoding='utf-8'))
    text = d['parse']['wikitext']
    only = int(sys.argv[2]) if len(sys.argv) > 2 else None
    for n, t in enumerate(tables(text)):
        rs = rows(t)
        if only is not None and n != only:
            print('table %d: %d rows (skipped)' % (n, len(rs)))
            continue
        print('=== table %d: %d rows ===' % (n, len(rs)))
        for r in rs:
            print(' | '.join(r))
