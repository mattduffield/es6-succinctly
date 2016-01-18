'abc'.repeat(-1);   // RangeError
'abc'.repeat(0);    // ''
'abc'.repeat(1);    // 'abc'
'abc'.repeat(2);    // 'abcabc'
'abc'.repeat(2.5);  // 'abcabc' (count will be converted to integer)
'abc'.repeat(1/0);  // RangeError