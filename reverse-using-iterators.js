// The intent of this file is to reverse the string using iterators (for, foreach)

const reverse = (oriStr) => {
  let revStr = '';
  const len = oriStr.length;
  for (let i = len - 1; i >= 0; i -= 1) {
    revStr += oriStr[i];
  }
  return revStr;
};
module.exports = reverse;
