let playerChoice = parseInt(prompt("Inserisci un numero da 1 a 5"));

while (playerChoice < 1 || playerChoice > 5)
{

    playerChoice = parseInt(prompt("NUMERO SBAGLIATO: Inserisci un numero da 1 a 5"));

}

let oddEvenChoice = parseInt(prompt("Inserisci 0 per pari, 1 per dispari"));

while (oddEvenChoice < 0 || oddEvenChoice > 1)
{

    oddEvenChoice = parseInt(prompt("NUMERO SBAGLIATO: Inserisci un numero da 0 a 1"));

}

const computerChioce = randomNumberMaxMin(5,1);

sum = playerChoice+computerChioce;

let gameMatrix = [
    [true, false],
    [false, true]
]



if (gameMatrix[oddEven(sum)][oddEvenChoice]) {

    result = "YOU WIN THE GAME!!! :D"

}

else {

    result = "You lose the game... D:"

}

console.log("La somma è",sum);

if (oddEvenChoice === 0) {

    console.log("Hai scelto pari");

} else if (oddEvenChoice === 1) {

    console.log("Hai scelto dispari");

}

console.log(result);

// FUNCTION randomNumverMinMax
function randomNumberMaxMin(max, min) {

    return Math.floor(Math.random() * (max - min + 1) + min);

}

// FUNCTION oddEven
function oddEven (number) {

    let result = 0

    if (number % 2 !== 0) {
        result = 1
    }

    return result;

}


