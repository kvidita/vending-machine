const vendingMachine = require("../src/vending-machine.js")
const testing = require("../lib/testing.js") 
const dispenseCoins = vendingMachine.dispenseCoins;
const assert = testing.assert;
const indexOfMax = vendingMachine.indexOfMax;

const testingVendingMachine = function() {
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
	// assert(5, dispenseCoins([3, 1, 7], 12), "for amount of 12 and denominations of 3, 1 and 7 the machine should dispense 5 coins")
}

testingVendingMachine();

const testingIndexOfMax = function() {
	assert(1, indexOfMax([1,4,3,2]), "index of max should be 1")
	assert(6, indexOfMax([1,4,3,2,8,2,9,0]), "index of max should be 6")
}

testingIndexOfMax();
