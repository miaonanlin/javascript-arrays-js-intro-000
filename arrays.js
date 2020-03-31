var chocolateBars = [`snickers`, `hundred grand`, `kitkat`, `skittles`]

function addElementToBeginningOfArray(chocolateBars, you){
  return chocolateBars.unshift(you)
}

function destructivelyAddElementToBeginningOfArray(chocolateBars,you){
  chocolateBars.unshift(you)
  return chocolateBars
}

function addElementToEndOfArray(chocolateBars,you){
  chocolateBars.push(you)
  return chocolateBars
}

function destructivelyAddElementToEndOfArray(chocolateBars,you){
  chocolateBars.push(you)
  return chocolateBars
}


word=['a', 'b', 'c','d'];
function accessElementInArray(){
  return word[1];
}





function destructivelyRemoveElementFromBeginningOfArray(){
  word.shift()
  return word;
}




function removeElementFromBeginningOfArray(){
  word.slice(1);
  return word;
}



function destructivelyRemoveElementFromEndOfArray(){
  word.pop();
  return word;
}


function removeElementFromEndOfArray(){
  word.slice(-1);
  return word;
}
