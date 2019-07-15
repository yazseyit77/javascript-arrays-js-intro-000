var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  var array = ["foo"];
  array.push(1);
  return array;
}

function destructivelyAddElementToBeginningOfArray(array, element){
  var array = ["foo"];
  var newArray = ["foo", 1];
  return array;
}
