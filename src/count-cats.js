const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let catsSum = 0;
  for (let i of matrix) {
    for (let y of i) {
      if (y === '^^') catsSum++;
    }
  }
  return catsSum;
};
