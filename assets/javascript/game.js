
var dictionary = [ "voldemort" ];
var guessedLetters = [ ];
var remainingGuesses = 15;

function keyPressed(key)
{
    if(key == "F5")
        return;

    UpdateGuessedLetters(key);

    UpdateWord();
    
    UpdateRemainingGuesses();
}

function UpdateRemainingGuesses()
{
    remainingGuesses--;
    document.getElementById("guessesRemaining").innerHTML = remainingGuesses;
}

function UpdateGuessedLetters(key)
{
    // TODO don't allow duplicates
    // only allow letters
    // don't be case sensitive, always force caps

    guessedLetters.push(key);

    var currentGuesses = "";
    for(var i = 0; i < guessedLetters.length; i++)
    {
      currentGuesses += guessedLetters[i] + "  ";
    }

    document.getElementById("guessedLetters").innerHTML = currentGuesses;
}

function UpdateWord()
{

}
