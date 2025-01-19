function calculateDiscount(price, discount = 10) {
    return price - (price * discount) / 100;
}


console.log(calculateDiscount(100)); 
console.log(calculateDiscount(100, 20)); 
