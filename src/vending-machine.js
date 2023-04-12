/*
const determineOptimumCoinCount = function(amount) {
	let coinCount = 0;
	let amountLeft = amount;
	coinCount = coinCount + Math.floor(amountLeft / 10);
	amountLeft = amountLeft % 10;
	coinCount = coinCount + Math.floor(amountLeft / 5);
	amountLeft = amountLeft % 5;
	coinCount = coinCount + Math.floor(amountLeft / 2);
	amountLeft = amountLeft % 2;
	coinCount = coinCount + amountLeft; 
	return coinCount ;
}
exports.determineOptimumCoinCount = determineOptimumCoinCount;
 */


const determineOptimumCoinCount = function(denominations, amount) {
	let coinCount = 0;
	let amountLeft = amount;
	for (let count = denominations.length - 1; count >= 0; count--) {
		coinCount = coinCount + Math.floor(amountLeft/denominations[count]);
		amountLeft = amountLeft % denominations[count];
	}
	return coinCount;
}

exports.determineOptimumCoinCount = determineOptimumCoinCount;


