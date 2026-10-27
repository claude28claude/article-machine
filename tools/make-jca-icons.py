# -*- coding: utf-8 -*-
"""Generate the Rule Book's PWA icons: a gold balance inside a gold ring on
near-black, matching the inline mark in jca/index.html. The ring is the
Article Machine's, so the two apps read as a pair on a home screen; the
balance tells them apart. Run from the project root:

    python tools/make-jca-icons.py
"""
from PIL import Image, ImageDraw
import os

BG   = (11, 11, 15, 255)
GOLD = (201, 162, 39, 255)
SS   = 4                       # supersample factor, for clean edges


def balance(size, pad_frac, rounded):
    S = size * SS
    img = Image.new('RGBA', (S, S), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)

    if rounded:
        d.rounded_rectangle([0, 0, S - 1, S - 1], radius=int(S * 0.14), fill=BG)
    else:
        d.rectangle([0, 0, S, S], fill=BG)

    c = S / 2
    r = c * (1 - pad_frac)                  # outer radius of the ring
    d.ellipse([c - r, c - r, c + r, c + r], outline=GOLD, width=max(2, int(r * 0.17)))

    u = r / 31.0                            # one unit of the 100-unit SVG mark
    def p(x, y):                            # SVG coordinates to pixels
        return (c + (x - 50) * u, c + (y - 50) * u)

    w = max(2, int(4 * u))
    d.line([p(50, 31), p(50, 69)], fill=GOLD, width=w)       # pillar
    d.line([p(35, 38), p(65, 38)], fill=GOLD, width=w)       # beam
    d.line([p(40, 69), p(60, 69)], fill=GOLD, width=w)       # foot
    pan = max(2, int(3 * u))
    for x in (35, 65):                                       # the two pans
        d.line([p(x, 38), p(x - 7, 53), p(x + 7, 53), p(x, 38)], fill=GOLD, width=pan, joint='curve')

    return img.resize((size, size), Image.LANCZOS)


HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
jobs = [
    ('icon-192.png',          192, 0.16, True),
    ('icon-512.png',          512, 0.16, True),
    ('icon-180.png',          180, 0.14, True),   # apple-touch-icon
    ('icon-maskable-512.png', 512, 0.30, False),  # safe zone for maskable
]
for name, size, pad, rounded in jobs:
    out = os.path.join(HERE, 'jca', name)
    balance(size, pad, rounded).save(out, optimize=True)
    print('wrote', out)
