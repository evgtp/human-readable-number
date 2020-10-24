module.exports = function toReadable (number) {
  var readableNumber = '';
  var numbersMap = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
    hundred: 'hundred'
  };

  if (numbersMap[number]) {
    return numbersMap[number];
  }

  var stringNumber = number + '';
  var lastIndex = stringNumber.length - 1;
  var lastTwoSymbols = stringNumber[lastIndex - 1] + stringNumber[lastIndex];

  if (stringNumber.length === 3) {
    readableNumber += numbersMap[stringNumber[0]] + ' ' + numbersMap.hundred;
  }

  if (numbersMap[lastTwoSymbols]) {
    readableNumber += ' ' + numbersMap[lastTwoSymbols];
    return readableNumber.trim();
  } else if (+stringNumber[lastIndex - 1]) {
    readableNumber += ' ' + numbersMap[div(+lastTwoSymbols, 10) * 10];
  }

  if (+stringNumber[lastIndex]) {
    readableNumber += ' ' + numbersMap[stringNumber[lastIndex]];
  }

  return readableNumber.trim();
}

function div(val, by){
    return (val - val % by) / by;
}
