
var playedGames = [ ];
var guessList = [ "Voldemort", "Hogwarts", "Butterbeer", "Lockhart", "Bludger", "Slughorn", "Aragog", "Firebolt", "Dumbledore", "Umbridge", "Thestral", "Padfoot", "Moony","Wormtail", "Malfoy", "Snitch", "Dementor", "Basilisk", "Horcrux", "Gringotts", "Hogsmeade", "Aberforth", "Lovegood", "Weasley" ];
var guessedLetters = [ ];
var guessesRemaining = 15;
var wins = 0;
var losses = 0;

// class Game
// {
//     constructor(word)
//     {
//         this.guessedLetters = [ ];
//         this.guessesRemaining = 15;
//         this.currentWord = word;
//     }
// }

function keyPressed(key)
{
    if(key == "F5")
        return;

    UpdateGuessedLetters(key);

    UpdateWord();
    
    UpdateRemainingGuesses();

    DetermineVictoryStatus();
}

function UpdateRemainingGuesses()
{
    guessesRemaining--;
    document.getElementById("guessesRemaining").innerHTML = guessesRemaining;
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
    var currentWord = "";
    var wordToGuess = guessList[guessList.length - 1];
    
    for (var wordCharacter = 0; wordCharacter < wordToGuess.length; wordCharacter++) 
    {
        var matchFound = false;

        for(var guess = 0; guess < guessedLetters.length; guess++)
        {
            if(guessedLetters[guess] == wordToGuess[wordCharacter])
            {
                currentWord += (guessedLetters[guess] + " ");
                matchFound = true;
                break;
            }
        }

        if(!matchFound)
        {
            currentWord += "_ ";
        }
    }
    document.getElementById("currentWord").innerHTML = currentWord;
}

function DetermineVictoryStatus()
{
    // TODO randomize messages, make them depend on how well they are doing.

    if(!document.getElementById("currentWord").innerHTML.includes("_"))
    {
        wins++;
        document.getElementById("winCounter").innerHTML = (wins + " / " + losses);
        alert("Congratulations! You caught the golden snitch!")
    }
    else if(guessesRemaining < 1)
    {

        losses++;
        document.getElementById("winCounter").innerHTML = (wins + " / " + losses);
        alert("Avada Kedavra. You lose.")
    }

}