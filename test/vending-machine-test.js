const vendingMachine = require("../src/vending-machine.js")
const testing = require("../lib/testing.js") 

const messagePart = "vending machine should return ";

/*
const testingvendingMachine = function() {
	testing.assertTest(1, vendingMachine.determineOptimumCoinCount(1), "vending machine should return one coin for one rupee")
	testing.assertTest(1, vendingMachine.determineOptimumCoinCount(2), "vending machine should return one coin for two rupees")
	testing.assertTest(2, vendingMachine.determineOptimumCoinCount(3), "vending machine should return two coins for three rupees")
	testing.assertTest(1, vendingMachine.determineOptimumCoinCount(5), "vending machine should return one coin for five rupees")
	testing.assertTest(2, vendingMachine.determineOptimumCoinCount(6), "vending machine should return two coins for six rupees")
	testing.assertTest(2, vendingMachine.determineOptimumCoinCount(7), "vending machine should return two coins for seven rupees")
	testing.assertTest(3, vendingMachine.determineOptimumCoinCount(8), "vending machine should return three coins for eight rupees")
	testing.assertTest(1, vendingMachine.determineOptimumCoinCount(10), "vending machine should return one coin for ten rupees")
	testing.assertTest(2, vendingMachine.determineOptimumCoinCount(11), "vending machine should return two coins for eleven rupees")
	testing.assertTest(2, vendingMachine.determineOptimumCoinCount(12), "vending machine should return two coins for tweleve rupees")
	testing.assertTest(3, vendingMachine.determineOptimumCoinCount(13), "vending machine should return three coins for thirteen rupees")
	testing.assertTest(2, vendingMachine.determineOptimumCoinCount(15), "vending machine should return two coins for fifteen rupees")
	testing.assertTest(2, vendingMachine.determineOptimumCoinCount(20), "vending machine should return two coins for twenty rupees")

}
testingvendingMachine();
 */

const testingVendingMachine = function() {
	testing.assertTest(1, vendingMachine.determineOptimumCoinCount([1], 1), "for amount of 1 and denomination of 1 the machine should dispense 1 coin")
	testing.assertTest(1, vendingMachine.determineOptimumCoinCount([1, 2], 1), "for amount of 1 and denominations of 1 and 2 the machine should dispense 1 coin")
	testing.assertTest(2, vendingMachine.determineOptimumCoinCount([1, 2], 3), "for amount of 3 and denominations of 1 and 2 the machine should dispense 2 coins")
	testing.assertTest(2, vendingMachine.determineOptimumCoinCount([1, 2, 5], 6), "for amount of 6 and denominations of 1, 2 and 5 the machine should dispense 2 coins")
	testing.assertTest(3, vendingMachine.determineOptimumCoinCount([1, 2, 5], 8), "for amount of 8 and denominations of 1, 2 and 5 the machine should dispense 3 coins")
	testing.assertTest(4, vendingMachine.determineOptimumCoinCount([1, 2, 5], 13), "for amount of 13 and denominations of 1, 2 and 5 the machine should dispense 4 coins")
	testing.assertTest(5, vendingMachine.determineOptimumCoinCount([1, 2, 5], 19), "for amount of 19 and denominations of 1, 2 and 5 the machine should dispense 5 coins")
	testing.assertTest(1, vendingMachine.determineOptimumCoinCount([1, 2, 5, 10], 10), "for amount of 10 and denominations of 1, 2, 5 and 10 the machine should dispense 1 coin")
	testing.assertTest(3, vendingMachine.determineOptimumCoinCount([1, 2, 5, 10], 17), "for amount of 17 and denominations of 1, 2, 5 and 10 the machine should dispense 3 coins")
	testing.assertTest(5, vendingMachine.determineOptimumCoinCount([1, 2, 5, 10], 28), "for amount of 28 and denominations of 1, 2, 5 and 10 the machine should dispense 5 coins")
	testing.assertTest(2, vendingMachine.determineOptimumCoinCount([1, 3, 7, 11], 18), "for amount of 18 and denominations of 1, 3, 7 and 11 the machine should dispense 2 coins")
	testing.assertTest(1, vendingMachine.determineOptimumCoinCount([3, 5, 7], 8), "for amount of 8 and denominations of 3, 5 and 7 the machine should dispense 1 coins")
}

testingVendingMachine();


