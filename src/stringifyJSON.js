// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var output = [];
  // your code goes here
  //if string
  var type = typeof obj;
  if (typeof obj === 'string') {
    output.push('"' + obj + '"');
  } else if (Array.isArray(obj)) {
    var arrayoutput = [];
    for (var i = 0; i < obj.length; i++) {
      arrayoutput.push(stringifyJSON(obj[i]));
    }
    output.push('[' + arrayoutput + ']');
  } else if (typeof obj === 'number') {
    output.push(obj.toString());
  } else if (obj === null) {
    output.push('null');
  } else if (!obj) {
    output.push(false);
  } else if (typeof obj === 'object') {
    var ourObject = [];
    for (var key in obj) {
      if (typeof obj[key] === 'function') {
            // ourObject.push('{}');    
      } else if (obj[key] === undefined) {
            // ourObject.push('{}');
      } else {
        ourObject.push('"' + key + '"' + ':' + stringifyJSON(obj[key]));
      }
    }
    output.push('{' + ourObject + '}');
    
    
  } else if (!!obj) {
    output.push(obj);
  } 

  // if obj

  //boolian

  // null

  //undefined
  
  
  return output.join(',');
  
  
};
