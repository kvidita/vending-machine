const sortarray = require("./sorting.js");

const dispenseCoins = function(denominations, amount) {
	const arrangedDenominations = sortarray.sortArray(denominations);
	let coinCount = 0;
	let amountLeft = amount;

	for (let count = arrangedDenominations.length - 1; count >= 0; count--) {
		coinCount = coinCount + Math.floor(amountLeft/arrangedDenominations[count]);
		amountLeft = amountLeft % arrangedDenominations[count];
	}
	return coinCount;

}


const division = function(divident, divisor) {
	return Math.floor(divident/divisor);
}

const remainder = function(divident, divisor) {
	return divident % divisor;
}


const coinCount = function(denominationList, amount) {
	let denominations = sortarray.sortArray(denominationList);
	let denominationsCount = {};
	let amountLeft = amount;

	for (let count = denominations.length - 1; count >= 0; count--){
		denominationsCount[denominations[count]] = division(amountLeft, denominations[count]);	
		amountLeft = remainder(amountLeft, denominations[count]);
	}

	return denominationsCount;
}

exports.dispenseCoins = dispenseCoins;
exports.coinCount = coinCount;



/*
const objectToArray = function(object) {


}

 */
