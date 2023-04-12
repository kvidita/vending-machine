const sortArray = function(arr) {
	const array = arr;
	for (let count = 0; count < array.length; count++) {
		for (let index = 0; index < array.length; index++) {
			if (array[index] > array[index + 1]) {
				const	swapingNum = array[index];
				array[index] = array[index + 1];
				array[index + 1] = swapingNum;
			}
		}
	}
	return array;
}

exports.sortArray = sortArray;

const dispenseCoins = function(denominations, amount) {
	const arrangedDenominations = sortArray(denominations);
	let coinCount = 0;
	let amountLeft = amount;

	for (let count = arrangedDenominations.length - 1; count >= 0; count--) {
		coinCount = coinCount + Math.floor(amountLeft/arrangedDenominations[count]);
		amountLeft = amountLeft % arrangedDenominations[count];
	}
	return coinCount;

}

exports.dispenseCoins = dispenseCoins;


