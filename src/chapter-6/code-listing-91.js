let getTotal = (qty, amount) => {
  return qty * amount;
};
let message = `Shopping cart total: $${getTotal(2, 2.99)}`;
console.log(message);
