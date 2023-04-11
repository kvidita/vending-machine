const vendingMachine = require("../src/vending-machine.js")
const testing = require("../lib/testing.js") 

const testingvendingMachine = function() {
	testing.assertTest(1, vendingMachine.determineOptimumCoinCount(1), "vending machine should return one coin for one rupee")
	testing.assertTest(1, vendingMachine.determineOptimumCoinCount(2), "vending machine should return one coin for two rupees")
	testing.assertTest(2, vendingMachine.determineOptimumCoinCount(3), "vending machine should return two coins for three rupees")
	testing.assertTest(1, vendingMachine.determineOptimumCoinCount(5), "vending machine should return one coin for five rupees")
	testing.assertTest(2, vendingMachine.determineOptimumCoinCount(6), "vending machine should return two coins for six rupees")
	testing.assertTest(2, vendingMachine.determineOptimumCoinCount(7), "vending machine should return two coins for seven rupees")
	testing.assertTest(3, vendingMachine.determineOptimumCoinCount(8), "vending machine should return three coins for eight rupees")

}
testingvendingMachine();

