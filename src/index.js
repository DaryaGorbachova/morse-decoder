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
    ' ':      ' ',
};

function decode(expr) {
    let exprm = [];
    let letter = '';
// transform to normal morse code 

   for (let j = 0; j < expr.length; j++) {
       if (expr[j] === '1' && expr[j + 1] === '1')	{
           letter += '-';
           j++;
       } else if (expr[j] === '1' && expr[j + 1] ==='0') {
           letter += '.';
           j++;
       } else if (expr[j] === '*' && expr[j + 9] === '*') {
           letter += ' ';
           j += 9;
       } 
       if ((j + 1) % 10 === 0) {
           exprm.push(letter);
           letter = '';
   }
}
// transform to text
let result = '';
for (let i = 0; i < exprm.length; i++){
for (let k in MORSE_TABLE) {
   if (exprm[i] === k)  result += MORSE_TABLE[k];
}
}
   return result;
}

module.exports = {
    decode
}