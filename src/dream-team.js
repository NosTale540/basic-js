const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let result = '';
  if (members == null || members.constructor != Array) return false;
  for (let i of members) {
    if (typeof i === 'string') {
      let name = i.trim().toUpperCase();
      result += name[0];
    }
  }
  return result.split('').sort().join('');
};