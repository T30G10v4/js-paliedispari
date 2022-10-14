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

   // console.log("Contatore I", i , "Contantore J", j);

    for(; i < word.length; i++) {

      //  console.log("Contatore I", i , "Contantore J", j);

        while(j >= 0) {
            
         //   console.log("Contatore I", i , "Contantore J", j);
                
            if(word[i] !== word[j]) { 

           //     console.log("Contatore I", i , "Contantore J", j);
                
                return false;
            
            } else {

                --j;
                break;

            }

            

        }
    }
    
    return true;

}