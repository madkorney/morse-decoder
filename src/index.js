const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};


function decode(expr) {

    function decodeCharFromMorse(morseCode) {
        if (morseCode[0] == "*") {
              return " "  // space
            } else {
              return MORSE_TABLE[morseCode];
            }
    }

    let decodedString = "";
    let numOfCharBlocks = expr.length / 10;
    for (let i = 0; i < numOfCharBlocks; i++) {
        let morseCode = expr.substring(i*10, 10 + i*10).replace(/00/g, "").replace(/10/g, ".").replace(/11/g,"-");
        decodedString += decodeCharFromMorse(morseCode);
    }
    return decodedString;
}

module.exports = {
    decode
}