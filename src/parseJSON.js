// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  var output;
  //1st inspect character to detemine type of object/array/string
  //find the end character for that array/object
    //if array, put into array function
  if (json[0] === '[') {
    output = [];
    for (var i = 1; i < json.length; i++) {
      if (json[i] === ']') {
        break;
      } else if (json[i] === '[') {
        output = output.concat(parseJSON(json.slice(json[i], json.length - 1)));
      } else {
        output.push(json[i]);
      }

    }
  }
  //  '{"foo": ""}',
  if (json[0] === '{') {
    output = {};
    for (var i = 1; i < json.length; i++) {
      if (json[i] === '}') {
        break;
      } else if (json[i] === '{') {
        output = output.concat(parseJSON(json.slice(json[i], json.length - 1)));
      } else {
        var indexOfColon = json.indexOf(':', i);  //ending for before lectures
        output.push(json[i]);
      }
    }
  }
    //if object, put into object function
    //
  return output;
};

var parseJSONArray = function (string) {
  var newObject={};
  
  return;
};

//code i don't want to thoss yet
      // var lookatValue = json[i];
      // if (lookatValue === '[') {
      //   arrayIndex++;    
      // } else if (lookatValue === ']') {
      //   if (arrayIndex === 1) {
      //     // where recoursion will happen
      //     parseJSON (json.splice(2, i-1));
      //   } else {
      //     arrayIndex--;
      //   }
    //   }
