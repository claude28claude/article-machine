/* The Article Machine — data-maths.js
   Advanced Maths, the way SSC asks it: formulas you have to produce from
   memory under ninety seconds a question, and nothing else.

   WHAT IS IN AND WHAT IS DELIBERATELY OUT. The boundary is the SSC paper, not
   a syllabus document and not a textbook. Calculus, vectors, matrices,
   determinants, permutations as a chapter, complex numbers, 3-D coordinate
   geometry and conic sections past the plain circle are NOT here, because
   CGL, CHSL, CPO and MTS do not ask them. What is here is the eight advanced
   chapters that carry the Tier-1 advance block and most of Tier-2 Section-1
   (algebra, triangles, circles, polygons and quadrilaterals, trigonometry,
   height and distance, mensuration 2D, mensuration 3D, coordinate geometry),
   and then — kept separate, because they are arithmetic and not advance
   maths — profit, loss and discount, and mixture and alligation.

   WHY EVERY FORMULA CARRIES A PROMPT. A formula sheet you read is a formula
   sheet you believe you know. Every row here has three fields: `p` is the
   prompt you are asked cold, `f` is the formula itself, and `d` is what the
   formula is for and where the question hides the trap. The recall drill
   shows only `p` and makes you produce `f` before it will show it. That is
   the difference between revising and checking.

   HOW THE FORMULAS WERE WRITTEN. Standard competitive-exam mathematics,
   written out in the form the answer sheet wants rather than the form a
   textbook proves. Three conventions throughout:

   1. THE SSC FORM, NOT THE GENERAL FORM. The segment of a circle is given at
      60, 90 and 120 degrees as well as in general, because those three are
      what actually appear. Pythagorean triples are listed because
      recognising 8-15-17 saves the whole calculation.
   2. WHERE A FORMULA IS COMMONLY MISQUOTED, THE ROW SAYS SO. The sum of the
      squares of a parallelogram's diagonals, the two different alligation
      denominators, the sign in a successive-discount formula, and the
      difference between the volume of a frustum and the volume of a cone are
      the four that cost the most marks.
   3. A SHORTCUT IS MARKED AS A SHORTCUT. Rows tagged `t:"trick"` are the
      ones that turn a three-step question into a one-line one; rows tagged
      `t:"trap"` are the ones candidates get backwards. */

window.MATHS = {

chapters: [

/* ====================================================================
   1. ALGEBRA
   The chapter that decides the advance block. Almost every SSC algebra
   question is one of five shapes, and four of them reduce to the
   "x + 1/x" family. That is why it has its own block here.
   ==================================================================== */
{id:"algebra", n:"Algebra", short:"Algebra", band:"advanced", hy:1,
 w:"The identities, the x + 1/x family, quadratics, surds, indices and the maximum-minimum results.",
 intro:"Five shapes cover almost every algebra question SSC sets. First, expand or factorise an identity. Second, a condition on x is given and a symmetric expression in x is asked — this is the x + 1/x family and it is the single most-repeated pattern in the paper. Third, a quadratic with its roots related. Fourth, surds and indices. Fifth, a maximum or minimum. Learn the second block cold; it is worth more marks than the other four together.",
 blocks:[

  {h:"The square and difference identities",
   note:"These are the ones you never get time to derive. The last two are the pair candidates forget exist, and they turn a two-variable question into a one-step one.",
   rows:[
    {p:"Expand (a + b)\u00b2", f:"(a + b)\u00b2 = a\u00b2 + 2ab + b\u00b2",
     d:"The base identity. Asked in reverse far more often than forwards: given a\u00b2 + b\u00b2 and ab, you are being asked for (a + b)."},
    {p:"Expand (a \u2212 b)\u00b2", f:"(a \u2212 b)\u00b2 = a\u00b2 \u2212 2ab + b\u00b2",
     d:"Same identity with the middle sign flipped. a\u00b2 + b\u00b2 is common to both, which is what makes the next two rows work."},
    {p:"a\u00b2 \u2212 b\u00b2 factorises to", f:"a\u00b2 \u2212 b\u00b2 = (a + b)(a \u2212 b)",
     d:"The most useful single line in the chapter. Any difference of two squares, however large the numbers, collapses: 101\u00b2 \u2212 99\u00b2 = 200 \u00d7 2 = 400."},
    {p:"(a + b)\u00b2 + (a \u2212 b)\u00b2 = ?", f:"(a + b)\u00b2 + (a \u2212 b)\u00b2 = 2(a\u00b2 + b\u00b2)", t:"trick",
     d:"Adding kills the middle term. Given the sum and the difference of two numbers, this gives a\u00b2 + b\u00b2 in one line."},
    {p:"(a + b)\u00b2 \u2212 (a \u2212 b)\u00b2 = ?", f:"(a + b)\u00b2 \u2212 (a \u2212 b)\u00b2 = 4ab", t:"trick",
     d:"Subtracting kills a\u00b2 and b\u00b2 and doubles the middle term twice over. Given a + b and a \u2212 b, the product ab is one division away."},
    {p:"a\u00b2 + b\u00b2 in terms of (a + b) and ab", f:"a\u00b2 + b\u00b2 = (a + b)\u00b2 \u2212 2ab",
     d:"Also a\u00b2 + b\u00b2 = (a \u2212 b)\u00b2 + 2ab. Which one you use depends on whether the sum or the difference is given."},
    {p:"Expand (x + a)(x + b)", f:"(x + a)(x + b) = x\u00b2 + (a + b)x + ab",
     d:"The factorising rule read backwards: to factorise x\u00b2 + px + q, find two numbers that add to p and multiply to q."},
    {p:"a\u2074 + b\u2074 in terms of a\u00b2 + b\u00b2", f:"a\u2074 + b\u2074 = (a\u00b2 + b\u00b2)\u00b2 \u2212 2a\u00b2b\u00b2",
     d:"The fourth-power version of the same move, applied to a\u00b2 and b\u00b2 instead of a and b."},
    {p:"Factorise a\u2074 + a\u00b2b\u00b2 + b\u2074", f:"a\u2074 + a\u00b2b\u00b2 + b\u2074 = (a\u00b2 + ab + b\u00b2)(a\u00b2 \u2212 ab + b\u00b2)", t:"trick",
     d:"A standing SSC favourite because it looks unfactorisable. Add and subtract a\u00b2b\u00b2 to make it a difference of squares."},
    {p:"Factorise x\u2074 + 4 (or x\u2074 + 4y\u2074)", f:"x\u2074 + 4y\u2074 = (x\u00b2 + 2y\u00b2 + 2xy)(x\u00b2 + 2y\u00b2 \u2212 2xy)",
     d:"Same add-and-subtract trick with 4x\u00b2y\u00b2. Rare, but there is no other way in when it appears."}
   ]},

  {h:"The cube identities",
   note:"Learn both forms of a\u00b3 + b\u00b3. The product form factorises; the (a + b)\u00b3 form is the one that works when you are given a + b and ab rather than a and b.",
   rows:[
    {p:"Expand (a + b)\u00b3", f:"(a + b)\u00b3 = a\u00b3 + b\u00b3 + 3ab(a + b)",
     d:"Also written a\u00b3 + 3a\u00b2b + 3ab\u00b2 + b\u00b3. The grouped form on the right is the exam form, because ab and (a + b) are what a question gives you."},
    {p:"Expand (a \u2212 b)\u00b3", f:"(a \u2212 b)\u00b3 = a\u00b3 \u2212 b\u00b3 \u2212 3ab(a \u2212 b)",
     d:"Mind the sign: the correction term is subtracted, and it carries (a \u2212 b), not (a + b)."},
    {p:"a\u00b3 + b\u00b3 = ?  (both forms)", f:"a\u00b3 + b\u00b3 = (a + b)(a\u00b2 \u2212 ab + b\u00b2) = (a + b)\u00b3 \u2212 3ab(a + b)",
     d:"The bracket is a\u00b2 \u2212 ab + b\u00b2, not a\u00b2 \u2212 2ab + b\u00b2. Writing the perfect square there is the commonest single error in the chapter."},
    {p:"a\u00b3 \u2212 b\u00b3 = ?  (both forms)", f:"a\u00b3 \u2212 b\u00b3 = (a \u2212 b)(a\u00b2 + ab + b\u00b2) = (a \u2212 b)\u00b3 + 3ab(a \u2212 b)",
     d:"Signs are crossed between the two identities: minus outside pairs with plus inside, and the other way round."},
    {p:"Expand (a + b + c)\u00b2", f:"(a + b + c)\u00b2 = a\u00b2 + b\u00b2 + c\u00b2 + 2(ab + bc + ca)",
     d:"The gateway to the whole three-variable block. Given a + b + c and ab + bc + ca, every symmetric expression follows."},
    {p:"a\u00b3 + b\u00b3 + c\u00b3 \u2212 3abc = ?",
     f:"a\u00b3 + b\u00b3 + c\u00b3 \u2212 3abc = (a + b + c)(a\u00b2 + b\u00b2 + c\u00b2 \u2212 ab \u2212 bc \u2212 ca)",
     d:"The master identity of the three-variable block. Everything in the next block is a consequence of it."},
    {p:"a\u00b2 + b\u00b2 + c\u00b2 \u2212 ab \u2212 bc \u2212 ca = ?",
     f:"a\u00b2 + b\u00b2 + c\u00b2 \u2212 ab \u2212 bc \u2212 ca = \u00bd[(a \u2212 b)\u00b2 + (b \u2212 c)\u00b2 + (c \u2212 a)\u00b2]",
     d:"Proves the expression is never negative, and is zero only when a = b = c. SSC asks exactly that as a one-liner."},
    {p:"Expand (a + b + c)\u00b3 using the three brackets",
     f:"(a + b + c)\u00b3 = a\u00b3 + b\u00b3 + c\u00b3 + 3(a + b)(b + c)(c + a)",
     d:"Not the long multinomial expansion \u2014 this grouped form is the one that is actually usable in the paper."},
    {p:"When is a\u00b3 + b\u00b3 + c\u00b3 = 3abc?", f:"When a + b + c = 0, or when a = b = c", t:"trick",
     d:"Read it off the factorisation in the row above: the difference is (a + b + c)(a\u00b2 + b\u00b2 + c\u00b2 \u2212 ab \u2212 bc \u2212 ca), and the second bracket is half the sum of (a\u2212b)\u00b2, (b\u2212c)\u00b2 and (c\u2212a)\u00b2, so it vanishes only when all three are equal. Both limbs count \u2014 options that offer only a + b + c = 0 are testing whether you know the other one exists."}
   ]},

  {h:"When a + b + c = 0",
   note:"Spotting this condition is half the question. It is often hidden: (x \u2212 y) + (y \u2212 z) + (z \u2212 x) is zero, and so is (a \u2212 b) + (b \u2212 c) + (c \u2212 a).",
   rows:[
    {p:"a + b + c = 0, so a\u00b3 + b\u00b3 + c\u00b3 = ?", f:"a\u00b3 + b\u00b3 + c\u00b3 = 3abc", t:"trick",
     d:"Memorise the hidden forms too: if the three brackets are differences that cycle round, they sum to zero automatically."},
    {p:"a + b + c = 0, so a\u00b2 + b\u00b2 + c\u00b2 = ?", f:"a\u00b2 + b\u00b2 + c\u00b2 = \u22122(ab + bc + ca)",
     d:"Straight from (a + b + c)\u00b2 = 0. Equivalently ab + bc + ca = \u2212\u00bd(a\u00b2 + b\u00b2 + c\u00b2), which is always negative or zero."},
    {p:"a + b + c = 0, so a\u2074 + b\u2074 + c\u2074 = ?",
     f:"a\u2074 + b\u2074 + c\u2074 = \u00bd(a\u00b2 + b\u00b2 + c\u00b2)\u00b2 = 2(ab + bc + ca)\u00b2",
     d:"Appears as \u201cif a + b + c = 0, find (a\u2074 + b\u2074 + c\u2074) \u00f7 (a\u00b2 + b\u00b2 + c\u00b2)\u00b2\u201d, answer \u00bd."},
    {p:"a + b + c = 0, so a\u00b2/bc + b\u00b2/ca + c\u00b2/ab = ?", f:"a\u00b2/bc + b\u00b2/ca + c\u00b2/ab = 3",
     d:"Put over the common denominator abc: the numerator is a\u00b3 + b\u00b3 + c\u00b3 = 3abc, so the whole thing is 3."},
    {p:"a + b + c = 0, so (a\u00b3 + b\u00b3 + c\u00b3) \u00f7 abc = ?", f:"= 3",
     d:"The same identity asked as a ratio. Options usually include 0 and 1 to catch a guess."},
    {p:"x = a \u2212 b, y = b \u2212 c, z = c \u2212 a. Then x\u00b3 + y\u00b3 + z\u00b3 = ?", f:"= 3(a \u2212 b)(b \u2212 c)(c \u2212 a)", t:"trick",
     d:"The hidden form. x + y + z = 0 by construction, so the cubes collapse to 3xyz without you being told the condition."}
   ]},

  {h:"The x + 1/x family \u2014 learn this block cold",
   note:"If one block in this subject is worth memorising to the letter, it is this one. The question gives you x + 1/x or x \u2212 1/x, or an equation you can turn into one, and asks for a higher power.",
   rows:[
    {p:"x + 1/x = a. Find x\u00b2 + 1/x\u00b2", f:"x\u00b2 + 1/x\u00b2 = a\u00b2 \u2212 2",
     d:"Square the given and subtract the 2 that the cross term leaves. Subtract \u2014 the commonest slip is adding."},
    {p:"x \u2212 1/x = b. Find x\u00b2 + 1/x\u00b2", f:"x\u00b2 + 1/x\u00b2 = b\u00b2 + 2", t:"trap",
     d:"Plus 2 here, minus 2 above. The sign of the constant flips with the sign in the given expression, and the options are always built around that."},
    {p:"Relation between (x + 1/x)\u00b2 and (x \u2212 1/x)\u00b2", f:"(x + 1/x)\u00b2 \u2212 (x \u2212 1/x)\u00b2 = 4",
     d:"So given one you can always get the other: if x + 1/x = 3 then x \u2212 1/x = \u00b1\u221a5."},
    {p:"x + 1/x = a. Find x\u00b3 + 1/x\u00b3", f:"x\u00b3 + 1/x\u00b3 = a\u00b3 \u2212 3a",
     d:"From (a)\u00b3 = x\u00b3 + 1/x\u00b3 + 3(x + 1/x). Written as a(a\u00b2 \u2212 3) it is faster to evaluate."},
    {p:"x \u2212 1/x = b. Find x\u00b3 \u2212 1/x\u00b3", f:"x\u00b3 \u2212 1/x\u00b3 = b\u00b3 + 3b",
     d:"Signs mirror the cube identities: the minus version gains the correction term, the plus version loses it."},
    {p:"x\u00b2 + 1/x\u00b2 = c. Find x\u2074 + 1/x\u2074", f:"x\u2074 + 1/x\u2074 = c\u00b2 \u2212 2",
     d:"The same squaring step one level up. From x + 1/x = a directly: x\u2074 + 1/x\u2074 = (a\u00b2 \u2212 2)\u00b2 \u2212 2."},
    {p:"Find x\u2075 + 1/x\u2075 from the lower powers",
     f:"x\u2075 + 1/x\u2075 = (x\u00b2 + 1/x\u00b2)(x\u00b3 + 1/x\u00b3) \u2212 (x + 1/x)",
     d:"Multiplying two of these always overshoots by the difference of the powers; subtract that lower power back off."},
    {p:"x\u00b2 \u2212 3x + 1 = 0. What is x + 1/x?", f:"Divide by x: x + 1/x = 3", t:"trick",
     d:"The single most important move in the chapter. Any quadratic of the form x\u00b2 \u2212 kx + 1 = 0 means x + 1/x = k, and the whole family above is then open."},
    {p:"x\u00b2 + 1 = 4x. What is x\u00b3 + 1/x\u00b3?", f:"x + 1/x = 4, so x\u00b3 + 1/x\u00b3 = 4\u00b3 \u2212 3(4) = 52",
     d:"The question is the same one dressed differently. Rearrange to x\u00b2 \u2212 4x + 1 = 0 first, then divide by x."},
    {p:"x = 2 + \u221a3. What is x + 1/x?", f:"1/x = 2 \u2212 \u221a3, so x + 1/x = 4", t:"trick",
     d:"Whenever x = p + \u221aq with p\u00b2 \u2212 q = 1, the reciprocal is p \u2212 \u221aq and the surd cancels. 2 + \u221a3, 3 + 2\u221a2 and 5 + 2\u221a6 all behave this way."},
    {p:"x = 3 + 2\u221a2. What is x + 1/x, and x \u2212 1/x?", f:"x + 1/x = 6, x \u2212 1/x = 4\u221a2",
     d:"1/x = 3 \u2212 2\u221a2 because (3)\u00b2 \u2212 (2\u221a2)\u00b2 = 9 \u2212 8 = 1. Rationalise once and both answers fall out."},
    {p:"Minimum value of x + 1/x for x > 0", f:"Minimum = 2, at x = 1",
     d:"From AM \u2265 GM. For x < 0 the maximum is \u22122 at x = \u22121. SSC asks for the range: x + 1/x can never lie strictly between \u22122 and 2."},
    {p:"x + 1/x = 2 means x = ?", f:"x = 1.  And x + 1/x = \u22122 means x = \u22121", t:"trick",
     d:"These two are not formulas to apply, they are values to recognise. If a question hands you x + 1/x = 2, substitute x = 1 and the rest of the expression is arithmetic."},
    {p:"x + 1/x = \u221a3 means x\u00b3 + 1/x\u00b3 = ?", f:"= 0,  because (\u221a3)\u00b3 \u2212 3(\u221a3) = 3\u221a3 \u2212 3\u221a3 = 0", t:"trick",
     d:"The one value of x + 1/x that makes the cube vanish, and SSC sets it often because the zero looks like a mistake. Run it the other way and the question is broken: x\u00b3 + 1/x\u00b3 = 0 forces x + 1/x to be 0 or \u00b1\u221a3, and no real x gives any of those, since x + 1/x is at least 2 in size."}
   ]},

  {h:"Surds, indices and nested roots",
   rows:[
    {p:"The five index laws",
     f:"a\u1d50\u00b7a\u207f = a\u1d50\u207a\u207f;  a\u1d50/a\u207f = a\u1d50\u207b\u207f;  (a\u1d50)\u207f = a\u1d50\u207f;  a\u2070 = 1;  a\u207b\u207f = 1/a\u207f",
     d:"With a^(m/n) = the nth root of a\u1d50. Every indices question is one of these five applied twice."},
    {p:"Simplify \u221a(a + b + 2\u221a(ab))", f:"\u221a(a + b + 2\u221a(ab)) = \u221aa + \u221ab",
     d:"Because (\u221aa + \u221ab)\u00b2 = a + b + 2\u221a(ab). So \u221a(7 + 4\u221a3) = \u221a(4 + 3 + 2\u221a12) = 2 + \u221a3."},
    {p:"Simplify \u221a(a + b \u2212 2\u221a(ab))", f:"\u221a(a + b \u2212 2\u221a(ab)) = \u221aa \u2212 \u221ab",
     d:"Take the larger root first so the answer is positive. \u221a(7 \u2212 4\u221a3) = 2 \u2212 \u221a3, not \u221a3 \u2212 2."},
    {p:"Rationalise 1/(\u221aa + \u221ab)", f:"1/(\u221aa + \u221ab) = (\u221aa \u2212 \u221ab)/(a \u2212 b)",
     d:"Multiply by the conjugate. The chain question 1/(\u221a1+\u221a2) + 1/(\u221a2+\u221a3) + \u2026 telescopes to \u221an \u2212 1 once every term is rationalised."},
    {p:"Rationalise 1/(a + \u221ab)", f:"1/(a + \u221ab) = (a \u2212 \u221ab)/(a\u00b2 \u2212 b)",
     d:"Same move with one rational term. If a\u00b2 \u2212 b = 1 the denominator vanishes and the answer is just the conjugate."},
    {p:"\u221a(x\u221a(x\u221a(x\u2026))) continuing for ever = ?", f:"= x", t:"trick",
     d:"The exponent is \u00bd + \u00bc + \u215b + \u2026 = 1. The finite version with n roots is x^(1 \u2212 1/2\u207f)."},
    {p:"\u221a(x + \u221a(x + \u221a(x + \u2026))) = n. Find x", f:"x = n\u00b2 \u2212 n",
     d:"Set the whole thing equal to n, square: x + n = n\u00b2. The subtraction version \u221a(x \u2212 \u221a(x \u2212 \u2026)) = n gives x = n\u00b2 + n."},
    {p:"a\u02e3 = b\u02b8 = c\u1dbb and b\u00b2 = ac. Find y", f:"y = 2xz/(x + z)", t:"trick",
     d:"y is the harmonic mean of x and z. If instead the condition is b = \u221a(ac), the same answer; if a, b, c are in AP the relation changes, so read which one is given."},
    {p:"If 2\u02e3 = 3\u02b8 = 6\u1dbb, the relation between x, y, z", f:"1/x + 1/y = 1/z",
     d:"Because 6 = 2 \u00d7 3. Any question where one base is the product of the other two reduces to adding reciprocals."},
    {p:"\u221a2, \u221a3, \u221a5, \u221a6, \u221a7 to three places",
     f:"\u221a2 = 1.414, \u221a3 = 1.732, \u221a5 = 2.236, \u221a6 = 2.449, \u221a7 = 2.646",
     d:"Worth knowing by heart \u2014 comparison questions (\u201cwhich is largest\u201d) are decided by these and nothing else. Also \u221a10 = 3.162."}
   ]},

  {h:"Quadratic equations",
   note:"SSC does not ask you to solve a quadratic by formula very often. It asks for a symmetric function of the roots, which never needs the roots themselves.",
   rows:[
    {p:"Roots of ax\u00b2 + bx + c = 0", f:"x = [\u2212b \u00b1 \u221a(b\u00b2 \u2212 4ac)] / 2a",
     d:"The denominator is 2a, not a \u2014 and the whole numerator, including \u2212b, is divided by it."},
    {p:"Sum and product of the roots", f:"\u03b1 + \u03b2 = \u2212b/a,   \u03b1\u03b2 = c/a",
     d:"These two lines answer most root questions without solving anything. Note the minus on the sum only."},
    {p:"The discriminant and what it decides", f:"D = b\u00b2 \u2212 4ac.  D > 0 real and distinct; D = 0 real and equal; D < 0 imaginary",
     d:"If D is a perfect square as well as positive, the roots are rational. \u201cEqual roots\u201d always means set D = 0 and solve for the parameter."},
    {p:"Build the equation from its roots", f:"x\u00b2 \u2212 (sum)x + (product) = 0",
     d:"Sign pattern: minus the sum, plus the product. Asked as \u201cthe equation whose roots are 2 more than those of \u2026\u201d \u2014 shift the sum by 4 and recompute the product."},
    {p:"\u03b1\u00b2 + \u03b2\u00b2 from the coefficients", f:"\u03b1\u00b2 + \u03b2\u00b2 = (\u03b1 + \u03b2)\u00b2 \u2212 2\u03b1\u03b2 = (b\u00b2 \u2212 2ac)/a\u00b2",
     d:"The middle form is the one to remember; the right-hand form saves a step when a is not 1."},
    {p:"\u03b1\u00b3 + \u03b2\u00b3 from the coefficients", f:"\u03b1\u00b3 + \u03b2\u00b3 = (\u03b1 + \u03b2)\u00b3 \u2212 3\u03b1\u03b2(\u03b1 + \u03b2)",
     d:"Substituting gives (3abc \u2212 b\u00b3)/a\u00b3, but deriving it from the cube identity is safer than memorising that."},
    {p:"\u03b1 \u2212 \u03b2 in terms of the coefficients", f:"\u03b1 \u2212 \u03b2 = \u00b1\u221aD / a = \u00b1\u221a(b\u00b2 \u2212 4ac)/a",
     d:"From (\u03b1 \u2212 \u03b2)\u00b2 = (\u03b1 + \u03b2)\u00b2 \u2212 4\u03b1\u03b2. The \u00b1 matters when the question asks for the positive difference."},
    {p:"1/\u03b1 + 1/\u03b2 = ?", f:"1/\u03b1 + 1/\u03b2 = (\u03b1 + \u03b2)/\u03b1\u03b2 = \u2212b/c",
     d:"And 1/\u03b1\u00b7 1/\u03b2 = a/c, so the equation with the reciprocal roots is cx\u00b2 + bx + a = 0 \u2014 the original with a and c swapped."},
    {p:"When is one root the reciprocal of the other?", f:"When c = a (product of roots = 1)",
     d:"Equal roots means D = 0; roots equal in magnitude and opposite in sign means b = 0; one root zero means c = 0. All four are one-line checks."},
    {p:"Maximum or minimum of ax\u00b2 + bx + c",
     f:"At x = \u2212b/2a, value = (4ac \u2212 b\u00b2)/4a.  Minimum if a > 0, maximum if a < 0",
     d:"Equivalently c \u2212 b\u00b2/4a. There is no maximum when a > 0 and no minimum when a < 0 \u2014 the other direction runs to infinity."},
    {p:"Common root condition for two quadratics",
     f:"If both roots are common: a\u2081/a\u2082 = b\u2081/b\u2082 = c\u2081/c\u2082",
     d:"For exactly one common root SSC expects you to subtract the two equations, which gives a linear equation you can solve directly."}
   ]},

  {h:"Maximum, minimum and inequalities",
   rows:[
    {p:"AM \u2265 GM for two positive numbers", f:"(a + b)/2 \u2265 \u221a(ab), equality when a = b",
     d:"The engine behind every \u201cminimum value of\u201d question. For n numbers the same ordering holds: AM \u2265 GM \u2265 HM."},
    {p:"Minimum of a/b + b/a for positive a, b", f:"Minimum = 2",
     d:"Direct from AM \u2265 GM applied to a/b and b/a, whose product is 1. Any expression of the form t + 1/t has the same answer."},
    {p:"Given a + b fixed, when is ab largest?", f:"When a = b; largest ab = (a + b)\u00b2/4",
     d:"And given ab fixed, a + b is smallest when a = b. Both forms appear, often dressed as a rectangle of fixed perimeter."},
    {p:"Maximum of (a \u2212 x)(x \u2212 b)", f:"Maximum = (a \u2212 b)\u00b2/4, at x = (a + b)/2",
     d:"A product of two terms whose sum is constant: the maximum is at the midpoint, by the row above."},
    {p:"a\u00b2 + b\u00b2 + c\u00b2 compared with ab + bc + ca", f:"a\u00b2 + b\u00b2 + c\u00b2 \u2265 ab + bc + ca always",
     d:"Equality only when a = b = c, from the half-sum-of-squares identity in the cube block."},
    {p:"AM, GM and HM of two numbers, and their relation",
     f:"AM = (a+b)/2, GM = \u221a(ab), HM = 2ab/(a+b);  GM\u00b2 = AM \u00d7 HM",
     d:"The last line is asked directly. Two numbers with AM 10 and GM 8 have HM 6.4, and the numbers themselves are 16 and 4."}
   ]},

  {h:"Polynomials, ratio and the two theorems",
   rows:[
    {p:"Remainder theorem", f:"The remainder when f(x) is divided by (x \u2212 a) is f(a)",
     d:"For division by (ax \u2212 b) the remainder is f(b/a). You never actually divide in an SSC question."},
    {p:"Factor theorem", f:"(x \u2212 a) is a factor of f(x) if and only if f(a) = 0",
     d:"Used backwards: \u201cfind k so that (x \u2212 2) divides \u2026\u201d means set f(2) = 0 and solve for k."},
    {p:"Componendo and dividendo", f:"If a/b = c/d then (a + b)/(a \u2212 b) = (c + d)/(c \u2212 d)",
     d:"The fastest route through any question where a ratio of sums equals a ratio of differences. Works in reverse too."},
    {p:"Equal ratios combine how?", f:"If a/b = c/d = e/f = k then (a + c + e)/(b + d + f) = k",
     d:"And any weighted version: (pa + qc + re)/(pb + qd + rf) = k. This is what makes the three-fraction SSC questions one-liners."},
    {p:"Duplicate, sub-duplicate, triplicate ratios",
     f:"Duplicate of a:b is a\u00b2:b\u00b2; sub-duplicate is \u221aa:\u221ab; triplicate is a\u00b3:b\u00b3; sub-triplicate is \u221b a:\u221b b",
     d:"Asked by name rather than by formula, which is why the names are worth knowing."},
    {p:"Mean proportional and third proportional",
     f:"Mean proportional of a and b is \u221a(ab); third proportional to a and b is b\u00b2/a; fourth proportional to a, b, c is bc/a",
     d:"Three different words for three different answers, and the options always include all three."},
    {p:"x\u00b2 + y\u00b2 + z\u00b2 = xy + yz + zx means?", f:"x = y = z",
     d:"A condition disguised as an equation. Once you have it, every expression in the question is evaluated at a single value."},
    {p:"If x/a + y/b = 1 and x/b + y/a = 1, then x + y = ?", f:"x + y = 2ab/(a + b)",
     d:"Add the two equations: (x + y)(1/a + 1/b) = 2, so (x + y)(a + b)/ab = 2. The answer is the harmonic mean of a and b \u2014 which is also why 2ab/(a+b) appears in the options of unrelated questions."}
   ]}
 ]},

/* ====================================================================
   2. TRIANGLES
   Congruence and similarity, the four centres, and the length formulas.
   The four centres are the part that is asked most and known least:
   almost every geometry question in a Tier-2 paper turns on one of the
   three angle results in the centres block.
   ==================================================================== */
{id:"triangles", n:"Triangles", short:"Triangles", band:"advanced", hy:1,
 w:"Congruence and similarity, the four centres and their angle results, medians, bisectors and every area formula.",
 intro:"Two things carry this chapter. The first is similarity: the ratio of areas is the square of the ratio of sides, and nothing else in geometry is asked as often. The second is the four centres — centroid, incentre, circumcentre, orthocentre — each with one angle formula and one special case for a right-angled triangle. Learn those seven lines and the chapter is mostly done.",
 figs:[
  {id:"tri-centroid", cap:"The centroid divides every median in the ratio 2 : 1 from the vertex, and the three medians cut the triangle into six triangles of equal area.",
   svg:"<svg viewBox=\"0 0 300 210\" role=\"img\" aria-label=\"Triangle with its three medians meeting at the centroid\"><polygon class=\"sh\" points=\"30,180 270,180 150,25\"/><line class=\"ln\" x1=\"30\" y1=\"180\" x2=\"270\" y2=\"180\"/><line class=\"ln\" x1=\"30\" y1=\"180\" x2=\"150\" y2=\"25\"/><line class=\"ln\" x1=\"270\" y1=\"180\" x2=\"150\" y2=\"25\"/><line class=\"dash\" x1=\"150\" y1=\"25\" x2=\"150\" y2=\"180\"/><line class=\"dash\" x1=\"30\" y1=\"180\" x2=\"210\" y2=\"102\"/><line class=\"dash\" x1=\"270\" y1=\"180\" x2=\"90\" y2=\"102\"/><circle class=\"pt\" cx=\"150\" cy=\"128\" r=\"4.5\"/><text x=\"22\" y=\"196\">B</text><text x=\"272\" y=\"196\">C</text><text x=\"145\" y=\"18\">A</text><text x=\"160\" y=\"132\">G</text><text class=\"sm\" x=\"156\" y=\"80\">2</text><text class=\"sm\" x=\"156\" y=\"162\">1</text></svg>"},
  {id:"tri-angbis", cap:"The angle bisector from A meets BC at D, and cuts it in the ratio of the two sides that contain the angle: BD / DC = AB / AC.",
   svg:"<svg viewBox=\"0 0 300 200\" role=\"img\" aria-label=\"Angle bisector from vertex A meeting side BC at D\"><polygon class=\"sh\" points=\"30,170 270,170 110,25\"/><line class=\"ln\" x1=\"30\" y1=\"170\" x2=\"270\" y2=\"170\"/><line class=\"ln\" x1=\"30\" y1=\"170\" x2=\"110\" y2=\"25\"/><line class=\"ln\" x1=\"270\" y1=\"170\" x2=\"110\" y2=\"25\"/><line class=\"hl\" x1=\"110\" y1=\"25\" x2=\"152\" y2=\"170\"/><path class=\"arc\" d=\"M100 48 A 26 26 0 0 0 124 50\"/><text x=\"22\" y=\"188\">B</text><text x=\"272\" y=\"188\">C</text><text x=\"104\" y=\"18\">A</text><text x=\"146\" y=\"188\">D</text><text class=\"sm\" x=\"56\" y=\"96\">c</text><text class=\"sm\" x=\"200\" y=\"90\">b</text></svg>"},
  {id:"tri-bpt", cap:"Basic proportionality (Thales): a line parallel to one side cuts the other two proportionally, AD / DB = AE / EC, and triangle ADE is similar to triangle ABC.",
   svg:"<svg viewBox=\"0 0 300 200\" role=\"img\" aria-label=\"Line DE parallel to BC inside triangle ABC\"><polygon class=\"sh\" points=\"40,170 260,170 150,25\"/><line class=\"ln\" x1=\"40\" y1=\"170\" x2=\"260\" y2=\"170\"/><line class=\"ln\" x1=\"40\" y1=\"170\" x2=\"150\" y2=\"25\"/><line class=\"ln\" x1=\"260\" y1=\"170\" x2=\"150\" y2=\"25\"/><line class=\"hl\" x1=\"95\" y1=\"98\" x2=\"205\" y2=\"98\"/><text x=\"32\" y=\"188\">B</text><text x=\"262\" y=\"188\">C</text><text x=\"145\" y=\"18\">A</text><text x=\"78\" y=\"103\">D</text><text x=\"212\" y=\"103\">E</text></svg>"},
  {id:"tri-alt", cap:"The altitude to the hypotenuse of a right-angled triangle: p = ab / c, and 1/p² = 1/a² + 1/b². It also cuts the hypotenuse into x and y with p² = xy.",
   svg:"<svg viewBox=\"0 0 300 190\" role=\"img\" aria-label=\"Right triangle with altitude drawn to the hypotenuse\"><polygon class=\"sh\" points=\"40,160 270,160 40,30\"/><line class=\"ln\" x1=\"40\" y1=\"160\" x2=\"270\" y2=\"160\"/><line class=\"ln\" x1=\"40\" y1=\"160\" x2=\"40\" y2=\"30\"/><line class=\"ln\" x1=\"40\" y1=\"30\" x2=\"270\" y2=\"160\"/><line class=\"hl\" x1=\"40\" y1=\"160\" x2=\"108\" y2=\"74\"/><rect class=\"sq\" x=\"40\" y=\"146\" width=\"14\" height=\"14\"/><text x=\"28\" y=\"176\">C</text><text x=\"274\" y=\"176\">B</text><text x=\"30\" y=\"24\">A</text><text class=\"sm\" x=\"70\" y=\"108\">p</text><text class=\"sm\" x=\"24\" y=\"98\">b</text><text class=\"sm\" x=\"150\" y=\"176\">a</text></svg>"}
 ],
 blocks:[

  {h:"Angles, and the two rules that answer half the questions",
   rows:[
    {p:"Angle sum of a triangle", f:"∠A + ∠B + ∠C = 180°",
     d:"And the sum of the exterior angles, one at each vertex, is 360° for every polygon including the triangle."},
    {p:"Exterior angle theorem", f:"An exterior angle = the sum of the two interior opposite angles",
     d:"The workhorse of SSC angle-chasing. In a diagram with one line extended, this is almost always the intended step."},
    {p:"Triangle inequality", f:"The sum of any two sides > the third side, and the difference of any two < the third",
     d:"Asked as “how many triangles are possible” or “which set cannot form a triangle”. Both bounds are needed."},
    {p:"Side-angle ordering", f:"The largest angle is opposite the largest side",
     d:"So in a triangle with sides 7, 8, 9 the largest angle faces 9. Scalene questions about which angle is biggest need nothing else."},
    {p:"Angle between the bisectors of two base angles",
     f:"∠BIC = 90° + ∠A/2  (I the incentre, internal bisectors)",
     d:"The most asked single result in the centres block. Memorise it with its two relatives in the next block."},
    {p:"Angle between the external bisectors of B and C", f:"= 90° − ∠A/2",
     d:"One internal and one external bisector of B and C meet at ∠A/2. Three variants, three different answers — the options always carry all three."}
   ]},

  {h:"Congruence and similarity",
   note:"Congruence proves equality of sides; similarity gives ratios. SSC asks similarity far more often, and nearly always wants the area ratio.",
   rows:[
    {p:"The five congruence conditions", f:"SSS, SAS, ASA, AAS and RHS",
     d:"AAA is similarity, not congruence, and SSA is not a condition at all. That distinction is itself a question."},
    {p:"The three similarity conditions", f:"AA (or AAA), SAS (ratio of two sides and included angle), SSS (all three ratios)",
     d:"AA is enough — two equal angles force the third. RHS has no similarity analogue because it is a special SAS."},
    {p:"Ratio of areas of two similar triangles",
     f:"Area₁/Area₂ = (corresponding side)² ratio = (height)² ratio = (median)² ratio", t:"trick",
     d:"Squared, in every one of those forms. The commonest SSC error is giving the side ratio as the area ratio."},
    {p:"Ratio of perimeters of two similar triangles", f:"= the ratio of corresponding sides (not squared)",
     d:"Perimeter is a length, so it scales linearly. Area squares, volume cubes — keep the three straight."},
    {p:"Basic proportionality theorem (Thales)",
     f:"If DE ∥ BC, then AD/DB = AE/EC, and AD/AB = AE/AC = DE/BC",
     d:"The converse is also examinable: if the ratios are equal then the line is parallel. See the diagram above."},
    {p:"Midpoint theorem", f:"The segment joining the midpoints of two sides is parallel to the third and half its length",
     d:"The midpoint triangle has ¼ the area of the original, and its perimeter is half — both are asked."},
    {p:"Two triangles on the same base, between the same parallels", f:"have equal area",
     d:"Which is why a median divides a triangle into two equal areas: same base length, same height."},
    {p:"Triangles with the same height", f:"Area ratio = base ratio",
     d:"The fastest way through any “find the area of the shaded part” question where a cevian cuts a side in a given ratio."}
   ]},

  {h:"The four centres — the block that decides a Tier-2 paper",
   note:"One angle result and one right-angle special case for each. The right-angled-triangle special cases are asked directly.",
   rows:[
    {p:"Centroid: what meets there, and in what ratio",
     f:"The three medians meet at G, which divides each median 2 : 1 from the vertex",
     d:"The three medians also cut the triangle into six triangles of equal area. G is always inside."},
    {p:"Length of the median to side a", f:"mₐ = ½√(2b² + 2c² − a²)",
     d:"From Apollonius. Also useful: the three medians satisfy m₁² + m₂² + m₃² = ¾(a² + b² + c²)."},
    {p:"Apollonius theorem", f:"AB² + AC² = 2(AD² + BD²), with D the midpoint of BC",
     d:"The median form of Pythagoras. Written with sides: b² + c² = 2mₐ² + a²/2."},
    {p:"Incentre: what meets there, and the angle result",
     f:"The three internal angle bisectors meet at I.  ∠BIC = 90° + ∠A/2",
     d:"I is the centre of the inscribed circle and is always inside the triangle, whatever its shape."},
    {p:"Inradius r", f:"r = Area/s, where s is the semi-perimeter",
     d:"For a right-angled triangle there is a faster form: r = (a + b − c)/2, with c the hypotenuse."},
    {p:"Circumcentre: what meets there, and the angle result",
     f:"The three perpendicular bisectors of the sides meet at O.  ∠BOC = 2∠A",
     d:"O is inside an acute triangle, ON the hypotenuse of a right triangle, and outside an obtuse one — that is a question on its own."},
    {p:"Circumradius R", f:"R = abc/(4 × Area)",
     d:"And from the sine rule R = a/(2 sin A). For a right-angled triangle R = hypotenuse/2, because the circumcentre is the hypotenuse's midpoint."},
    {p:"Orthocentre: what meets there, and the angle result",
     f:"The three altitudes meet at H.  ∠BHC = 180° − ∠A",
     d:"In a right-angled triangle H is the vertex holding the right angle. In an obtuse triangle H is outside."},
    {p:"Euler line", f:"O, G and H are collinear, and OG : GH = 1 : 2",
     d:"So HG = 2 GO, and H, G, O lie in that order. The incentre is not on the Euler line unless the triangle is isosceles."},
    {p:"Which centres coincide in an equilateral triangle?",
     f:"All four — centroid, incentre, circumcentre and orthocentre — are the same point",
     d:"And R = 2r for it. If any two centres of a triangle coincide, the triangle is equilateral."},
    {p:"Exradius opposite A", f:"r₁ = Area/(s − a)",
     d:"With r₁r₂r₃ = r s² and 1/r = 1/r₁ + 1/r₂ + 1/r₃. Rare in Tier-1, occasional in Tier-2."}
   ]},

  {h:"Right-angled triangles",
   rows:[
    {p:"Pythagoras theorem", f:"hypotenuse² = base² + perpendicular²",
     d:"The converse is equally examinable: if c² = a² + b² the angle opposite c is a right angle; if c² > a² + b² it is obtuse."},
    {p:"The Pythagorean triples worth recognising on sight",
     f:"3-4-5, 5-12-13, 7-24-25, 8-15-17, 9-40-41, 11-60-61, 12-35-37, 20-21-29", t:"trick",
     d:"And every multiple of them — 6-8-10, 9-12-15, 10-24-26. Recognising the triple replaces the whole calculation."},
    {p:"Altitude to the hypotenuse, in terms of the sides", f:"p = ab/c,  and 1/p² = 1/a² + 1/b²",
     d:"The second form is the one SSC asks. It follows from the first by substituting c² = a² + b²."},
    {p:"The altitude to the hypotenuse cuts it into x and y. Then p = ?", f:"p² = xy,  a² = x·c,  b² = y·c",
     d:"The three similar triangles in the figure give all three relations. p is the geometric mean of the two pieces."},
    {p:"Sides of a 30-60-90 triangle", f:"1 : √3 : 2, opposite 30°, 60° and 90°",
     d:"So the side facing 30° is half the hypotenuse — which is itself a standing question."},
    {p:"Sides of a 45-45-90 triangle", f:"1 : 1 : √2",
     d:"The isosceles right triangle. Its altitude to the hypotenuse is half the hypotenuse."},
    {p:"Median to the hypotenuse", f:"= half the hypotenuse",
     d:"Because the circumcentre of a right triangle is the midpoint of its hypotenuse, so that median is a radius."},
    {p:"Inradius of a right-angled triangle", f:"r = (a + b − c)/2",
     d:"Faster than Area/s when the triangle is right-angled, and it is a recognised standard result in its own right."}
   ]},

  {h:"Area, and the equilateral and isosceles special cases",
   rows:[
    {p:"The five area formulas for a triangle",
     f:"½ × base × height;  √(s(s−a)(s−b)(s−c));  ½ ab sin C;  abc/4R;  r × s",
     d:"Heron's is for three sides, r·s for an inradius question, abc/4R for a circumradius question. Choose by what is given."},
    {p:"Area of an equilateral triangle of side a", f:"Area = (√3/4)a²",
     d:"And its height is (√3/2)a. The two are confused constantly — √3/4 for area, √3/2 for height."},
    {p:"r and R of an equilateral triangle of side a", f:"r = a/(2√3),  R = a/√3,  so R = 2r",
     d:"Also height h = r + R = (√3/2)a, which is a neat check on both."},
    {p:"Area of an isosceles triangle, equal sides a, base b", f:"Area = (b/4)√(4a² − b²)",
     d:"From dropping the altitude to the base, which bisects it. The height is √(a² − b²/4)."},
    {p:"Area of a triangle from its three medians",
     f:"Area = (4/3) × √(σ(σ−m₁)(σ−m₂)(σ−m₃)), σ = half the sum of the medians",
     d:"Heron's formula on the medians, scaled by 4/3. Occasional in Tier-2, never in Tier-1."},
    {p:"If each side of a triangle is doubled, the area becomes", f:"4 times",
     d:"Side ×k gives area ×k². Asked as a percentage: sides up 20% means area up 44%, from (1.2)²."}
   ]}
 ]},

/* ====================================================================
   3. CIRCLES
   Every circle theorem SSC asks, with a diagram for each, and then the
   arc, sector and segment formulas including the three angles that
   actually appear: 60, 90 and 120 degrees.

   WHY EVERY THEOREM HERE HAS A PICTURE. A circle theorem stated in words
   is a sentence you can recite and still not recognise in a figure, and
   the figure is how it is asked. Each one is drawn once, in the position
   the paper draws it.
   ==================================================================== */
{id:"circles", n:"Circles", short:"Circles", band:"advanced", hy:1,
 w:"Every theorem with its diagram — chords, the angle results, cyclic quadrilaterals, tangents, the power of a point — then arcs, sectors and segments.",
 intro:"Three families. Angles: the angle at the centre is twice the angle at the circumference, and everything else in that family follows from it. Tangents and the power of a point: four results, all of them products. Arcs, sectors and segments: the formulas are easy and the mistake is always the same one — a segment is a sector minus a triangle, and the triangle is forgotten.",
 figs:[
  {id:"cir-centre", cap:"Angle at the centre = twice the angle at the circumference, standing on the same arc BC. ∠BOC = 2∠BAC.",
   svg:"<svg viewBox=\"0 0 300 220\" role=\"img\" aria-label=\"Angle subtended at the centre is twice the angle at the circumference\"><circle class=\"cir\" cx=\"150\" cy=\"110\" r=\"85\"/><line class=\"ln\" x1=\"150\" y1=\"110\" x2=\"76.4\" y2=\"152.5\"/><line class=\"ln\" x1=\"150\" y1=\"110\" x2=\"223.6\" y2=\"152.5\"/><line class=\"hl\" x1=\"150\" y1=\"25\" x2=\"76.4\" y2=\"152.5\"/><line class=\"hl\" x1=\"150\" y1=\"25\" x2=\"223.6\" y2=\"152.5\"/><circle class=\"pt\" cx=\"150\" cy=\"110\" r=\"3.5\"/><text x=\"145\" y=\"18\">A</text><text x=\"58\" y=\"165\">B</text><text x=\"230\" y=\"165\">C</text><text x=\"156\" y=\"104\">O</text><text class=\"sm\" x=\"143\" y=\"58\">θ</text><text class=\"sm\" x=\"139\" y=\"146\">2θ</text></svg>"},
  {id:"cir-semi", cap:"The angle in a semicircle is a right angle. BC is a diameter, so ∠BAC = 90° wherever A sits on the circle.",
   svg:"<svg viewBox=\"0 0 300 220\" role=\"img\" aria-label=\"Angle in a semicircle is ninety degrees\"><circle class=\"cir\" cx=\"150\" cy=\"110\" r=\"85\"/><line class=\"ln\" x1=\"65\" y1=\"110\" x2=\"235\" y2=\"110\"/><line class=\"hl\" x1=\"65\" y1=\"110\" x2=\"150\" y2=\"25\"/><line class=\"hl\" x1=\"235\" y1=\"110\" x2=\"150\" y2=\"25\"/><polyline class=\"sq\" points=\"140.1,34.9 150,44.8 159.9,34.9\"/><circle class=\"pt\" cx=\"150\" cy=\"110\" r=\"3.5\"/><text x=\"145\" y=\"18\">A</text><text x=\"50\" y=\"116\">B</text><text x=\"240\" y=\"116\">C</text><text x=\"152\" y=\"126\">O</text></svg>"},
  {id:"cir-same", cap:"Angles in the same segment are equal. A and A′ both stand on chord BC from the same side, so the two angles are the same.",
   svg:"<svg viewBox=\"0 0 300 220\" role=\"img\" aria-label=\"Angles in the same segment are equal\"><circle class=\"cir\" cx=\"150\" cy=\"110\" r=\"85\"/><line class=\"ln\" x1=\"76.4\" y1=\"152.5\" x2=\"223.6\" y2=\"152.5\"/><line class=\"hl\" x1=\"150\" y1=\"25\" x2=\"76.4\" y2=\"152.5\"/><line class=\"hl\" x1=\"150\" y1=\"25\" x2=\"223.6\" y2=\"152.5\"/><line class=\"dash\" x1=\"89.9\" y1=\"49.9\" x2=\"76.4\" y2=\"152.5\"/><line class=\"dash\" x1=\"89.9\" y1=\"49.9\" x2=\"223.6\" y2=\"152.5\"/><text x=\"148\" y=\"18\">A</text><text x=\"68\" y=\"44\">A′</text><text x=\"58\" y=\"166\">B</text><text x=\"230\" y=\"166\">C</text></svg>"},
  {id:"cir-cyclic", cap:"A cyclic quadrilateral: opposite angles add to 180°, and an exterior angle equals the interior angle opposite to it. The dashed diagonals are what Ptolemy's theorem relates.",
   svg:"<svg viewBox=\"0 0 300 220\" role=\"img\" aria-label=\"Cyclic quadrilateral with its diagonals\"><circle class=\"cir\" cx=\"150\" cy=\"110\" r=\"85\"/><polygon class=\"sh\" points=\"210.1,49.9 89.9,49.9 76.4,152.5 223.6,152.5\"/><line class=\"hl\" x1=\"210.1\" y1=\"49.9\" x2=\"89.9\" y2=\"49.9\"/><line class=\"hl\" x1=\"89.9\" y1=\"49.9\" x2=\"76.4\" y2=\"152.5\"/><line class=\"hl\" x1=\"76.4\" y1=\"152.5\" x2=\"223.6\" y2=\"152.5\"/><line class=\"hl\" x1=\"223.6\" y1=\"152.5\" x2=\"210.1\" y2=\"49.9\"/><line class=\"dash\" x1=\"210.1\" y1=\"49.9\" x2=\"76.4\" y2=\"152.5\"/><line class=\"dash\" x1=\"89.9\" y1=\"49.9\" x2=\"223.6\" y2=\"152.5\"/><text x=\"216\" y=\"44\">A</text><text x=\"76\" y=\"44\">B</text><text x=\"58\" y=\"166\">C</text><text x=\"230\" y=\"166\">D</text></svg>"},
  {id:"cir-tangent", cap:"Two tangents from an external point P are equal, PO bisects the angle between them, each tangent is perpendicular to the radius at its point of contact, and ∠T₁PT₂ + ∠T₁OT₂ = 180°.",
   svg:"<svg viewBox=\"0 0 300 220\" role=\"img\" aria-label=\"Two tangents drawn from an external point to a circle\"><circle class=\"cir\" cx=\"110\" cy=\"110\" r=\"70\"/><line class=\"hl\" x1=\"265\" y1=\"110\" x2=\"141.6\" y2=\"47.6\"/><line class=\"hl\" x1=\"265\" y1=\"110\" x2=\"141.6\" y2=\"172.4\"/><line class=\"ln\" x1=\"110\" y1=\"110\" x2=\"141.6\" y2=\"47.6\"/><line class=\"ln\" x1=\"110\" y1=\"110\" x2=\"141.6\" y2=\"172.4\"/><line class=\"dash\" x1=\"110\" y1=\"110\" x2=\"265\" y2=\"110\"/><circle class=\"pt\" cx=\"110\" cy=\"110\" r=\"3.5\"/><circle class=\"pt\" cx=\"265\" cy=\"110\" r=\"3.5\"/><text x=\"96\" y=\"104\">O</text><text x=\"272\" y=\"116\">P</text><text x=\"146\" y=\"40\">T₁</text><text x=\"146\" y=\"188\">T₂</text></svg>"},
  {id:"cir-alt", cap:"Alternate segment theorem: the angle between the tangent PT and the chord TB equals the angle TCB in the alternate segment.",
   svg:"<svg viewBox=\"0 0 300 230\" role=\"img\" aria-label=\"Alternate segment theorem\"><circle class=\"cir\" cx=\"150\" cy=\"110\" r=\"85\"/><line class=\"ln\" x1=\"45\" y1=\"195\" x2=\"255\" y2=\"195\"/><line class=\"hl\" x1=\"150\" y1=\"195\" x2=\"235\" y2=\"110\"/><line class=\"dash\" x1=\"76.4\" y1=\"67.5\" x2=\"150\" y2=\"195\"/><line class=\"dash\" x1=\"76.4\" y1=\"67.5\" x2=\"235\" y2=\"110\"/><circle class=\"pt\" cx=\"150\" cy=\"195\" r=\"3.5\"/><text x=\"142\" y=\"212\">T</text><text x=\"240\" y=\"104\">B</text><text x=\"60\" y=\"62\">C</text><text x=\"248\" y=\"212\">P</text><text class=\"sm\" x=\"166\" y=\"188\">θ</text><text class=\"sm\" x=\"96\" y=\"84\">θ</text></svg>"},
  {id:"cir-chords", cap:"Two chords crossing inside the circle: PA × PB = PC × PD. The products of the two pieces of each chord are equal.",
   svg:"<svg viewBox=\"0 0 300 220\" role=\"img\" aria-label=\"Two chords intersecting inside a circle\"><circle class=\"cir\" cx=\"150\" cy=\"110\" r=\"85\"/><line class=\"hl\" x1=\"89.9\" y1=\"49.9\" x2=\"223.6\" y2=\"152.5\"/><line class=\"hl\" x1=\"210.1\" y1=\"49.9\" x2=\"89.9\" y2=\"170.1\"/><circle class=\"pt\" cx=\"152\" cy=\"97\" r=\"4\"/><text x=\"78\" y=\"44\">A</text><text x=\"228\" y=\"164\">B</text><text x=\"216\" y=\"44\">C</text><text x=\"76\" y=\"186\">D</text><text x=\"158\" y=\"92\">P</text></svg>"},
  {id:"cir-secant", cap:"Two secants from an external point: PA × PB = PC × PD, with A and C the near intersections. The near point comes first in each product.",
   svg:"<svg viewBox=\"0 0 310 220\" role=\"img\" aria-label=\"Two secants drawn from an external point\"><circle class=\"cir\" cx=\"120\" cy=\"110\" r=\"65\"/><line class=\"hl\" x1=\"280\" y1=\"170\" x2=\"59.2\" y2=\"87.2\"/><line class=\"hl\" x1=\"280\" y1=\"170\" x2=\"107.9\" y2=\"46.3\"/><circle class=\"pt\" cx=\"280\" cy=\"170\" r=\"3.5\"/><text x=\"286\" y=\"176\">P</text><text x=\"184\" y=\"148\">A</text><text x=\"44\" y=\"82\">B</text><text x=\"190\" y=\"98\">C</text><text x=\"102\" y=\"38\">D</text></svg>"},
  {id:"cir-tansec", cap:"Tangent and secant from the same external point: PT² = PA × PB. The tangent is the geometric mean of the two secant pieces.",
   svg:"<svg viewBox=\"0 0 310 220\" role=\"img\" aria-label=\"Tangent and secant from the same external point\"><circle class=\"cir\" cx=\"130\" cy=\"110\" r=\"65\"/><line class=\"hl\" x1=\"275\" y1=\"160\" x2=\"175.3\" y2=\"63.3\"/><line class=\"hl\" x1=\"275\" y1=\"160\" x2=\"68.6\" y2=\"88.8\"/><line class=\"ln\" x1=\"130\" y1=\"110\" x2=\"175.3\" y2=\"63.3\"/><circle class=\"pt\" cx=\"275\" cy=\"160\" r=\"3.5\"/><circle class=\"pt\" cx=\"130\" cy=\"110\" r=\"3.5\"/><text x=\"281\" y=\"166\">P</text><text x=\"180\" y=\"56\">T</text><text x=\"196\" y=\"144\">A</text><text x=\"52\" y=\"84\">B</text><text x=\"116\" y=\"104\">O</text></svg>"},
  {id:"cir-chord", cap:"The perpendicular from the centre bisects the chord, so half the chord, the distance d and the radius form a right-angled triangle: chord = 2√(r² − d²).",
   svg:"<svg viewBox=\"0 0 300 220\" role=\"img\" aria-label=\"Perpendicular from the centre of a circle to a chord\"><circle class=\"cir\" cx=\"150\" cy=\"110\" r=\"80\"/><line class=\"hl\" x1=\"80.7\" y1=\"150\" x2=\"219.3\" y2=\"150\"/><line class=\"ln\" x1=\"150\" y1=\"110\" x2=\"150\" y2=\"150\"/><line class=\"dash\" x1=\"150\" y1=\"110\" x2=\"219.3\" y2=\"150\"/><rect class=\"sq\" x=\"150\" y=\"136\" width=\"14\" height=\"14\"/><circle class=\"pt\" cx=\"150\" cy=\"110\" r=\"3.5\"/><text x=\"136\" y=\"106\">O</text><text x=\"64\" y=\"166\">A</text><text x=\"224\" y=\"166\">B</text><text class=\"sm\" x=\"132\" y=\"136\">d</text><text class=\"sm\" x=\"192\" y=\"122\">r</text></svg>"},
  {id:"cir-sector", cap:"A sector is bounded by two radii and an arc; the segment is what is left when the triangle OAB is cut off the sector. Segment = sector − triangle, always.",
   svg:"<svg viewBox=\"0 0 300 230\" role=\"img\" aria-label=\"Sector and segment of a circle\"><circle class=\"cir\" cx=\"150\" cy=\"125\" r=\"85\"/><path class=\"fill\" d=\"M150 125 L235 125 A85 85 0 0 0 150 40 Z\"/><path class=\"fill2\" d=\"M235 125 A85 85 0 0 0 150 40 Z\"/><line class=\"ln\" x1=\"150\" y1=\"125\" x2=\"235\" y2=\"125\"/><line class=\"ln\" x1=\"150\" y1=\"125\" x2=\"150\" y2=\"40\"/><line class=\"hl\" x1=\"150\" y1=\"40\" x2=\"235\" y2=\"125\"/><circle class=\"pt\" cx=\"150\" cy=\"125\" r=\"3.5\"/><text x=\"134\" y=\"142\">O</text><text x=\"142\" y=\"32\">A</text><text x=\"241\" y=\"131\">B</text><text class=\"sm\" x=\"162\" y=\"118\">θ</text><text class=\"sm\" x=\"196\" y=\"66\">segment</text></svg>"},
  {id:"cir-tangents2", cap:"Two circles with their centres 150 apart, radii 55 and 35: four common tangents, because the distance exceeds the sum of the radii. The direct pair is drawn.",
   svg:"<svg viewBox=\"0 0 340 210\" role=\"img\" aria-label=\"Two circles with their direct common tangents\"><circle class=\"cir\" cx=\"85\" cy=\"110\" r=\"55\"/><circle class=\"cir\" cx=\"235\" cy=\"110\" r=\"35\"/><line class=\"hl\" x1=\"20\" y1=\"45.8\" x2=\"330\" y2=\"87.5\"/><line class=\"hl\" x1=\"20\" y1=\"174.2\" x2=\"330\" y2=\"132.5\"/><line class=\"dash\" x1=\"85\" y1=\"110\" x2=\"235\" y2=\"110\"/><circle class=\"pt\" cx=\"85\" cy=\"110\" r=\"3.5\"/><circle class=\"pt\" cx=\"235\" cy=\"110\" r=\"3.5\"/><text x=\"72\" y=\"104\">O₁</text><text x=\"224\" y=\"104\">O₂</text><text class=\"sm\" x=\"142\" y=\"126\">d = 150</text></svg>"},
  {id:"cir-common", cap:"Two intersecting circles: the line joining the centres is the perpendicular bisector of the common chord, so the chord is found from two right-angled triangles.",
   svg:"<svg viewBox=\"0 0 300 220\" role=\"img\" aria-label=\"Common chord of two intersecting circles\"><circle class=\"cir\" cx=\"110\" cy=\"110\" r=\"70\"/><circle class=\"cir\" cx=\"210\" cy=\"110\" r=\"60\"/><line class=\"dash\" x1=\"110\" y1=\"110\" x2=\"210\" y2=\"110\"/><line class=\"hl\" x1=\"166.5\" y1=\"68.7\" x2=\"166.5\" y2=\"151.3\"/><rect class=\"sq\" x=\"166.5\" y=\"96\" width=\"14\" height=\"14\"/><circle class=\"pt\" cx=\"110\" cy=\"110\" r=\"3.5\"/><circle class=\"pt\" cx=\"210\" cy=\"110\" r=\"3.5\"/><text x=\"98\" y=\"104\">O₁</text><text x=\"214\" y=\"104\">O₂</text><text x=\"172\" y=\"62\">A</text><text x=\"172\" y=\"168\">B</text></svg>"}
 ],
 blocks:[

  {h:"Chords",
   rows:[
    {p:"Length of a chord at distance d from the centre", f:"chord = 2√(r² − d²)",
     d:"Because the perpendicular from the centre bisects the chord. Reverse it to find d from a given chord."},
    {p:"The perpendicular from the centre to a chord", f:"bisects the chord — and the converse holds too",
     d:"So the line from the centre to the midpoint of a chord is perpendicular to it. Both directions are examinable."},
    {p:"Equal chords, two results", f:"Equal chords are equidistant from the centre, and subtend equal angles at the centre",
     d:"Converse as well: chords equidistant from the centre are equal. The longest chord of any circle is its diameter."},
    {p:"Two parallel chords of lengths 2a and 2b on the same side of the centre",
     f:"distance between them = √(r² − a²) − √(r² − b²)",
     d:"On opposite sides of the centre the two roots are added instead. SSC sets both and the options carry both answers."},
    {p:"Common chord of two intersecting circles",
     f:"The line joining the centres bisects it at right angles",
     d:"So the chord is computed from two right-angled triangles sharing the same half-chord — see the last diagram."}
   ]},

  {h:"The angle theorems",
   rows:[
    {p:"Angle at the centre against angle at the circumference", f:"∠ at centre = 2 × ∠ at circumference on the same arc",
     d:"The parent theorem of this block. Every other angle result here is a special case of it."},
    {p:"Angle in a semicircle", f:"= 90°",
     d:"The centre angle is 180°, so the circumference angle is 90°. The converse is used constantly: if ∠BAC = 90° then BC is a diameter."},
    {p:"Angles in the same segment", f:"are equal",
     d:"Which is why four points are concyclic if two of them subtend equal angles at the other two, on the same side."},
    {p:"Angle in a major segment and in a minor segment",
     f:"Major segment angle is acute; minor segment angle is obtuse; the two add to 180°",
     d:"They are opposite angles of the cyclic quadrilateral formed by the two end points and the two vertices."},
    {p:"Cyclic quadrilateral: the two results",
     f:"Opposite angles add to 180°, and an exterior angle = the interior angle opposite",
     d:"The second is the one that saves time in a figure with a side produced. A parallelogram is cyclic only if it is a rectangle."},
    {p:"Ptolemy's theorem for a cyclic quadrilateral", f:"AC × BD = (AB × CD) + (BC × AD)",
     d:"Product of the diagonals equals the sum of the products of the two pairs of opposite sides."},
    {p:"Area of a cyclic quadrilateral (Brahmagupta)", f:"Area = √((s−a)(s−b)(s−c)(s−d)),  s = semi-perimeter",
     d:"Heron's formula with a fourth bracket and no s in front. It is the maximum area any quadrilateral with those four sides can have."}
   ]},

  {h:"Tangents and the power of a point",
   rows:[
    {p:"A tangent and the radius at the point of contact", f:"are perpendicular",
     d:"The starting line of almost every tangent question: it creates a right-angled triangle you can use Pythagoras on."},
    {p:"Length of the tangent from an external point at distance d", f:"tangent = √(d² − r²)",
     d:"Straight from the right angle above. If d < r the point is inside and there is no tangent."},
    {p:"Two tangents drawn from the same external point",
     f:"are equal in length, and the line to the centre bisects both the angle between them and the chord of contact",
     d:"Also ∠T₁PT₂ + ∠T₁OT₂ = 180°, so tangents at 60° to each other mean a 120° angle at the centre."},
    {p:"Alternate segment theorem",
     f:"The angle between a tangent and a chord = the angle in the alternate segment",
     d:"Recognising it in the figure is the whole difficulty; see the diagram. It is the tangent version of “angles in the same segment”."},
    {p:"Two chords crossing inside the circle at P", f:"PA × PB = PC × PD",
     d:"The power of an interior point. Each product is of the two pieces of one chord."},
    {p:"Two secants from an external point P", f:"PA × PB = PC × PD, with A and C nearer to P",
     d:"Each product is near piece × whole secant. Taking the far piece instead of the whole secant is the standard error."},
    {p:"Tangent and secant from the same external point", f:"PT² = PA × PB",
     d:"The limiting case of the row above, with both intersections of one secant run together. PT is the geometric mean of PA and PB."},
    {p:"Length of the direct (external) common tangent", f:"= √(d² − (r₁ − r₂)²)",
     d:"Difference of the radii, for the tangent that does not cross between the circles. d is the distance between the centres."},
    {p:"Length of the transverse (internal) common tangent", f:"= √(d² − (r₁ + r₂)²)", t:"trap",
     d:"Sum of the radii here, difference above. Getting these two the wrong way round is the most common circle error in the paper."},
    {p:"Number of common tangents, by the position of the two circles",
     f:"d > r₁+r₂: 4;  d = r₁+r₂: 3;  |r₁−r₂| < d < r₁+r₂: 2;  d = |r₁−r₂|: 1;  d < |r₁−r₂|: 0",
     d:"Read as five positions: apart, touching outside, cutting, touching inside, one inside the other. Asked directly as a one-mark question."},
    {p:"Angle between two tangents from an external point, given the centre angle", f:"∠P = 180° − ∠O",
     d:"From the cyclic quadrilateral OT₁PT₂, which has two right angles at the points of contact."}
   ]},

  {h:"Arc, sector and segment — and the three angles SSC actually uses",
   note:"One rule governs the whole block: a segment is a sector minus the triangle. Every mark lost here is lost by forgetting the triangle.",
   rows:[
    {p:"Length of an arc of angle θ degrees", f:"arc = (θ/360) × 2πr",
     d:"In radians it is simply rθ. Perimeter of a sector is arc + 2r, not arc alone — the two radii count."},
    {p:"Area of a sector of angle θ degrees", f:"sector = (θ/360) × πr²",
     d:"Equivalently ½ × arc × r, which is quicker when the arc length is what you were given."},
    {p:"Area of a segment, in general", f:"segment = sector − triangle = r²[πθ/360 − ½ sin θ]",
     d:"The triangle is the one made by the two radii and the chord, with area ½ r² sinθ."},
    {p:"Area of the minor segment cut off by a 90° arc", f:"= r²(π/4 − ½) ≈ 0.2854 r²", t:"trick",
     d:"Quarter circle minus the right-angled triangle of area ½ r². This is the single most asked segment value."},
    {p:"Area of the minor segment cut off by a 60° arc", f:"= r²(π/6 − √3/4) ≈ 0.0906 r²",
     d:"Sixth of the circle minus the equilateral triangle of side r, whose area is (√3/4)r²."},
    {p:"Area of the minor segment cut off by a 120° arc", f:"= r²(π/3 − √3/4) ≈ 0.6142 r²",
     d:"Third of the circle minus the triangle with two sides r and included 120°, area ½ r² sin120° = (√3/4)r² — the same triangle area as the 60° case, which is the catch."},
    {p:"Area of the major segment", f:"= πr² − minor segment",
     d:"Or sector of (360 − θ) plus the triangle. Subtracting from the whole circle is safer."},
    {p:"Perimeter of a segment", f:"= arc + chord = (θ/360)2πr + 2r sin(θ/2)",
     d:"The chord, not the two radii — that is what separates a segment's perimeter from a sector's."},
    {p:"Area of a circle from its circumference C", f:"Area = C²/4π",
     d:"Saves finding r first. And r = C/2π, for the questions that give the circumference and ask for a chord."},
    {p:"Area of a ring between radii R and r", f:"= π(R² − r²) = π(R + r)(R − r)",
     d:"The factorised form is the fast one when R and r are awkward numbers. Width of the ring is R − r."},
    {p:"If two circles have areas in the ratio 9 : 4, their radii and circumferences are in the ratio", f:"3 : 2 for both",
     d:"Area is the squared one. Radius, diameter, circumference and arc all scale the same way as each other."}
   ]}
 ]},

/* ====================================================================
   4. QUADRILATERALS AND POLYGONS
   Short chapter, high return: the diagonal results for the four special
   quadrilaterals, and the four counting formulas for a regular polygon.
   ==================================================================== */
{id:"polygons", n:"Quadrilaterals and polygons", short:"Polygons", band:"advanced",
 w:"The diagonal results for parallelogram, rhombus, rectangle, square and trapezium, and the angle and diagonal counts for a regular polygon.",
 intro:"Two blocks. The quadrilaterals are distinguished by what their diagonals do — bisect, bisect at right angles, are equal, or both — and almost every question is a test of exactly that. The polygon block is four formulas, all of them in n.",
 figs:[
  {id:"quad-trap", cap:"A trapezium: area is ½(a + b)h, and the segment joining the midpoints of the two non-parallel sides is ½(a + b) long and parallel to both.",
   svg:"<svg viewBox=\"0 0 300 180\" role=\"img\" aria-label=\"Trapezium with its midsegment drawn\"><polygon class=\"sh\" points=\"40,150 260,150 205,40 95,40\"/><line class=\"ln\" x1=\"40\" y1=\"150\" x2=\"260\" y2=\"150\"/><line class=\"ln\" x1=\"95\" y1=\"40\" x2=\"205\" y2=\"40\"/><line class=\"ln\" x1=\"40\" y1=\"150\" x2=\"95\" y2=\"40\"/><line class=\"ln\" x1=\"260\" y1=\"150\" x2=\"205\" y2=\"40\"/><line class=\"hl\" x1=\"67.5\" y1=\"95\" x2=\"232.5\" y2=\"95\"/><line class=\"dash\" x1=\"150\" y1=\"40\" x2=\"150\" y2=\"150\"/><rect class=\"sq\" x=\"150\" y=\"136\" width=\"14\" height=\"14\"/><text class=\"sm\" x=\"144\" y=\"34\">a</text><text class=\"sm\" x=\"144\" y=\"168\">b</text><text class=\"sm\" x=\"156\" y=\"100\">h</text></svg>"},
  {id:"quad-rhomb", cap:"A rhombus: the diagonals bisect each other at right angles, so area = ½ d₁d₂ and the side is ½√(d₁² + d₂²).",
   svg:"<svg viewBox=\"0 0 300 200\" role=\"img\" aria-label=\"Rhombus with both diagonals drawn\"><polygon class=\"sh\" points=\"150,25 265,100 150,175 35,100\"/><line class=\"ln\" x1=\"150\" y1=\"25\" x2=\"265\" y2=\"100\"/><line class=\"ln\" x1=\"265\" y1=\"100\" x2=\"150\" y2=\"175\"/><line class=\"ln\" x1=\"150\" y1=\"175\" x2=\"35\" y2=\"100\"/><line class=\"ln\" x1=\"35\" y1=\"100\" x2=\"150\" y2=\"25\"/><line class=\"hl\" x1=\"35\" y1=\"100\" x2=\"265\" y2=\"100\"/><line class=\"hl\" x1=\"150\" y1=\"25\" x2=\"150\" y2=\"175\"/><rect class=\"sq\" x=\"150\" y=\"86\" width=\"14\" height=\"14\"/><text class=\"sm\" x=\"196\" y=\"94\">d₁/2</text><text class=\"sm\" x=\"156\" y=\"58\">d₂/2</text></svg>"}
 ],
 blocks:[

  {h:"The special quadrilaterals, told apart by their diagonals",
   rows:[
    {p:"Parallelogram: what do the diagonals do?", f:"They bisect each other (but are neither equal nor perpendicular)",
     d:"Each diagonal also halves the area, and the two together cut it into four triangles of equal area."},
    {p:"Sum of the squares of a parallelogram's diagonals", f:"d₁² + d₂² = 2(a² + b²)", t:"trap",
     d:"That is twice the sum of the squares of two adjacent sides — equivalently the sum of the squares of all four sides. Quoting it without the 2 is the standard error."},
    {p:"Area of a parallelogram", f:"= base × height = ab sinθ, θ the angle between the sides",
     d:"Not ab. A parallelogram with sides 6 and 8 and an angle of 30° has area 24, not 48."},
    {p:"Rhombus: the diagonals, the area, the side",
     f:"Diagonals bisect at right angles.  Area = ½ d₁d₂.  Side = ½√(d₁² + d₂²)",
     d:"The side formula follows from the right angle at the centre. All four sides equal, opposite angles equal."},
    {p:"Rectangle: the diagonals, and the diagonal length",
     f:"Diagonals are equal and bisect each other.  Diagonal = √(l² + b²)",
     d:"They are not perpendicular unless the rectangle is a square. A rectangle is always cyclic."},
    {p:"Square of side a: diagonal, area from the diagonal",
     f:"Diagonal = a√2.  Area = a² = ½ d²",
     d:"So a square of diagonal 10 has area 50. Its diagonals are equal, perpendicular and bisect each other — the only quadrilateral with all three."},
    {p:"Area of a trapezium", f:"Area = ½(a + b) × h, a and b the parallel sides",
     d:"h is the perpendicular distance between the parallel sides, not the slant side."},
    {p:"The midsegment of a trapezium", f:"= ½(a + b), parallel to both parallel sides",
     d:"Joining the midpoints of the two non-parallel sides. It also bisects both diagonals."},
    {p:"Area of any quadrilateral from its diagonals and the angle between them", f:"Area = ½ d₁d₂ sinθ",
     d:"The rhombus case is sin 90° = 1. For a general quadrilateral with one diagonal and the two perpendiculars to it, area = ½ d(h₁ + h₂)."},
    {p:"Which quadrilaterals are cyclic?", f:"A quadrilateral is cyclic if and only if its opposite angles add to 180°",
     d:"So rectangles and squares always are; a parallelogram or rhombus is cyclic only when it is a rectangle or a square."},
    {p:"The quadrilateral formed by joining the midpoints of any quadrilateral",
     f:"is always a parallelogram, with half the area", t:"trick",
     d:"From the midpoint theorem applied to the two triangles each diagonal makes. For a rhombus it is a rectangle; for a rectangle it is a rhombus."}
   ]},

  {h:"Regular polygons",
   rows:[
    {p:"Sum of the interior angles of an n-sided polygon", f:"= (n − 2) × 180°",
     d:"So 540° for a pentagon, 720° for a hexagon, 1080° for an octagon."},
    {p:"Each interior angle of a REGULAR n-gon", f:"= (n − 2) × 180° / n",
     d:"120° for a hexagon, 135° for an octagon, 108° for a pentagon. Only regular polygons have one value."},
    {p:"Each exterior angle of a regular n-gon, and the sum", f:"each = 360°/n;  the sum is always 360°",
     d:"Which is the fast route to n: an exterior angle of 24° means n = 15. Interior + exterior = 180° at every vertex."},
    {p:"Number of diagonals of an n-sided polygon", f:"= n(n − 3)/2",
     d:"Five for a pentagon, nine for a hexagon, twenty for an octagon. Not n(n−1)/2, which counts the sides as well."},
    {p:"Area of a regular polygon from its apothem", f:"Area = ½ × perimeter × apothem",
     d:"The apothem is the perpendicular from the centre to a side — the inradius. The general form is (n/4)a² cot(180°/n)."},
    {p:"Area of a regular hexagon of side a", f:"= (3√3/2)a²",
     d:"It is six equilateral triangles of side a, so 6 × (√3/4)a². Its longer diagonal is 2a and its shorter is a√3."},
    {p:"Area of a regular octagon of side a", f:"= 2(1 + √2)a²",
     d:"Appears in questions about cutting the corners off a square. Occasional, but there is no deriving it in the hall."},
    {p:"Number of triangles formed by the vertices of an n-gon", f:"= n(n−1)(n−2)/6",
     d:"Choosing any 3 of the n vertices. For a hexagon that is 20."},
    {p:"Interior angle of a regular polygon is 150°. How many sides?", f:"Exterior = 30°, so n = 12",
     d:"Always go through the exterior angle; dividing 360 is one step, solving (n−2)180/n = 150 is three."}
   ]}
 ]},

/* ====================================================================
   5. MENSURATION 2D
   Plane figures. Everything here is an area or a perimeter, and the
   questions are mostly either a shaded region or a percentage change.
   ==================================================================== */
{id:"mensuration-2d", n:"Mensuration 2D", short:"Mens. 2D", band:"advanced", hy:1,
 w:"Every plane area and perimeter in one place, with the path-and-border patterns and the percentage-change results.",
 intro:"The formulas themselves are the easy part. What SSC actually tests is three things: reading a shaded region as a sum and difference of standard shapes, converting a percentage change in a dimension into a percentage change in area, and keeping units straight — hectare, are and square kilometre all appear.",
 blocks:[

  {h:"The standard figures",
   rows:[
    {p:"Rectangle: area, perimeter, diagonal", f:"A = lb;  P = 2(l + b);  d = √(l² + b²)",
     d:"Given the perimeter and the diagonal you can get the area: (l+b)² − d² = 2lb."},
    {p:"Square of side a: area, perimeter, diagonal", f:"A = a²;  P = 4a;  d = a√2;  A = ½ d²",
     d:"Of all rectangles with a given perimeter the square has the largest area — asked as a reasoning question."},
    {p:"Triangle: area from base and height, and from three sides",
     f:"A = ½ bh;  A = √(s(s−a)(s−b)(s−c)) with s = (a+b+c)/2",
     d:"Heron's formula. For a right triangle the two legs are base and height, so A = ½ × leg × leg."},
    {p:"Equilateral triangle of side a: area, height, perimeter",
     f:"A = (√3/4)a²;  h = (√3/2)a;  P = 3a",
     d:"√3/4 for area, √3/2 for height. If the height is given, a = 2h/√3."},
    {p:"Circle: area, circumference, area from circumference", f:"A = πr²;  C = 2πr;  A = C²/4π",
     d:"Use π = 22/7 when the radius is a multiple of 7, which is how SSC signals it."},
    {p:"Semicircle: area and perimeter", f:"A = ½πr²;  P = πr + 2r = r(π + 2)", t:"trap",
     d:"The perimeter includes the diameter. Giving πr alone is the standard mistake."},
    {p:"Quadrant of a circle: area and perimeter", f:"A = ¼πr²;  P = (πr/2) + 2r",
     d:"Arc plus two radii. The same caution as the semicircle."},
    {p:"Parallelogram and rhombus", f:"Parallelogram A = bh;  Rhombus A = ½ d₁d₂",
     d:"A rhombus can also be done as base × height, since it is a parallelogram with four equal sides."},
    {p:"Trapezium", f:"A = ½(a + b)h",
     d:"If the two parallel sides and all four sides are given, find h by dropping two perpendiculars and using Pythagoras."},
    {p:"Regular hexagon of side a", f:"A = (3√3/2)a²;  P = 6a",
     d:"Six equilateral triangles. Its area is 1.5√3 ≈ 2.598 times a²."}
   ]},

  {h:"Paths, borders and the patterns SSC builds from them",
   rows:[
    {p:"Path of width w OUTSIDE a rectangle l × b: area of the path",
     f:"= 2w(l + b + 2w)",
     d:"From (l+2w)(b+2w) − lb. The 2w inside the bracket is what gets dropped."},
    {p:"Path of width w INSIDE a rectangle l × b: area of the path", f:"= 2w(l + b − 2w)",
     d:"Minus 2w for an inside path, plus 2w for an outside one. The inner rectangle is (l−2w)(b−2w)."},
    {p:"Two crossroads of width w across a rectangular field l × b", f:"area of the roads = w(l + b − w)",
     d:"The minus w removes the square where the two roads cross, which would otherwise be counted twice."},
    {p:"Circular path of width w around a circle of radius r", f:"= π((r + w)² − r²) = πw(2r + w)",
     d:"Same ring formula as in the circles chapter, written for a path."},
    {p:"Largest circle inside a square of side a", f:"radius = a/2;  area ratio circle : square = π : 4",
     d:"And the largest square inside a circle of radius r has diagonal 2r, so side r√2 and area 2r²."},
    {p:"Largest circle inside an equilateral triangle of side a", f:"radius = a/(2√3)",
     d:"That is the inradius. The circumradius a/√3 is for the smallest circle that contains the triangle."},
    {p:"Four equal circles inscribed in a square of side a", f:"each radius = a/4; uncovered area = a²(1 − π/4)",
     d:"The uncovered fraction is the same for one circle of radius a/2 or four of radius a/4 — which is itself a question."},
    {p:"Area of the shaded region between a square and the quadrants at its corners",
     f:"= a² − π(a/2)² for four quarter-circles of radius a/2",
     d:"Four quadrants of radius a/2 make exactly one circle of radius a/2. Recognising that is the whole question."}
   ]},

  {h:"Percentage change — the block that is pure formula",
   note:"A change in a length changes an area by more than the same percentage. These four lines are asked every single sitting.",
   rows:[
    {p:"Each side of a square or the radius of a circle rises by x%. Area rises by",
     f:"(2x + x²/100)%", t:"trick",
     d:"So +10% gives +21%, +20% gives +44%, +30% gives +69%. Use −x for a fall: −10% gives −19%."},
    {p:"Length rises x% and breadth rises y%. Area change is", f:"(x + y + xy/100)%",
     d:"Signed: a 20% rise and a 20% fall gives 20 − 20 − 4 = −4%, a net loss. Not zero."},
    {p:"One side of a rectangle rises x%. To keep the area unchanged the other must fall by",
     f:"[x/(100 + x)] × 100 %",
     d:"So a 25% rise needs a 20% fall, and a 50% rise needs a 33⅓% fall. The answer is never the same x."},
    {p:"Area rises by x%. The side rises by", f:"(√(1 + x/100) − 1) × 100 %",
     d:"The reverse direction. Area +44% means side +20%; area +21% means side +10%."},
    {p:"All sides of a figure are scaled by k. Perimeter, area and volume scale by",
     f:"perimeter ×k, area ×k², volume ×k³",
     d:"The one rule that covers both mensuration chapters. Doubling every dimension multiplies area by 4 and volume by 8."}
   ]},

  {h:"Units, because a question is sometimes only about these",
   rows:[
    {p:"1 hectare in square metres", f:"1 hectare = 10,000 m²",
     d:"And 1 are = 100 m², so 1 hectare = 100 ares. A field “2 hectares” is 20,000 m²."},
    {p:"1 square kilometre in hectares and square metres", f:"1 km² = 100 hectares = 10⁶ m²",
     d:"The factor between km and m is 1000, so between km² and m² it is a million."},
    {p:"1 litre in cubic centimetres and cubic metres", f:"1 litre = 1000 cm³;  1 m³ = 1000 litres",
     d:"The bridge between mensuration 3D and any “how much water” question. 1 m³ = 10⁶ cm³."},
    {p:"Cost of fencing versus cost of flooring", f:"Fencing is charged per unit LENGTH, flooring per unit AREA",
     d:"Fencing uses the perimeter, flooring and painting use the area. Reading the wrong one is the trap, not the arithmetic."}
   ]}
 ]},

/* ====================================================================
   6. MENSURATION 3D
   Solids. The formulas are long but mechanical; the marks are decided by
   two things instead. One, which surface area is being asked for — curved,
   lateral or total. Two, the recasting questions, where a solid is melted
   into another shape and the VOLUME is what carries over, never the area.
   ==================================================================== */
{id:"mensuration-3d", n:"Mensuration 3D", short:"Mens. 3D", band:"advanced", hy:1,
 w:"Cube, cuboid, cylinder, cone, sphere, hemisphere, frustum, prism and pyramid — volume and all three surface areas — plus the recasting and inscribing results.",
 intro:"Three things decide this chapter. First, keep curved, lateral and total surface area apart; the paper names one of the three precisely and the options carry all three. Second, when a solid is melted and recast, volume is conserved and surface area is not. Third, the one-third: a cone is a third of the cylinder on the same base and height, and a pyramid is a third of its prism.",
 figs:[
  {id:"sol-cone", cap:"A cone: the slant height l, the radius r and the vertical height h form a right-angled triangle, so l² = r² + h². Curved surface is πrl; volume is ⅓πr²h.",
   svg:"<svg viewBox=\"0 0 300 200\" role=\"img\" aria-label=\"Cone showing radius, height and slant height\"><ellipse class=\"cir\" cx=\"150\" cy=\"160\" rx=\"85\" ry=\"24\"/><path class=\"sh\" d=\"M150 25 L235 160 A85 24 0 0 1 65 160 Z\"/><line class=\"ln\" x1=\"150\" y1=\"25\" x2=\"65\" y2=\"160\"/><line class=\"hl\" x1=\"150\" y1=\"25\" x2=\"235\" y2=\"160\"/><line class=\"dash\" x1=\"150\" y1=\"25\" x2=\"150\" y2=\"160\"/><line class=\"dash\" x1=\"150\" y1=\"160\" x2=\"235\" y2=\"160\"/><rect class=\"sq\" x=\"150\" y=\"146\" width=\"14\" height=\"14\"/><text class=\"sm\" x=\"132\" y=\"100\">h</text><text class=\"sm\" x=\"190\" y=\"176\">r</text><text class=\"sm\" x=\"202\" y=\"96\">l</text></svg>"},
  {id:"sol-frustum", cap:"A frustum is a cone with the top cut off parallel to the base. l² = h² + (R − r)² — the DIFFERENCE of the radii, not the sum.",
   svg:"<svg viewBox=\"0 0 300 200\" role=\"img\" aria-label=\"Frustum of a cone showing both radii, height and slant height\"><path class=\"sh\" d=\"M60 160 L105 50 L195 50 L240 160 Z\"/><ellipse class=\"cir\" cx=\"150\" cy=\"160\" rx=\"90\" ry=\"24\"/><ellipse class=\"cir\" cx=\"150\" cy=\"50\" rx=\"45\" ry=\"14\"/><line class=\"hl\" x1=\"60\" y1=\"160\" x2=\"105\" y2=\"50\"/><line class=\"hl\" x1=\"240\" y1=\"160\" x2=\"195\" y2=\"50\"/><line class=\"dash\" x1=\"150\" y1=\"50\" x2=\"150\" y2=\"160\"/><line class=\"dash\" x1=\"150\" y1=\"160\" x2=\"240\" y2=\"160\"/><line class=\"dash\" x1=\"150\" y1=\"50\" x2=\"195\" y2=\"50\"/><text class=\"sm\" x=\"132\" y=\"110\">h</text><text class=\"sm\" x=\"196\" y=\"176\">R</text><text class=\"sm\" x=\"168\" y=\"44\">r</text><text class=\"sm\" x=\"214\" y=\"100\">l</text></svg>"}
 ],
 blocks:[

  {h:"Cube and cuboid",
   rows:[
    {p:"Cube of edge a: volume, total surface, lateral surface, diagonal",
     f:"V = a³;  TSA = 6a²;  LSA = 4a²;  diagonal = a√3",
     d:"LSA is the four walls, TSA adds the top and the bottom. A room painted “walls and ceiling only” is 4a² + a²."},
    {p:"Cuboid l × b × h: volume, total surface, lateral surface, diagonal",
     f:"V = lbh;  TSA = 2(lb + bh + hl);  LSA = 2h(l + b);  diagonal = √(l² + b² + h²)",
     d:"LSA = perimeter of the base × height, which is the form that generalises to every prism."},
    {p:"Cube's volume when the edge rises by x%", f:"rises by (3x + 3x²/100 + x³/10000)%",
     d:"Or just compute (1 + x/100)³. +10% on the edge gives +33.1% on the volume."},
    {p:"Largest cube cut from a cuboid l × b × h", f:"edge = the smallest of l, b, h",
     d:"And the largest sphere that fits inside a cube of edge a has radius a/2."},
    {p:"A cube of edge a is cut into n³ small cubes of edge a/n. Total surface area becomes",
     f:"n times the original", t:"trick",
     d:"Volume is unchanged, surface area multiplies by n. A 4 cm cube cut into 1 cm cubes goes from 96 cm² to 384 cm²."},
    {p:"Sum of the lengths of all the edges", f:"Cube: 12a.  Cuboid: 4(l + b + h)",
     d:"Appears as “the wire needed to make the frame”. Twelve edges either way, grouped in fours."}
   ]},

  {h:"Cylinder",
   rows:[
    {p:"Cylinder: volume, curved surface, total surface",
     f:"V = πr²h;  CSA = 2πrh;  TSA = 2πr(r + h)",
     d:"TSA = CSA + two circles. A pipe or a tube open at both ends is CSA only; a tin with a lid is TSA."},
    {p:"Cylinder open at one end (a drum, a tumbler)", f:"Surface = 2πrh + πr²",
     d:"One circle, not two. This phrasing is the whole of some questions."},
    {p:"Hollow cylinder, outer R and inner r, height h",
     f:"V = πh(R² − r²);  TSA = 2πh(R + r) + 2π(R² − r²)",
     d:"The last term is the two rings at the ends. A pipe's volume of metal is the first formula."},
    {p:"Two cylinders of the same volume, radii in ratio 2 : 3. Heights are in ratio", f:"9 : 4",
     d:"Volume ∝ r²h, so h ∝ 1/r² when V is fixed. The ratio inverts and squares."},
    {p:"Water flowing through a pipe of radius r at speed v for time t", f:"Volume delivered = πr² × v × t",
     d:"Keep units together: if r is in cm and v in m per minute, convert before multiplying, not after."},
    {p:"A rectangular sheet l × b rolled into a cylinder", f:"The rolled side becomes the circumference, the other becomes the height",
     d:"Rolling along l gives 2πr = l and h = b; rolling the other way gives a different volume. Both are asked, and the volumes differ."}
   ]},

  {h:"Cone and frustum",
   rows:[
    {p:"Cone: slant height, volume, curved surface, total surface",
     f:"l = √(r² + h²);  V = ⅓πr²h;  CSA = πrl;  TSA = πr(l + r)",
     d:"CSA uses the SLANT height, volume uses the VERTICAL height. Substituting one for the other is the commonest error in the chapter."},
    {p:"Frustum of a cone, radii R and r, height h: volume",
     f:"V = ⅓πh(R² + r² + Rr)",
     d:"The middle term Rr is what is forgotten. A bucket, a glass and a lampshade are all frustums."},
    {p:"Frustum: slant height and curved surface", f:"l = √(h² + (R − r)²);  CSA = πl(R + r)", t:"trap",
     d:"DIFFERENCE of radii inside the slant height, SUM of radii in the curved surface. The two formulas use opposite signs."},
    {p:"Total surface of a frustum", f:"= πl(R + r) + πR² + πr²",
     d:"For a bucket, which has no lid, the smaller circle at the top is omitted: CSA + πr² for the base only."},
    {p:"A cone cut parallel to the base at half the height. Volume of the small cone : whole cone",
     f:"1 : 8, so small cone : frustum = 1 : 7", t:"trick",
     d:"The small cone is similar with ratio ½, so volume ratio is (½)³. The 1 : 7 answer is the one asked."},
    {p:"Volume ratio when a cone is cut into three parts by planes at h/3 and 2h/3", f:"1 : 7 : 19",
     d:"Cumulative volumes go 1 : 8 : 27, so the differences are 1, 7 and 19."},
    {p:"Height of a cone is doubled and the radius halved. The volume becomes", f:"half of what it was",
     d:"V ∝ r²h, so (½)² × 2 = ½. Questions like this are testing the square on r, nothing else."}
   ]},

  {h:"Sphere and hemisphere",
   rows:[
    {p:"Sphere: volume and surface area", f:"V = (4/3)πr³;  SA = 4πr²",
     d:"A sphere has one surface, so there is no “total” and “curved” distinction to make."},
    {p:"Hemisphere: volume, curved surface, total surface", f:"V = (2/3)πr³;  CSA = 2πr²;  TSA = 3πr²",
     d:"TSA adds the flat circular face πr² to the curved 2πr². A solid hemisphere is 3πr²; a bowl open at the top is 2πr²."},
    {p:"Spherical shell, outer R and inner r: volume of material", f:"V = (4/3)π(R³ − r³)",
     d:"A hollow ball's weight question is this volume times the density."},
    {p:"Volume ratio of a cone, a hemisphere and a cylinder on the same base with h = r",
     f:"1 : 2 : 3", t:"trick",
     d:"⅓πr³ : ⅔πr³ : πr³. And for a cone, sphere and cylinder with the same radius and height 2r the ratio is also 1 : 2 : 3."},
    {p:"Surface area of a sphere compared with the curved surface of its circumscribing cylinder", f:"They are equal, both 4πr²",
     d:"Archimedes' result. The cylinder has height 2r, so 2πr × 2r = 4πr²."},
    {p:"If the radius of a sphere rises by x%, volume and surface rise by",
     f:"volume by ((1+x/100)³ − 1)×100%, surface by (2x + x²/100)%",
     d:"+100% on the radius means +700% on the volume and +300% on the surface."},
    {p:"Largest sphere inside a cube of edge a, and the smallest cube around a sphere of radius r",
     f:"Sphere in cube: r = a/2.  Cube around sphere: edge = 2r",
     d:"And the largest cube inside a sphere of radius r has diagonal 2r, so edge = 2r/√3."}
   ]},

  {h:"Prism, pyramid and tetrahedron",
   rows:[
    {p:"Prism: volume and lateral surface", f:"V = base area × height;  LSA = base perimeter × height",
     d:"TSA = LSA + 2 × base area. A cuboid and a cylinder are both prisms, which is why their formulas look the same."},
    {p:"Pyramid: volume and lateral surface", f:"V = ⅓ × base area × height;  LSA = ½ × base perimeter × slant height",
     d:"The one-third again. The slant height of a pyramid runs down the middle of a triangular face, not along an edge."},
    {p:"Regular tetrahedron of edge a: volume, surface, height",
     f:"V = a³/(6√2);  TSA = √3 a²;  height = a√(2/3)",
     d:"Four equilateral faces, so TSA = 4 × (√3/4)a² = √3a². The volume constant is 1/(6√2) ≈ 0.1179."},
    {p:"Triangular prism with an equilateral base of side a and length h", f:"V = (√3/4)a²h;  LSA = 3ah",
     d:"Base area times length, and three rectangles for the sides."},
    {p:"Square pyramid, base a, height h: volume and slant height",
     f:"V = ⅓a²h;  slant height = √(h² + a²/4)",
     d:"a/2, not a, inside the slant height — the perpendicular lands at the middle of a base edge."}
   ]},

  {h:"Melting, recasting and filling — where the marks actually are",
   note:"One principle: volume is conserved, surface area is not. Set the two volumes equal and solve.",
   rows:[
    {p:"A sphere of radius R is melted into n small spheres of radius r. Relation?", f:"R³ = n r³",
     d:"Cubes, because volume. The total surface area goes UP by a factor of ∛ n — asked as a separate part."},
    {p:"A cylinder is melted into a sphere, or a cone. What is equal?", f:"Only the volume",
     d:"So πr²h = (4/3)πR³ for a sphere, or πr²h = ⅓πR²H for a cone. Never equate the surfaces."},
    {p:"A hollow sphere is made from a solid one: number of small balls from a shell",
     f:"n = (R³ − r³)/ρ³, ρ the radius of one small ball",
     d:"The volume of material divided by the volume of one ball. Round DOWN — you cannot cast a fraction of a ball."},
    {p:"A cone full of water is poured into a cylinder of the same radius. Height of water?",
     f:"= ⅓ of the cone's height",
     d:"The volume ⅓πr²h fills πr²H, so H = h/3. The same logic answers every pouring question."},
    {p:"A sphere of radius r is dropped into a cylinder of radius R. Rise in the water level",
     f:"= (4r³)/(3R²)",
     d:"From (4/3)πr³ = πR² × rise. The π cancels, which is why these questions have clean answers."},
    {p:"A cuboidal tank l × b is filled to height h. How many litres?",
     f:"litres = (l × b × h in cm³) ÷ 1000",
     d:"Convert to centimetres first and divide at the end. 1 m³ = 1000 litres is the shortcut when the figures are in metres."},
    {p:"A wire of radius r and length L is drawn into a wire of radius r/2. New length?",
     f:"4L", t:"trick",
     d:"Volume is fixed and it goes as r², so halving the radius quadruples the length. This is the standard drawing-out question."}
   ]}
 ]},

/* ====================================================================
   7. TRIGONOMETRY
   The ratios, the identities, the standard values, and the maximum and
   minimum results. SSC asks trigonometry in three ways and three only:
   simplify an expression using an identity, evaluate at standard angles,
   or find a maximum or minimum.
   ==================================================================== */
{id:"trigonometry", n:"Trigonometry", short:"Trig", band:"advanced", hy:1,
 w:"The three Pythagorean identities, the standard-angle table, complementary and quadrant rules, the compound and multiple angle formulas, and every maximum-minimum result.",
 intro:"The three Pythagorean identities and the standard-angle table carry about three quarters of the marks. The compound-angle formulas are needed less often than candidates expect, but the maximum-minimum block is asked almost every sitting and is pure recall — there is nothing to work out.",
 blocks:[

  {h:"The ratios and the three identities",
   rows:[
    {p:"The six ratios in a right-angled triangle",
     f:"sin = P/H, cos = B/H, tan = P/B, cosec = H/P, sec = H/B, cot = B/P",
     d:"P perpendicular, B base, H hypotenuse. The three reciprocal pairs are sin-cosec, cos-sec, tan-cot."},
    {p:"The three Pythagorean identities",
     f:"sin²θ + cos²θ = 1;  1 + tan²θ = sec²θ;  1 + cot²θ = cosec²θ",
     d:"Written as differences they are more useful: sec²θ − tan²θ = 1 and cosec²θ − cot²θ = 1, which factorise as (sec−tan)(sec+tan) = 1."},
    {p:"(secθ − tanθ)(secθ + tanθ) = ?", f:"= 1", t:"trick",
     d:"So if secθ + tanθ = k then secθ − tanθ = 1/k, and both can be found by adding and subtracting. Same for cosec and cot."},
    {p:"tanθ and cotθ in terms of sin and cos", f:"tanθ = sinθ/cosθ;  cotθ = cosθ/sinθ;  tanθ · cotθ = 1",
     d:"Converting everything to sin and cos is the default move when an expression will not simplify."},
    {p:"sin⁴θ + cos⁴θ in terms of sin²θcos²θ", f:"= 1 − 2sin²θcos²θ",
     d:"From (sin² + cos²)². Its minimum is ½ at 45° and its maximum is 1 at 0° and 90°."},
    {p:"sin⁶θ + cos⁶θ = ?", f:"= 1 − 3sin²θcos²θ",
     d:"From the a³ + b³ identity with a = sin² and b = cos². Minimum ¼ at 45°."},
    {p:"(1 − cosθ)(1 + cosθ) = ?", f:"= sin²θ",
     d:"And (1 − sinθ)(1 + sinθ) = cos²θ. Both are difference-of-squares applied to the first identity."},
    {p:"√((1 − cosθ)/(1 + cosθ)) = ?", f:"= tan(θ/2)",
     d:"Also equal to cosecθ − cotθ. The half-angle version appears in simplification questions."}
   ]},

  {h:"The standard-angle table — nothing in this chapter works without it",
   note:"Read sin across 0, 30, 45, 60, 90 as 0, ½, 1/√2, √3/2, 1 — and cos as the same list backwards.",
   rows:[
    {p:"sin at 0°, 30°, 45°, 60°, 90°", f:"0,  ½,  1/√2,  √3/2,  1",
     d:"Equivalently √0/2, √1/2, √2/2, √3/2, √4/2 — the numerators are √0 to √4, which is how to recover it if you blank."},
    {p:"cos at 0°, 30°, 45°, 60°, 90°", f:"1,  √3/2,  1/√2,  ½,  0",
     d:"The sine row reversed, because cosθ = sin(90° − θ)."},
    {p:"tan at 0°, 30°, 45°, 60°, 90°", f:"0,  1/√3,  1,  √3,  undefined",
     d:"tan 90° does not exist, and cot 0° does not exist — both are asked as “which is not defined”."},
    {p:"tan 15° and tan 75°", f:"tan 15° = 2 − √3;  tan 75° = 2 + √3",
     d:"Their product is 1, as it must be for complementary angles. Also tan 22½° = √2 − 1."},
    {p:"sin 15° and cos 15°", f:"sin 15° = (√3 − 1)/(2√2);  cos 15° = (√3 + 1)/(2√2)",
     d:"From sin(45° − 30°). Worth recognising rather than deriving under time."},
    {p:"The complementary-angle rules",
     f:"sin(90−θ) = cosθ;  tan(90−θ) = cotθ;  sec(90−θ) = cosecθ",
     d:"The engine of every “sin 20° · sec 70°” question: the two angles add to 90°, so the expression collapses to 1."},
    {p:"Signs of the ratios by quadrant",
     f:"I all positive; II sin and cosec; III tan and cot; IV cos and sec", t:"trap",
     d:"“All Students Take Coffee”. Which ratio stays positive in each quadrant is asked directly."},
    {p:"sin(180° − θ), cos(180° − θ), tan(180° − θ)",
     f:"= sinθ,  −cosθ,  −tanθ",
     d:"Rule: for 180 and 360 the ratio keeps its name and takes the quadrant's sign; for 90 and 270 the name switches to its co-ratio."},
    {p:"sin(90° + θ) and cos(90° + θ)", f:"= cosθ  and  −sinθ",
     d:"Name changes because 90 is an odd multiple of 90°. The sign comes from the second quadrant."},
    {p:"1 radian in degrees, and π radians", f:"π radians = 180°, so 1 radian ≈ 57° 16′ ≈ 57.3°",
     d:"Conversion: degrees = radians × 180/π. SSC asks 1 radian in degrees and π/6, π/4, π/3 as 30°, 45°, 60°."}
   ]},

  {h:"Compound and multiple angles",
   rows:[
    {p:"sin(A ± B)", f:"sin A cos B ± cos A sin B",
     d:"Signs match the bracket. The product form sin A cos B = ½[sin(A+B) + sin(A−B)] is occasionally wanted."},
    {p:"cos(A ± B)", f:"cos A cos B ∓ sin A sin B", t:"trap",
     d:"Signs are OPPOSITE to the bracket here: cos(A + B) has a minus in it. This single sign is the commonest trigonometry slip."},
    {p:"tan(A ± B)", f:"(tan A ± tan B)/(1 ∓ tan A tan B)",
     d:"Top sign follows the bracket, bottom sign opposes it. If A + B = 45° then tanA + tanB + tanA tanB = 1."},
    {p:"sin 2θ, three forms", f:"2 sinθ cosθ = 2tanθ/(1 + tan²θ)",
     d:"The tan form is what turns a given tanθ into sin2θ in one step."},
    {p:"cos 2θ, four forms",
     f:"cos²θ − sin²θ = 2cos²θ − 1 = 1 − 2sin²θ = (1 − tan²θ)/(1 + tan²θ)",
     d:"Pick the form that matches what the question gives. The third form is the one used to find sinθ from cos2θ."},
    {p:"tan 2θ", f:"= 2tanθ/(1 − tan²θ)",
     d:"Undefined at θ = 45°, which is a question in itself."},
    {p:"sin 3θ and cos 3θ", f:"sin3θ = 3sinθ − 4sin³θ;  cos3θ = 4cos³θ − 3cosθ",
     d:"Sine has the 3 first, cosine has the 4 first. Mixing them up is why this row is here."},
    {p:"Sine rule and cosine rule",
     f:"a/sinA = b/sinB = c/sinC = 2R;  cos A = (b² + c² − a²)/2bc",
     d:"The cosine rule rearranged is a² = b² + c² − 2bc cosA — Pythagoras with a correction term that vanishes at 90°."}
   ]},

  {h:"Maximum and minimum — pure recall, asked every sitting",
   rows:[
    {p:"Range of sinθ and cosθ", f:"−1 ≤ sinθ ≤ 1 and −1 ≤ cosθ ≤ 1",
     d:"But secθ and cosecθ never lie strictly between −1 and 1, and tanθ and cotθ take every real value."},
    {p:"Maximum and minimum of a sinθ + b cosθ", f:"√(a² + b²) and −√(a² + b²)", t:"trick",
     d:"So 3sinθ + 4cosθ runs from −5 to 5. The single most asked maximum in the chapter."},
    {p:"Maximum and minimum of a sin²θ + b cos²θ", f:"the larger of a and b, and the smaller of a and b",
     d:"Because it is a weighted average of a and b. 3sin²θ + 5cos²θ runs from 3 to 5, not from −8 to 8."},
    {p:"Maximum of sinθ cosθ", f:"½, at θ = 45°  (minimum −½)",
     d:"Because sinθcosθ = ½ sin2θ. Likewise the maximum of sinθ + cosθ is √2 and the minimum is −√2."},
    {p:"Minimum of tanθ + cotθ, and of secθ + cosecθ in the first quadrant",
     f:"tanθ + cotθ ≥ 2;  secθ + cosecθ ≥ 2√2",
     d:"Both at 45°, both from AM ≥ GM. sinθ + cosecθ ≥ 2 as well."},
    {p:"Minimum of sin⁴θ + cos⁴θ, and of sin⁶θ + cos⁶θ", f:"½  and  ¼, both at 45°",
     d:"Maximum is 1 for both, at 0° and 90°. The pair is asked together."},
    {p:"Maximum of a cosθ + b sinθ + c", f:"c + √(a² + b²)",
     d:"The constant simply shifts the whole range. Minimum is c − √(a² + b²)."},
    {p:"Value of sin² 1° + sin² 2° + … + sin² 89°", f:"= 44½", t:"trick",
     d:"Pair 1° with 89°, 2° with 88° and so on: each pair sums to 1, giving 44 pairs, and sin²45° = ½ is left over."}
   ]}
 ]},

/* ====================================================================
   8. HEIGHT AND DISTANCE
   The applied half of trigonometry, and the chapter with the smallest
   number of distinct question types in the whole paper. There are about
   nine shapes and they repeat sitting after sitting; all nine are below.
   ==================================================================== */
{id:"height-distance", n:"Height and distance", short:"Height & dist.", band:"advanced", hy:1,
 w:"All nine SSC question shapes — one angle, two angles from the same side, two angles from opposite sides, complementary angles, shadows, moving objects and the flagstaff — each with the formula that answers it.",
 intro:"Every question in this chapter is a right-angled triangle in which you know one side and one angle. What makes it a chapter rather than a formula is the arrangement: whether the two observation points are on the same side of the tower or on opposite sides, and whether the angles are complementary. Get the arrangement right and the trigonometry is one line.",
 figs:[
  {id:"hd-same", cap:"Two observation points on the SAME side of the tower, the far one at α and the near one at β. Then h = d/(cotα − cotβ), with d the distance between the two points.",
   svg:"<svg viewBox=\"0 0 320 190\" role=\"img\" aria-label=\"Tower observed from two points on the same side at two angles of elevation\"><line class=\"ln\" x1=\"20\" y1=\"160\" x2=\"300\" y2=\"160\"/><line class=\"hl\" x1=\"275\" y1=\"160\" x2=\"275\" y2=\"35\"/><line class=\"dash\" x1=\"35\" y1=\"160\" x2=\"275\" y2=\"35\"/><line class=\"dash\" x1=\"155\" y1=\"160\" x2=\"275\" y2=\"35\"/><rect class=\"sq\" x=\"261\" y=\"146\" width=\"14\" height=\"14\"/><path class=\"arc\" d=\"M63 160 A 28 28 0 0 0 56 146\"/><path class=\"arc\" d=\"M183 160 A 28 28 0 0 0 173 143\"/><text class=\"sm\" x=\"66\" y=\"154\">α</text><text class=\"sm\" x=\"186\" y=\"154\">β</text><text class=\"sm\" x=\"282\" y=\"100\">h</text><text class=\"sm\" x=\"88\" y=\"176\">d</text><text x=\"28\" y=\"178\">A</text><text x=\"150\" y=\"178\">B</text></svg>"},
  {id:"hd-opp", cap:"Two points on OPPOSITE sides of the tower. Then the distance between them is d = h(cotα + cotβ) — added, not subtracted.",
   svg:"<svg viewBox=\"0 0 320 190\" role=\"img\" aria-label=\"Tower observed from two points on opposite sides\"><line class=\"ln\" x1=\"20\" y1=\"160\" x2=\"300\" y2=\"160\"/><line class=\"hl\" x1=\"160\" y1=\"160\" x2=\"160\" y2=\"35\"/><line class=\"dash\" x1=\"35\" y1=\"160\" x2=\"160\" y2=\"35\"/><line class=\"dash\" x1=\"285\" y1=\"160\" x2=\"160\" y2=\"35\"/><rect class=\"sq\" x=\"146\" y=\"146\" width=\"14\" height=\"14\"/><path class=\"arc\" d=\"M63 160 A 28 28 0 0 0 55 145\"/><path class=\"arc\" d=\"M257 160 A 28 28 0 0 1 265 145\"/><text class=\"sm\" x=\"66\" y=\"154\">α</text><text class=\"sm\" x=\"240\" y=\"154\">β</text><text class=\"sm\" x=\"167\" y=\"100\">h</text><text x=\"28\" y=\"178\">A</text><text x=\"282\" y=\"178\">B</text></svg>"}
 ],
 blocks:[

  {h:"The two definitions, and the three angles that do all the work",
   rows:[
    {p:"Angle of elevation and angle of depression",
     f:"Both are measured from the HORIZONTAL — elevation looking up, depression looking down",
     d:"The angle of depression from the top of a tower to a point equals the angle of elevation from that point to the top. That equality is used in half the questions."},
    {p:"The basic relation", f:"tanθ = height/horizontal distance",
     d:"Everything in the chapter is this, applied twice and the two equations combined."},
    {p:"Angle of elevation 45° means", f:"height = distance",
     d:"The single most useful recognition in the chapter: a 45° observation turns the triangle into an isosceles one and removes a variable."},
    {p:"Angle of elevation 30° and 60° mean", f:"30°: h = d/√3 (so d = h√3).  60°: h = d√3 (so d = h/√3)",
     d:"Doubling the angle from 30° to 60° does not double the height — it multiplies it by 3. That is a standing trap."},
    {p:"cot 30°, cot 45°, cot 60°", f:"√3,  1,  1/√3",
     d:"The chapter's formulas are written in cot because the height is the numerator. Having these three to hand saves inverting under time."}
   ]},

  {h:"The nine shapes",
   note:"Identify the shape first and the formula second. Nearly every error in this chapter is an arrangement error, not an arithmetic one.",
   rows:[
    {p:"Two points on the SAME side, distance d apart, angles α (far) and β (near). Height?",
     f:"h = d/(cotα − cotβ)", t:"trick",
     d:"Subtract, and the far angle's cot comes first so the answer is positive. With 30° and 60° this is d/(√3 − 1/√3) = d√3/2."},
    {p:"Two points on OPPOSITE sides of a tower of height h, angles α and β. Distance between them?",
     f:"d = h(cotα + cotβ)", t:"trap",
     d:"Added here, subtracted above. Same side subtracts, opposite sides adds — that is the whole distinction and the options always offer both."},
    {p:"The angles of elevation from two points are COMPLEMENTARY and the points are a and b from the foot. Height?",
     f:"h = √(ab)", t:"trick",
     d:"Complementary means the two angles add to 90°, for instance 30° and 60°. The height is the geometric mean of the two distances, and no trigonometry is needed at all."},
    {p:"A tower subtends α at a point; walking d towards it the angle becomes β. Height?",
     f:"h = d/(cotα − cotβ) = d tanα tanβ/(tanβ − tanα)",
     d:"The same first shape, written as a walk. The tan form is faster when the given angles are 30° and 45°."},
    {p:"The shadow of a pole lengthens by x when the sun's elevation falls from β to α. Height?",
     f:"h = x/(cotα − cotβ)",
     d:"A shadow problem is the same-side problem with the sun as the observer. From 60° to 30° the shadow grows to three times, so the increase is 2h/√3."},
    {p:"A tower of height h carries a flagstaff of height f. Angles at a point are α to the top of the tower and β to the top of the staff. Then",
     f:"d = h cotα = (h + f) cotβ, so f = h(cotα/cotβ − 1)",
     d:"Both triangles share the same base d. Write d twice and eliminate it — that is the whole method for every stacked-object question."},
    {p:"From the top of a cliff of height H the depressions to the BOTTOM and the TOP of a tower are α and β. Height of the tower?",
     f:"tower = H(1 − tanβ/tanα)",
     d:"The horizontal distance is H cotα, so the tower's top sits H cotα · tanβ below the eye. Draw the horizontal from the observer's eye first and both depressions hang below it."},
    {p:"Two towers of heights h₁ and h₂ stand d apart. Angle of elevation of the top of one from the top of the other?",
     f:"tanθ = (h₁ − h₂)/d",
     d:"The difference of the heights over the horizontal gap. If a question gives the angle it is asking for d or for the difference."},
    {p:"An aeroplane at height h is seen at α and, t seconds later, at β. Speed?",
     f:"speed = h(cotβ − cotα)/t  (flying away, so β < α)",
     d:"The numerator is the horizontal distance covered. Convert to km per hour at the end by multiplying by 18/5 if the answer came out in metres per second."}
   ]},

  {h:"The results worth remembering as numbers",
   rows:[
    {p:"A pole's shadow equals its height. The sun's elevation is", f:"45°",
     d:"And when the shadow is √3 times the height the elevation is 30°; when it is 1/√3 of the height, 60°."},
    {p:"The shadow of a tower is √3 times its height. Elevation?", f:"30°",
     d:"tanθ = h/(h√3) = 1/√3. Longer shadow means lower sun — a useful sanity check on any answer."},
    {p:"The elevation changes from 30° to 60° as you walk d towards a tower. Height, and the two distances from the foot?",
     f:"h = d√3/2;  you began at 3d/2 and ended at d/2",
     d:"All three come from h = d/(cot30° − cot60°) and then multiplying h by each cot. Note that you have covered two thirds of the original distance, not half."},
    {p:"A ladder of length L leans at θ to the ground. Height reached and foot distance",
     f:"height = L sinθ;  foot distance = L cosθ",
     d:"A ladder at 60° reaches L√3/2 up and stands L/2 out. The ladder is the hypotenuse, never the height."},
    {p:"A tree breaks at height x and its top touches the ground at distance d, making angle θ. Original height?",
     f:"original = x + (the broken part) = d tanθ + d/cosθ",
     d:"The broken part is the hypotenuse d secθ and the standing part is d tanθ. Adding only one of the two is the error."},
    {p:"The angle of elevation of the top of a tower doubles as the distance halves. This means",
     f:"the angles were 30° and 60° — the only pair for which that works",
     d:"Worth recognising: SSC dresses the 30-60 pair in a dozen different sentences, and spotting it ends the question."}
   ]}
 ]},

/* ====================================================================
   9. COORDINATE GEOMETRY
   The smallest of the advanced chapters and the one most often skipped.
   It is two or three marks in Tier-2 and occasionally one in Tier-1, and
   every question comes from the fifteen formulas below. Nothing past the
   straight line and the plain circle is asked.
   ==================================================================== */
{id:"coordinate", n:"Coordinate geometry", short:"Coordinate", band:"advanced",
 w:"Distance, section, centroid and area; slope, the four forms of a line, the perpendicular distance, and the equation of a circle.",
 intro:"Fifteen formulas and no theory. The only judgement needed is which of the two section formulas applies — internal or external — and whether a question asking for “the ratio in which the axis divides” wants you to set a coordinate to zero, which it almost always does.",
 blocks:[

  {h:"Points",
   rows:[
    {p:"Distance between (x₁, y₁) and (x₂, y₂)", f:"d = √((x₂ − x₁)² + (y₂ − y₁)²)",
     d:"Distance of a point from the origin is just √(x² + y²). The order of subtraction does not matter because it is squared."},
    {p:"Midpoint of the segment joining two points", f:"((x₁ + x₂)/2, (y₁ + y₂)/2)",
     d:"The section formula at 1 : 1. Used backwards to find the fourth vertex of a parallelogram, whose diagonals share a midpoint."},
    {p:"Internal section formula, ratio m : n", f:"((mx₂ + nx₁)/(m + n), (my₂ + ny₁)/(m + n))", t:"trap",
     d:"Note the cross pairing: m goes with the SECOND point. Writing mx₁ is the standard error."},
    {p:"External section formula, ratio m : n", f:"((mx₂ − nx₁)/(m − n), (my₂ − ny₁)/(m − n))",
     d:"Same formula with n replaced by −n. If m = n the external point does not exist, which is the parallel case."},
    {p:"Centroid of a triangle with vertices (xᵢ, yᵢ)", f:"((x₁ + x₂ + x₃)/3, (y₁ + y₂ + y₃)/3)",
     d:"A plain average. The incentre is the weighted average with the side lengths as weights: (ax₁ + bx₂ + cx₃)/(a + b + c)."},
    {p:"Area of a triangle from three vertices",
     f:"Area = ½ |x₁(y₂ − y₃) + x₂(y₃ − y₁) + x₃(y₁ − y₂)|",
     d:"Take the modulus — area is never negative. If the expression is zero the three points are collinear, which is how collinearity is tested."},
    {p:"Ratio in which the x-axis divides the join of two points", f:"−y₁ : y₂",
     d:"Because the dividing point has y = 0. For the y-axis the ratio is −x₁ : x₂."}
   ]},

  {h:"Lines",
   rows:[
    {p:"Slope from two points, and from an angle", f:"m = (y₂ − y₁)/(x₂ − x₁) = tanθ",
     d:"θ is the angle the line makes with the positive x-axis. A horizontal line has slope 0; a vertical line's slope is undefined."},
    {p:"Slope of ax + by + c = 0", f:"m = −a/b",
     d:"Minus a over b. The y-intercept is −c/b and the x-intercept is −c/a."},
    {p:"Parallel and perpendicular conditions", f:"Parallel: m₁ = m₂.  Perpendicular: m₁m₂ = −1",
     d:"So the perpendicular slope is the negative reciprocal. For ax + by + c = 0 a perpendicular line is bx − ay + k = 0."},
    {p:"The four forms of a straight line",
     f:"y = mx + c;  y − y₁ = m(x − x₁);  (y−y₁)/(y₂−y₁) = (x−x₁)/(x₂−x₁);  x/a + y/b = 1",
     d:"Slope-intercept, point-slope, two-point, intercept. The intercept form is the one to use whenever the question mentions axes."},
    {p:"Perpendicular distance from (x₁, y₁) to ax + by + c = 0",
     f:"= |ax₁ + by₁ + c| / √(a² + b²)",
     d:"With (0, 0) it is |c|/√(a² + b²). Modulus on top, square root of the sum of squares of the coefficients below."},
    {p:"Distance between the parallel lines ax + by + c₁ = 0 and ax + by + c₂ = 0",
     f:"= |c₁ − c₂| / √(a² + b²)",
     d:"The coefficients of x and y must be made identical first — 2x + 3y + 1 and 4x + 6y + 5 need the second halved."},
    {p:"Angle between two lines of slopes m₁ and m₂", f:"tanθ = |(m₁ − m₂)/(1 + m₁m₂)|",
     d:"Zero on top means parallel; the denominator zero means perpendicular. Rare in Tier-1."},
    {p:"Area of the triangle a line x/a + y/b = 1 makes with the axes", f:"= ½|ab|",
     d:"The intercepts are the base and the height. A standing one-mark question."}
   ]},

  {h:"The circle",
   rows:[
    {p:"Circle of radius r centred at the origin", f:"x² + y² = r²",
     d:"The only conic SSC asks about. Everything else in this block is this equation shifted."},
    {p:"Circle of radius r centred at (h, k)", f:"(x − h)² + (y − k)² = r²",
     d:"A circle touching both axes with radius r has centre (±r, ±r) — four possible circles, which is sometimes the answer."},
    {p:"Centre and radius of x² + y² + 2gx + 2fy + c = 0",
     f:"centre (−g, −f);  radius √(g² + f² − c)", t:"trick",
     d:"Halve the coefficients of x and y and change their signs. If g² + f² − c is negative there is no real circle."},
    {p:"Circle on the segment joining (x₁,y₁) and (x₂,y₂) as diameter",
     f:"(x − x₁)(x − x₂) + (y − y₁)(y − y₂) = 0",
     d:"Follows from the angle in a semicircle being a right angle. Expanding it gives the centre as the midpoint, as expected."}
   ]}
 ]},

/* ====================================================================
   10. PROFIT, LOSS AND DISCOUNT
   KEPT SEPARATE ON PURPOSE. This is arithmetic, not advance maths: it
   belongs to the other half of the quantitative paper. It is here
   because it was asked for alongside the advance chapters, and because
   its formula list is short and entirely mechanical — but the site files
   it under its own band so that revising "advance maths" does not
   silently mean revising this as well.
   ==================================================================== */
{id:"profit-loss", n:"Profit, loss and discount", short:"Profit & loss", band:"arith", hy:1,
 w:"Every percentage conversion, the marked-price and successive-discount formulas, the false-weight results and the two-article trap.",
 intro:"Three rules cover the chapter. Profit and loss percentages are always on the COST price unless a question says otherwise; discount is always on the MARKED price; and when two percentages act one after another they do not add — they combine. Almost every wrong answer in this chapter comes from applying a percentage to the wrong base.",
 blocks:[

  {h:"The basic conversions",
   rows:[
    {p:"Profit and loss, and their percentages",
     f:"P = SP − CP;  L = CP − SP;  P% = (P/CP)×100;  L% = (L/CP)×100", t:"trap",
     d:"Both percentages are on the COST price. A question that says “profit of 20% on the selling price” is a different and harder question, and it says so."},
    {p:"SP from CP and profit percent", f:"SP = CP × (100 + P%)/100",
     d:"For a loss use (100 − L%). A 25% profit means SP = 1.25 CP, and a 25% loss means SP = 0.75 CP."},
    {p:"CP from SP and profit percent", f:"CP = SP × 100/(100 + P%)",
     d:"Dividing, not subtracting the percentage. An article sold for 120 at 20% profit cost 100, not 96."},
    {p:"If the CP of x articles equals the SP of y articles, the profit percent is",
     f:"((x − y)/y) × 100 %", t:"trick",
     d:"Profit if x > y, loss if x < y. CP of 20 = SP of 16 gives a 25% profit, not 20%."},
    {p:"Selling n articles brings a profit equal to the COST of m articles. Profit percent?",
     f:"P% = (m/n) × 100",
     d:"Selling 100 pens for a gain equal to the cost of 20 pens is a 20% profit, and nothing more is needed."},
    {p:"Selling n articles brings a profit equal to the SELLING price of m articles. Profit percent?",
     f:"P% = (m/(n − m)) × 100", t:"trap",
     d:"A different formula from the row above, because the profit is now measured in selling prices. The two phrasings differ by one word and the options carry both answers."},
    {p:"Two successive profit (or loss) percentages x and y combine to", f:"(x + y + xy/100)%",
     d:"Use negative values for losses. +20% then −20% is −4%, not 0 — the same formula as the area-change rule."},
    {p:"Equal percentage gain and loss on two articles sold at the same price",
     f:"Net result is always a LOSS of x²/100 %", t:"trick",
     d:"At 10% each way the net loss is 1%; at 20% each way it is 4%. The answer is never “no profit no loss”, and that option is always offered."}
   ]},

  {h:"Marked price and discount",
   rows:[
    {p:"Discount and discount percent", f:"D = MP − SP;  D% = (D/MP) × 100", t:"trap",
     d:"Discount is on the MARKED price, profit on the COST price. Two different bases in the same question is the whole design of this chapter."},
    {p:"SP from MP and discount percent", f:"SP = MP × (100 − D%)/100",
     d:"And MP = SP × 100/(100 − D%) when the selling price is what you are given."},
    {p:"Two successive discounts of a% and b% are equivalent to a single discount of",
     f:"(a + b − ab/100)%",
     d:"Minus here, because both reduce the price. 20% and 10% together is 28%, never 30%."},
    {p:"Three successive discounts a, b, c as a single discount",
     f:"Apply the two-discount formula twice, or SP = MP(1−a/100)(1−b/100)(1−c/100)",
     d:"The product form is faster for three or more and is less error-prone than nesting the formula."},
    {p:"Relation between MP, CP, profit% and discount%", f:"MP/CP = (100 + P%)/(100 − D%)",
     d:"The single most useful line in the chapter. It answers “by what percent above cost must he mark the goods” in one step."},
    {p:"Goods marked x% above cost and sold at y% discount: the profit percent is",
     f:"((100 + x)(100 − y)/100) − 100 %",
     d:"Marked 40% up and sold at 25% off gives 1.40 × 0.75 = 1.05, so a 5% profit."},
    {p:"A trader allows a discount but still wants P% profit. What must the markup be?",
     f:"markup% = ((100 + P)(100)/(100 − D)) − 100",
     d:"The rearranged form of the MP/CP relation. For a 20% profit after a 20% discount the markup is 50%."},
    {p:"“Buy 2 get 1 free” is equivalent to a discount of", f:"33⅓%",
     d:"Three items for the price of two. “Buy 3 get 1 free” is 25%, and “buy 1 get 1 free” is 50%."}
   ]},

  {h:"False weights and dishonest dealing",
   rows:[
    {p:"A shopkeeper sells at cost price but uses a weight of w instead of 1000 g. Gain percent?",
     f:"gain% = ((1000 − w)/w) × 100", t:"trap",
     d:"The denominator is the FALSE weight, not 1000. Using 900 g for a kilogram gives 100/900 = 11⅒%, not 10%."},
    {p:"General false-weight gain, in terms of the error", f:"gain% = error/(true value − error) × 100",
     d:"Which is the same formula written for any unit. The error goes over what the customer actually receives."},
    {p:"A dealer marks up x% AND uses a weight of w g for a kilogram. Net gain?",
     f:"Find g = ((1000 − w)/w) × 100, then net = x + g + xg/100",
     d:"Two successive gains, combined with the successive-percentage formula. Doing it in two steps is both safer and faster than any single closed form."},
    {p:"Selling at a loss of x% but using a short weight that gains y%: net result",
     f:"Combine with the successive formula: (−x + y − xy/100)%",
     d:"The sign discipline is the whole question. A loss is negative, a short-weight gain is positive."},
    {p:"If an article is sold at a loss of x% and the same article sold for ₹k more would give a profit of y%, then CP =",
     f:"CP = k × 100/(x + y)",
     d:"The ₹k spans the whole gap between the two selling prices, which is (x + y)% of the cost price."},
    {p:"An article sold at ₹a gives the same percentage profit as the loss when sold at ₹b. CP =",
     f:"CP = (a + b)/2",
     d:"The cost price is exactly midway between the two selling prices, because the two percentages are equal and opposite."}
   ]}
 ]},

/* ====================================================================
   11. MIXTURE AND ALLIGATION
   Also arithmetic, also kept in its own band. It is here next to profit
   and loss because the two are asked together and because alligation is
   the one arithmetic tool that is worth real memorisation: it turns a
   simultaneous-equation question into a subtraction.
   ==================================================================== */
{id:"mixture", n:"Mixture and alligation", short:"Mixture", band:"arith", hy:1,
 w:"The alligation rule in both directions, the repeated-replacement formula, and the standard milk-and-water patterns.",
 intro:"Alligation is a single rule: the two quantities are in the inverse ratio of their distances from the mean. Everything else in the chapter is that rule applied to a different quantity — price, strength, speed, age or rate of interest. The one formula worth learning separately is the repeated-replacement result, because it cannot be reached by alligation at all.",
 blocks:[

  {h:"The alligation rule",
   rows:[
    {p:"The alligation rule, in words and in symbols",
     f:"cheaper quantity : dearer quantity = (d − m) : (m − c)", t:"trick",
     d:"c the cheaper price, d the dearer, m the mean price of the mixture. The quantities are in the inverse ratio of the distances from the mean, which is why the brackets look crossed."},
    {p:"Mean price of a mixture of two ingredients",
     f:"m = (c·q₁ + d·q₂)/(q₁ + q₂)",
     d:"The weighted average. Alligation is this formula rearranged to give the ratio instead of the mean."},
    {p:"The mean price must lie where?", f:"Strictly between the two ingredient prices",
     d:"A sanity check that catches a sign error at once: a mean outside the two prices means the brackets were subtracted the wrong way round."},
    {p:"Mixing to sell at cost price and still make x% profit: water to add to milk",
     f:"water : milk = x : 100",
     d:"To gain 25% selling at cost price, add water in the ratio 25 : 100 = 1 : 4 — that is 1 part water to 4 parts milk."},
    {p:"Alligation applied to anything other than price",
     f:"Same rule, with the quantity in place of the price: strength, speed, rate, marks or age",
     d:"“In what ratio must 20% and 50% solutions be mixed to get 30%” is (50−30) : (30−20) = 2 : 1."},
    {p:"Three ingredients mixed to a given mean", f:"Pair them two at a time, or set up one equation per pair",
     d:"SSC usually gives two of the three ratios, which reduces it to a two-ingredient problem. There is no three-way alligation formula worth memorising."}
   ]},

  {h:"Replacement — the formula alligation cannot give you",
   rows:[
    {p:"x litres are drawn from a vessel of V litres of pure milk and replaced by water, n times. Milk left?",
     f:"milk left = V(1 − x/V)ⁿ", t:"trick",
     d:"The single most asked mixture formula. Note it is the FRACTION x/V that is raised to the power, and the answer is a quantity of milk, not a ratio."},
    {p:"After n replacements, the ratio of milk to the whole mixture", f:"= (1 − x/V)ⁿ",
     d:"So the water is 1 − (1 − x/V)ⁿ of the whole. Read whether the question wants milk : water or milk : mixture — they differ."},
    {p:"If the vessel starts as a milk-water MIXTURE rather than pure milk",
     f:"Apply the same factor to the milk that was there at the start",
     d:"Final milk = initial milk × (1 − x/V)ⁿ. The replacement factor does not care what the liquid was."},
    {p:"Two vessels with milk : water of a₁ : b₁ and a₂ : b₂, mixed in equal quantities. New ratio?",
     f:"[a₁/(a₁+b₁) + a₂/(a₂+b₂)] : [b₁/(a₁+b₁) + b₂/(a₂+b₂)]",
     d:"Convert each ratio to a fraction of its own vessel first. Adding the ratios term by term, 'a₁+a₂ : b₁+b₂', is wrong unless the two vessels hold the same total."},
    {p:"In what ratio must two mixtures be combined to reach a given strength?",
     f:"Alligation on the strengths — the fraction of milk in each", t:"trick",
     d:"Turn both ratios into the fraction of milk, use those as c and d, and the target fraction as m. This is the question that looks hard and is one subtraction."},
    {p:"A mixture of a litres has milk and water in m : n. How much water to add to make it p : q?",
     f:"Water to add = a·m/(m+n) × q/p − a·n/(m+n)",
     d:"The milk quantity is unchanged by adding water. Compute the milk, work out the water the new ratio demands, and subtract the water already present."}
   ]},

  {h:"Where alligation is really being tested",
   rows:[
    {p:"Average of a group split into two sub-groups", f:"The two sub-group sizes are in the inverse ratio of their distances from the overall average",
     d:"This is alligation under a different name, and it is how “the average age of a class” questions are meant to be done."},
    {p:"Two parts of a journey at speeds u and v with a given average speed", f:"Alligation on the speeds gives the ratio of the TIMES, not the distances", t:"trap",
     d:"Because average speed is a weighted mean over time. For equal distances the average speed is instead 2uv/(u + v)."},
    {p:"Average speed for equal distances at u and v", f:"= 2uv/(u + v)",
     d:"The harmonic mean. For equal times it is the plain average (u + v)/2 — two different formulas and the question states which."},
    {p:"A sum split between two rates of interest to give an overall rate", f:"Alligation on the rates gives the ratio of the two principals",
     d:"The weights are the amounts of money, so the answer is the ratio in which the sum was divided."},
    {p:"Profit on a mixture sold at a stated price", f:"Find the mean cost by alligation first, then apply the profit formula",
     d:"A two-chapter question, and the commonest way profit and mixture appear together in a paper."}
   ]}
 ]}

]

};
