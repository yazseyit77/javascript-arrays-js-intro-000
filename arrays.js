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
  var array = [0, 1, 2, 3, 4];
  index = array[3];
  return index;
}
function removeElementFromBeginningOfArray(array){
  var array = [1, 2 ,3];
  array = array.slice(1);
  return array;
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  var array = [1, 2 ,3];
  array.shift();
  return array;
}

function removeElementFromEndOfArray(array){
  var array = [1, 2 ,3];
  array = array.slice(3);
  return array;
}

function destructivelyRemoveElementFromEndOfArray(array){
  var array = [1, 2 ,3];
  array.pop();
  return array;
}
