let choice = prompt("Inserisci una parola a tua scelta");

console.log(choice);

let result = "";

if(isPalindroma(choice)) {

    result = `La parola da te scelta è palindroma`;

} else {

    result = "La parola da te scelta NON è palindroma";

}

console.log(result);

// FUNCTION oddEven
function isPalindroma (word) {

    let i = 0;
    let j = word.length-1;

    while (i<j) {

        if (word[i] !== word[j]) {

            return false;

        }

        ++i;
        --j;

    }
    
    return true;

}