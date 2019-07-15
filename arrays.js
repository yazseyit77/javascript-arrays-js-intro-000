var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  var array = ["foo"];
  array.push(1);
  return array;
}

function destructivelyAddElementToBeginningOfArray(array, element){
  var array = ["foo"];
  array.unshift("Miami");
  return array;
}
