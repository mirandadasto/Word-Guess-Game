
var playedGames = [ ];
var guessList = [ "Voldemort", "Hogwarts", "Butterbeer", "Lockhart", "Bludger", "Slughorn", "Aragog", "Firebolt", "Dumbledore", "Umbridge", "Thestral", "Padfoot", "Moony", "Wormtail", "Malfoy", "Snitch", "Dementor", "Basilisk", "Horcrux", "Gringotts", "Hogsmeade", "Aberforth", "Lovegood", "Weasley" ];
var wordToGuess = "";
var guessedLetters = [ ];
var guessesRemaining = 15;
var wins = 0;
var losses = 0;
var isGameStarted = false;

function keyPressed(key)
{
    if(key == "F5")
        return;

    if(!isGameStarted)
    {
        CreateNewGame();
        isGameStarted = true;
    }

    // TODO don't allow duplicates
    // only allow letters

    guessedLetters.push(key);
    
    UpdateGuessedLetters(key);

    UpdateWord();
    
    guessesRemaining--;
    UpdateRemainingGuesses();

    DetermineVictoryStatus();
}

function UpdateRemainingGuesses()
{
    document.getElementById("guessesRemaining").innerHTML = guessesRemaining;
}

function UpdateGuessedLetters()
{
    var currentGuesses = "";

    for(var i = 0; i < guessedLetters.length; i++)
    {
      currentGuesses += guessedLetters[i].toUpperCase() + "  ";
    }

    document.getElementById("guessedLetters").innerHTML = currentGuesses;
}

function UpdateWord()
{
    var currentWord = "";
    
    for (var wordCharacter = 0; wordCharacter < wordToGuess.length; wordCharacter++) 
    {
        var matchFound = false;

        for(var guess = 0; guess < guessedLetters.length; guess++)
        {
            if(guessedLetters[guess].toUpperCase() == wordToGuess[wordCharacter].toUpperCase())  // don't be case sensitive
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
        CreateNewGame();
    }
    else if(guessesRemaining < 1)
    {
        losses++;
        document.getElementById("winCounter").innerHTML = (wins + " / " + losses);
        alert("Avada Kedavra, you lose! The word was: " + wordToGuess)
        CreateNewGame();
    }
}

function CreateNewGame()
{
    SetNewWord();
    guessesRemaining = 15; //reset guesses remaining
    UpdateRemainingGuesses();
    guessedLetters = [ ]; //clear letters guessed
    UpdateGuessedLetters();
}

function SetNewWord()
{
    var randomIndex = Math.round(Math.random() * guessList.length - 1);

    wordToGuess = guessList[randomIndex];
    guessList.splice(guessList[randomIndex], 1);
    console.log(guessList.length);

    // TODO fix error when out of words

    var nextWord = "";
    for (var char = 0; char < wordToGuess.length; char++) 
    {
        nextWord += "_ ";
    }

    document.getElementById("currentWord").innerHTML = nextWord;
}