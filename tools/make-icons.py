# -*- coding: utf-8 -*-
"""Generate the PWA icons: a gold wheel with eight spokes on near-black,
matching the inline mark in index.html. Run from the project root:

    python tools/make-icons.py
"""
from PIL import Image, ImageDraw
import math, os

BG   = (11, 11, 15, 255)
GOLD = (201, 162, 39, 255)
SS   = 4                       # supersample factor, for clean edges


def wheel(size, pad_frac, rounded):
    S = size * SS
    img = Image.new('RGBA', (S, S), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)

    if rounded:
        d.rounded_rectangle([0, 0, S - 1, S - 1], radius=int(S * 0.14), fill=BG)
    else:
        d.rectangle([0, 0, S, S], fill=BG)

    c = S / 2
    r = c * (1 - pad_frac)          # outer radius of the rim
    rimw = max(2, int(r * 0.20))
    d.ellipse([c - r, c - r, c + r, c + r], outline=GOLD, width=rimw)

    spokew = max(2, int(r * 0.13))
    reach = r * 1.02
    for k in range(4):                       # 4 lines = 8 spokes
        a = math.radians(k * 45)
        dx, dy = math.cos(a) * reach, math.sin(a) * reach
        d.line([c - dx, c - dy, c + dx, c + dy], fill=GOLD, width=spokew)

    hub = r * 0.23
    d.ellipse([c - hub, c - hub, c + hub, c + hub], fill=BG)
    d.ellipse([c - hub * .58, c - hub * .58, c + hub * .58, c + hub * .58], fill=GOLD)

    return img.resize((size, size), Image.LANCZOS)


HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
jobs = [
    ('icon-192.png',          192, 0.16, True),
    ('icon-512.png',          512, 0.16, True),
    ('icon-180.png',          180, 0.14, True),   # apple-touch-icon
    ('icon-maskable-512.png', 512, 0.30, False),  # safe zone for maskable
]
for name, size, pad, rounded in jobs:
    p = os.path.join(HERE, name)
    wheel(size, pad, rounded).save(p)
    print('%-24s %4d px  %6d bytes' % (name, size, os.path.getsize(p)))
