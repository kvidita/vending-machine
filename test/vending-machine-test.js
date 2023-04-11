const vendingMachine = require("../src/vending-machine.js")
const testing = require("../lib/testing.js") 

const testingvendingMachine = function() {
	testing.assertTest(1, vendingMachine.vendingMachine(1), "vending machine should return one coin for one rupee")
}
testingvendingMachine();
