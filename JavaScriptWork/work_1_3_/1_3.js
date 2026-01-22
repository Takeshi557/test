const getTotalPrice = (price, quantity) => price * quantity;

const addTax = (total) => total * 1.1;

const total = getTotalPrice(1000, 2);
console.log(total); // 2000

const taxedTotal = addTax(total);
console.log(`税込金額は${taxedTotal}円です`);

