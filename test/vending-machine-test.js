const sourceFile = require("../src/vending-machine.js")
const testing = require("../lib/testing.js") 
const testingAdd = function() {
	testing.assertTest(2, sourceFile.add(1,1), "true test : sum of 1 to itself should be 2");
	testing.assertTest(3, sourceFile.add(1,1), "false test : sum of 1 to 2 should be 2");
}
testingAdd();
