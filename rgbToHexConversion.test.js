const assert = require('node:assert');
const { rgbToHexConversion } = require('./rgbToHexConversion.js');

const tests = [];

function runTests() {
  tests.forEach((test) => {
    try {
      test[1]();
      console.log(`✅ ${test[0]}`);
    } catch (err) {
      console.log(`❌ ${test[0]}`);
      console.log(err);
    }
  });
}

tests.push(['rgbToHexConversion: for 255, 255, 255 should return "FFFFFF"', () => {
    const result = rgbToHexConversion(255, 255, 255);

    assert.equal(result, "FFFFFF");
}]);

tests.push(['rgbToHexConversion: for 0, 0, 0  should return "000000"', () => {
    const result = rgbToHexConversion(0, 0, 0);

    assert.equal(result, "000000");
}]);

tests.push(['rgbToHexConversion: for 255, 255, 300  should return "FFFFFF"', () => {
    const result = rgbToHexConversion(255, 255, 300);
  
    assert.equal(result, "FFFFFF");
}]);

tests.push(['rgbToHexConversion: for 148, 0, 211  should return "9400D3"', () => {
    const result = rgbToHexConversion(148, 0, 211);

    assert.equal(result, "9400D3");
}]);

runTests();
