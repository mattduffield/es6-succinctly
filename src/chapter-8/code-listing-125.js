Promise.all(
  ['module1', 'module2', 'module3']
  .map(x => System.import(x)))
    .then(([module1, module2, module3]) => {
      // Use module1, module2, module3
    });
