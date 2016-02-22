'foo'.repeat(-1);   // RangeError
'foo'.repeat(0);    // ''
'foo'.repeat(1);    // 'foo'
'foo'.repeat(2);    // 'foofoo'
'foo'.repeat(2.5);  // 'foofoo' (count will be converted to integer)
'foo'.repeat(1/0);  // RangeError