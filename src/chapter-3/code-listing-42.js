// U+1E9B: Latin small letter long s with dot above
// U+0323: Combining dot below
var str = '\u1E9B\u0323';

// Canonically-composed form (NFC)
// U+1E9B: Latin small letter long s with dot above
// U+0323: Combining dot below
str.normalize('NFC'); // '\u1E9B\u0323'
str.normalize();      // same as above

// Canonically-decomposed form (NFD)
// U+017F: Latin small letter long s
// U+0323: Combining dot below
// U+0307: Combining dot above
str.normalize('NFD'); // '\u017F\u0323\u0307'

// Compatibly-composed (NFKC)
// U+1E69: Latin small letter s with dot below and dot above
str.normalize('NFKC'); // '\u1E69'

// Compatibly-decomposed (NFKD)
// U+0073: Latin small letter s
// U+0323: Combining dot below
// U+0307: Combining dot above
str.normalize('NFKD'); // '\u0073\u0323\u0307'
