// Set the event Listener for everytime a key is let up
window.onload = function(){
  var textBox = document.getElementById('text');
  textBox.addEventListener('keyup', update);
};
// Just a cleaner syntax
var $ = function(idOfElement){
  return document.getElementById(idOfElement);
};
// Set the counts to zero
var initializeCounts = function(){
    var occurrences = $('occurrences');
    var child = occurrences.firstChild;
    while(child){
      if(child.innerHTML != "Occurrence:"){
        child.innerHTML = 0;
      }
      child = child.nextSibling;
    }
};
// Check to see if a character is in the alphabet
var isInAlphabet = function(character){
  var regex = /^[A-Za-z]*$/;
  var isCharacter = character.match(regex);
  return isCharacter;
};
// Check if a string in a panagram
var isPanagram = function(possiblePanagram){
  result = false;
  // String of characters already used
  characterCount = "";
  for(position in possiblePanagram){
    character = possiblePanagram[position];
    // -1 means not found, so add it to the characters already used
    if(isInAlphabet(character) && characterCount.indexOf(character) === -1){
      characterCount += character;
    }
  }
  if(characterCount.length === 26){
    result = true;
  }
  return result;
};

var update = function(){
  initializeCounts();
  var panagram = $('text').value;
  for(position in panagram){
    character = panagram[position];
    if(isInAlphabet(character)){
      $(character.toLowerCase()).innerHTML = parseInt($(character.toLowerCase()).innerHTML, 10) + 1;
    }
  }
  confirmation = $('confirmation');
  if(isPanagram(panagram)){
    confirmation.innerHTML = "Yes, congratulations!";
  }
  else{
    confirmation.innerHTML = "No";
  }
};