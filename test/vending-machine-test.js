const vendingMachine = require("../src/vending-machine.js")
const testing = require("../lib/testing.js") 
const sorting = require("../src/sorting.js")
const dispenseCoins = vendingMachine.dispenseCoins;
const assert = testing.assert;
const indexOfMax = vendingMachine.indexOfMax;
const removeElement = vendingMachine.removeElement;
const assertArraysEqual = testing.assertArraysEqual;
const sortArray = sorting.sortArray;
const assertArrays = assertArraysEqual;
const coinCount = vendingMachine.coinCount;

const testingVendingMachine = function() {
	console.log("testing vending machine")
	assert(1, dispenseCoins([1], 1), "for amount of 1 and denomination of 1 the machine should dispense 1 coin")
	assert(1, dispenseCoins([1, 2], 1), "for amount of 1 and denominations of 1 and 2 the machine should dispense 1 coin")
	assert(2, dispenseCoins([1, 2], 3), "for amount of 3 and denominations of 1 and 2 the machine should dispense 2 coins")
	assert(2, dispenseCoins([1, 2, 5], 6), "for amount of 6 and denominations of 1, 2 and 5 the machine should dispense 2 coins")
	assert(3, dispenseCoins([1, 2, 5], 8), "for amount of 8 and denominations of 1, 2 and 5 the machine should dispense 3 coins")
	assert(4, dispenseCoins([1, 2, 5], 13), "for amount of 13 and denominations of 1, 2 and 5 the machine should dispense 4 coins")
	assert(5, dispenseCoins([1, 2, 5], 19), "for amount of 19 and denominations of 1, 2 and 5 the machine should dispense 5 coins")
	assert(1, dispenseCoins([1, 2, 5, 10], 10), "for amount of 10 and denominations of 1, 2, 5 and 10 the machine should dispense 1 coin")
	assert(3, dispenseCoins([1, 2, 5, 10], 17), "for amount of 17 and denominations of 1, 2, 5 and 10 the machine should dispense 3 coins")
	assert(5, dispenseCoins([1, 2, 5, 10], 28), "for amount of 28 and denominations of 1, 2, 5 and 10 the machine should dispense 5 coins")
	assert(2, dispenseCoins([1, 3, 7, 11], 18), "for amount of 18 and denominations of 1, 3, 7 and 11 the machine should dispense 2 coins")
	assert(2, dispenseCoins([3, 5, 7], 10), "for amount of 10 and denominations of 3, 5 and 7 the machine should dispense 2 coins")
	assert(4, dispenseCoins([1, 4, 7], 13), "for amount of 13 and denominations of 1, 4 and 7 the machine should dispense 4 coins")
	assert(4, dispenseCoins([3, 1, 7], 12), "for amount of 12 and denominations of 3, 1 and 7 the machine should dispense 5 coins")
	console.log();
}

testingVendingMachine();

const testingSortArray = function() {
	console.log("testing sorting arrays")
	assertArrays([1,2,3], sortArray([1,3,2]), "for given array[1,3,2], sorted array should be [1,3,2]");
	assertArrays([1,2,3], sortArray([1,2,3]), "for given array[1,2,3], sorted array should be [1,3,2]");
	assertArrays([1,2,3], sortArray([3,2,1]), "for given array[3,2,1], sorted array should be [1,3,2]");
	console.log();
}

testingSortArray();


const testingCoinCount = function() {
	console.log("testing coinCount function");

	const actual1 = coinCount([1], 1);
	assert(1, actual1[1], "for amount of one rupee, one coin of one rupee must be returned");

	const actual2 = coinCount([1, 2], 3);
	assert(1, actual2[2], "for amount of three rupees, one coin of two rupee must be returned");
	assert(1, actual2[1], "for amount of three rupees, one coin of one rupee must be returned")

	const actual3 = coinCount([1, 2], 5);
	assert(2, actual3[2], "for amount of five rupees, two coins of two rupee must be returned");
	assert(1, actual3[1], "for amount of five rupees, one coin of one rupee must be returned");

	const actual4 = coinCount([1, 2, 5], 3);
	assert(0, actual4[5], "for amount of three rupees, zero coins of five rupee must be returned");
	assert(1, actual4[1], "for amount of three rupees, one coin of one rupee must be returned");
	assert(1, actual4[2], "for amount of three rupees, one coin of two rupee must be returned")
	console.log();
}

testingCoinCount();

