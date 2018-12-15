// This produces invalid ECMAScript String (before ES2019):
eval('"\u2028"');

// This invalid as well:
eval('"\u2029"');
