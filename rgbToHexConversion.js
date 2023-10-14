function rgbToHexConversion(r, g, b) {
    let hexR = decimalToHex(r);
    let hexG = decimalToHex(g);
    let hexB = decimalToHex(b);

    return hexR + hexG + hexB;
}

function decimalToHex(decimal) {
    const hexDecimals = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

    let hexString = "";
    
    while (decimal !== 0) {
        let remainder = decimal % 16;
        decimal = Math.floor(decimal / 16);
        hexString = hexDecimals[remainder] + hexString;
    }
    
    return hexString.padStart(2, '0');
}

module.exports = { rgbToHexConversion };
