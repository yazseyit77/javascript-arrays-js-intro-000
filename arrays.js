var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  var array = ["foo"];
  array.push(1);
  return array;
}

function destructivelyAddElementToBeginningOfArray(array, element){
  var array = ["foo"];
  var newArray = [1, ...array];
  return array;
}

function addElementToEndOfArray(array, element){
  var array = ["foo"];
  array.unshift(1);
  return array;
}

function destructivelyAddElementToEndOfArray(array, element){
  var array = ["foo"];
  var newArray = [... array, 1];
  return array;
}

function accessElementInArray(array, index){
  var array = ["Ferrari, Bugatti", "Tesla"];
  array[1];
  return array[1];
}
