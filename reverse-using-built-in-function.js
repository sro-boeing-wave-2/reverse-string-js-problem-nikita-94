// The intent of this file is to reverse
// the string using built in functions.
// let strOri;
const reverse = (strOri) => {
  const splitString = strOri.split('');
  const reverseArray = splitString.reverse();
  const joinArray = reverseArray.join('');
  return joinArray;
};

module.exports = reverse;
