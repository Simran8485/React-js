const chainable = (value) => ({
    add: (num) => chainable(value + num),
    multiply: (num) => chainable(value * num),
    getResult: () => value,
  });
  
  const result = chainable(5).add(3).multiply(2).getResult();
  console.log(result); // Output: 16
  