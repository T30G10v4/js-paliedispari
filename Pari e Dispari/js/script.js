let choice = prompt("Inserisci un numero da 1 a 5");

while (choice < 1 || choice > 5)
{

    choice = prompt("NUMERO SBAGLIATO: Inserisci un numero da 1 a 5");

}

result = `Il numero da te inserito è ${oddEven(choice)}`;

console.log(result);

// FUNCTION oddEven
function oddEven (number) {

    let result = "pari"

    if (number % 2 !== 0) {
        result = "dispari"
    }

    return result;

}


