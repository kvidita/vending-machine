
const determineOptimumCoinCount = function(amount) {
	let coinCount = 0;
	let amountLeft = amount;
	coinCount = coinCount + Math.floor(amountLeft / 5);
	amountLeft = amountLeft % 5;
	coinCount = coinCount + Math.floor(amountLeft / 2);
	amountLeft = amountLeft % 2;
	coinCount = coinCount + amountLeft; 
	return coinCount ;
}
exports.determineOptimumCoinCount = determineOptimumCoinCount;
