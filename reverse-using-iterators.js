// The intent of this file is to reverse the string using iterators (for, foreach)

let i;
const reverse = (oriStr) => {
  let revStr = '';
  const len = oriStr.length;
  for (i = len - 1; i >= 0; i -= 1) {
    revStr += oriStr[i];
  }
  return revStr;
};
module.exports = reverse;
