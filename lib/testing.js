//----------------------------------asserting-test--------------------------------------------

const assert = function(expected, actual, text) {

	const passed = "🟢 ";
	const failed = "🔴 ";
	const	actualExpectedMessage = "\n\tExpected: " + expected + "\n" + "\tActual: " + actual;

	const result = (expected === actual) ?	passed + text : failed + text + actualExpectedMessage;
	console.log(result);
}

exports.assert = assert;

const assertArraysEqual = function(expected, actual, text) {
	const passed = "🟢 ";
	const failed = "🔴 ";
	const	actualExpectedMessage = "\n\tExpected: " + expected + "\n" + "\tActual: " + actual;

	const result = (ifArraysEqual(expected, actual) === true) ? passed + text : failed + text + actualExpectedMessage;
	console.log(result);
}


const ifArraysEqual = function(array1, array2) {
	if (array1.length != array2.length) {
		return false;
	}
	for (let count = 0; count < array1.length; count++) {
		if (array1[count] != array2[count]) {
			return false;
		}
	}
	return true;
}

exports.assertArraysEqual = assertArraysEqual;

// console.log(ifArraysEqual([1,2,3,4,7,4,2], [1,2,3,4,7,4,2]));
