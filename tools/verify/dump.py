# -*- coding: utf-8 -*-
"""Write every table of a fetched page to a text file, and print a compact index."""
import json, io, sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from rows import tables, rows

src, out = sys.argv[1], sys.argv[2]
d = json.load(io.open(src, encoding='utf-8'))
f = io.open(out, 'w', encoding='utf-8')
for n, t in enumerate(tables(d['parse']['wikitext'])):
    rs = rows(t)
    f.write(u'=== table %d (%d rows) ===\n' % (n, len(rs)))
    for r in rs:
        f.write(u' | '.join(r) + u'\n')
    f.write(u'\n')
f.close()
print('wrote %s' % out)
