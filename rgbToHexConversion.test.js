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

tests.push(['shortestTime: for 255, 255, 255 should return "FFFFFF"', () => {
  const result = rgbToHexConversion(255, 255, 255);

  assert.equal(result, "FFFFFF");
}]);

tests.push(['shortestTime: for 0, 0, 0  should return "000000"', () => {
  const result = rgbToHexConversion(0, 0, 0 );

  assert.equal(result, "000000");
}]);

runTests();
