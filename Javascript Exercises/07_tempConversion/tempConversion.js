const convertToFahrenheit = function(tempInC) {
  tempInF = tempInC*(9/5) + 32;
  return Math.round(tempInF*10)/10;
};

const convertToCelsius = function(tempInF) {
  tempInC = (tempInF-32) * (5/9);
  return Math.round(tempInC*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
