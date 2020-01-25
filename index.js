/* 
 * 1. Complete this function as its name
 * 2. There's a validation function, you should implement this function inside of the other function
 * 3. Use return statement. Never console.log the result inside the function
 * 4. If the input is not valid, then console.error and return;
 * */

function calculateRectangleArea(width, length) {
    // Should call validate function in here
    var data = [width, length]
    var result = width * length
    return validate(data, result)
  }
  
  function calculateTriangleArea(base, height) {
    // Should call validate function in here
    var data = [base, height]
    var result = base * height / 2
    return validate(data, result);
  }
  
  function calculateCubeVolume(length) {
    // Should call validate function in here
    var data = [length]
    var result = length * length * length
    return validate(data, result);
  }
  
  function calculateTrianglePrismVolume(length) {
    // Should call validate function in here
    var data = [length]
    var result =length * length * length / 2
    return validate(data, result);
  }
  
  function validate(param, result) {
    // This function will be called inside the other function;
    for (i in param) {
      var check = true;
      if (typeof param[i] !== 'number') {
        check = false;
      }
    }
    if(check === false) {
      return 'is not a number'
    } else {
      return result
    }
  }
  console.log(calculateRectangleArea(2, 'a'))
