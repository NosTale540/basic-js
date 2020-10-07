const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date == null) {
    return 'Unable to determine the time of year!';
  }
  if (date.constructor != Date){
    throw new CustomError('Not implemented');
  }
  monthNumber = date.getUTCMonth();
  if (monthNumber < 2 || monthNumber === 11) return 'winter';
  if (monthNumber < 5) return 'spring';
  if (monthNumber < 8) return 'summer';
  return 'fall';
};
