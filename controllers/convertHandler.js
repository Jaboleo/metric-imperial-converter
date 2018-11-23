/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    let reregxNum = /\d*\.\d*|\d*\/\d*|\d*/g;
    let regexFract = /\/{2,}|\.{2,}|\/+\d*\.+|\.+\/+/
    const match = input.match(reregxNum);
    let result = match.join('');
    console.log(result)
    if(regexFract.test(result)) return "invalid number";
    if(result == '') return 1;
    let result2 = eval(result);
    console.log(result2)
    
    return result2;
  };
  
  this.getUnit = function(input) {
    let regexUnit = /[a-zA-Z]/g
    const match = input.match(regexUnit);
    let result = match.join('');
    const properArray = ['gal','l','mi','km','lbs','kg'];
    const capitalArray = ['GAL','L','MI','KM','LBS','KG']
    var control = 0;
    properArray.forEach(function(ele, i){
    if(result === capitalArray[i] || result === ele) {
    result = ele
    control = 1;
    }
    })
    if(control ==0) return "invalid unit"
    else return result

  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    switch (initUnit){
      case "km":
        result = "mi";
        return result;
      case "mi":
        result = "km";
        return result;
      case "gal":
        result = "l";
        return result;
      case "l":
        result = "gal";
        return result;
      case "lbs":
        result = "kg";
        return result;
      case "kg":
        result = "lbs";
        return result;
      default:
        result = "invalid unit";
        return result;
  }};

  this.spellOutUnit = function(initUnit) {
    let result = [];
    switch (initUnit){
      case "km":
        result = ["kilometers", "miles"];
        return result;
      case "mi":
        result = ["miles", "kilometers"];
        return result;
      case "gal":
        result = ["gallons", "liters"];
        return result;
      case "l":
        result = ["liters", "gallons"];
        return result;
      case "lbs":
        result = ["pounds", "kilograms"];
        return result;
      case "kg":
        result = ["kilograms", "pounds"];
        return result;
      default:
        result = "invalid unit"
        return result;
  }};
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    switch (initUnit){
      case "km":
        result = initNum/miToKm;
        return result;
      case "mi":
        result = initNum*miToKm;
        return result;
      case "gal":
        result = initNum*galToL;
        return result;
      case "l":
        result = initNum/galToL;
        return result;
      case "lbs":
        result = initNum*lbsToKg;
        return result;
      case "kg":
        result = initNum/lbsToKg;
        return result;
      default:
        result = "invalid something"
        return result;
  }};
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit, spellOutUnit) {
    var result;
    if(initNum == "invalid number" && initUnit == "invalid unit"){
      result = {initNum:"invalid number", initUnit:"invalid unit"}
      return result;
    }
    else if(initNum == "invalid number" ){
      result = {initNum:"invalid number"}
      return result;
    }
    else if(initUnit == "invalid unit" ){
      result = {initUnit:"invalid unit"}
      return result;
    }
    else{
      result = {initNum: initNum, initUnit: initUnit, returnNum: returnNum, returnUnit: returnUnit, string: `${initNum} ${spellOutUnit[0]} converts to ${returnNum.toFixed(5)}  ${spellOutUnit[1]}`}
      return result;
    }

  };
  
}
module.exports = ConvertHandler;
