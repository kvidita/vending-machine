//----------------------------------asserting-test--------------------------------------------

const assertTest = function(expected, actual, text) {

	const passed = "🟢 ";
	const failed = "🔴 ";
	const	actualExpectedMessage = "\n\tExpected: " + expected + "\n" + "\tActual: " + actual;

	const result = (expected === actual) ?	passed + text : failed + text + actualExpectedMessage;
	console.log(result);
}

exports.assertTest = assertTest;
