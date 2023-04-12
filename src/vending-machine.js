const dispenseCoins = function(denominations, amount) {
	let coinCount = 0;
	let amountLeft = amount;
	for (let count = denominations.length - 1; count >= 0; count--) {
		coinCount = coinCount + Math.floor(amountLeft/denominations[count]);
		amountLeft = amountLeft % denominations[count];
	}
	return coinCount;
}

exports.dispenseCoins = dispenseCoins;

