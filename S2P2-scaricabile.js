// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

let marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: true,
}

let paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
}

let amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
}

let prices = [34, 5, 2]
let shippingCost = 50
let utenteCheEffettuaLAcquisto = marco //cambia il valore qui per provare se il tuo algoritmo funziona!

/* CALCOLO PREZZO FINALE */

/* let shoppingCart = 0;
for (let i = 0; i < prices.length; i++) {
  shoppingCart += prices[i];
}

let totalCart = 0;
if (utenteCheEffettuaLAcquisto.isAmbassador) {
  totalCart = (shoppingCart * 0.7);
} else {
  totalCart = shoppingCart;
}

if (totalCart <= 100) {
  totalCart += shippingCost;
}

console.log(totalCart); */

/* ARRAY DI UTENTI */

/* let users = [];
users.push(marco, paul, amy);

for (let index = 0; index < users.length; index++) {
  if (users[index].isAmbassador) {
    console.log(users[index].name + " " + users[index].lastName + " is an Ambassador");
  } else {
    console.log(users[index].name + " " + users[index].lastName + " is not and Ambassador");
  }
} */

/* ARRAY DI AMBASSADOR */

/* let userAmbassardors = [];

for (let index = 0; index < users.length; index++) {
  if (users[index].isAmbassador) {
    userAmbassardors.push(users[index]);
  }
}
console.log(userAmbassardos); */


/* NUMERI CASUALI
let myNum = Math.floor(Math.random() * 10) + 1;
console.log(myNum); */

/* EXTRA 1
Scrivi un programma che dato un numero N, generi un array di N numeri casuali e stampi sia l'array ottenuto che quello invertito.
 Esempio:
Input: N = 5
Output: array ottenuto = [3, 5, 10, 2, 8], array invertito = [8, 2, 10, 5, 3] */

/* let myIndex = 5;
let myArray = [];
for (let i = 0; i < myIndex; i++) {
  myArray.push(Math.floor(Math.random() * 10) + 1);
}
console.log(myArray);

let myInvertedArray = [];
let arraySlot;
for (let i = 0; i < myArray.length; i++) {
  arraySlot = myArray.length - i -1; 
  myInvertedArray.push(myArray[arraySlot]);
}
console.log(myInvertedArray); */

/* EXTRA 2a

Metti un po' d'ordine
Scrivi un programma che dato un array di 10 numeri interi ordinati in modo casuale li riordini in modo decrescente.
Esempio:
Input: array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4]
Output: [8, 7, 6, 5, 5, 3, 2, 1, -4, -2] */

/* let myArray = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4];
let major = 0;
let minor = 0;
console.log(myArray);
for (let i = 0; i < myArray.length; i++) {
  for (let n = i; n <myArray.length; n++) {
    if (myArray[i] < myArray[n]) {
      minor = myArray[i];
      major = myArray[n];
      myArray[n] = minor;
      myArray[i] = major; 
    }
  }  
}
console.log(myArray) */

/* EXTRA 2b
Variante:
Prova ad ordinali in modo crescente.
 */

/* for (let i = 0; i < myArray.length; i++) {
  for (let n = i; n <myArray.length; n++) {
    if (myArray[i] > myArray[n]) {
      major = myArray[i];
      minor = myArray[n];
      myArray[n] = major;
      myArray[i] = minor; 
    }
  }  
}
console.log(myArray) */


/* EXTRA 3 
Operazioni tra array
  Scrivi un programma che dati:
  
2 array di 10 elementi interi casuali compresi tra 1 e 10,
il tipo di operazione aritmetica da effettuare, una delle seguenti:
addizione
sottrazione
moltiplicazione
divisione
Esegua il calcolo tra ogni elemento dei due array, salvando ciascun risultato in un terzo array di appoggio.

  Esempio:
    Input: a = [3, 7, 2, 5, 8, 1, 2, 5, 6, 4], b = [9, 3, 1, 4, 7, 6, 5, 10, 1, 5], operazione = "addizione"
    Output: c = [12, 10, 3, 9, 15, 7, 7, 15, 7, 9] */

/* let a = [3, 7, 2, 5, 8, 1, 2, 5, 6, 4];
let b = [9, 3, 1, 4, 7, 6, 5, 10, 1, 5];
console.log(a);
console.log(b);
let addizione = [];
let sottrazione = [];
let moltiplicazione = [];
let divisione = [];
for (let i = 0; i < a.length; i++) {
  addizione.push(a[i] + b[i]);
  sottrazione.push(a[i] - b[i]);
  moltiplicazione.push(a[i] * b[i]);
  divisione.push(a[i] / b[i]);
}
console.log(addizione);
console.log(sottrazione);
console.log(moltiplicazione);
console.log(divisione) */

/*  EXTRA 4
 La tombola magica
 Scrivi un programma che dato:
 
un array di 10 elementi di numeri casuali interi (compresi tra 1 e 90 senza ripetizioni),
un array di 10 numeri interi a tuo piacimento (compresi tra 1 e 90 senza ripetizioni)
Verifichi quanti numeri scelti da te sono presenti nell'array principale e restituisca un risultato del tipo:
 2 numeri uguali => ambo
 3 numeri uguali => terna
 4 numeri uguali => quaterna
 5 numeri uguali => cinquina
 tutti i numeri uguali => tombola
 
 In caso di vittoria dovrà essere stampato un messaggio "Hai fatto X",
 in caso di perdita dovrà essere mostrato il messaggio "Mi dispiace, hai perso!".
 (generazione numeri random https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
*/

/* let extraction = [];
for (let i = 0; i < 10; i++) {
  extraction.push(Math.floor(Math.random() * 90) + 1);
}
for (let i = 0; i < extraction.length; i++) {
  for (let x = 0; x < extraction.length; x++) {
    if (extraction[i] = extraction[x]) {
      extraction[i] = Math.floor(Math.random() * 90) + 1;
    }
  }
}

console.log(extraction);
let chosenNums = [80, 26, 45, 54, 53, 70, 33, 35, 3, 12];
console.log(chosenNums);
let comb = 0;
for (let i = 0; i < chosenNums.length; i++) {
  if (extraction.includes(chosenNums[i]))
      comb++;
  }

if (comb <= 1) {
  console.log("Mi dispiace, hai perso!");
} else if (comb = 2) {
  console.log("Hai fatto Ambo!");
} else if (comb = 3) {
  console.log("Hai fatto Terna!");
} else if (comb = 4) {
  console.log("Hai fatto Quaterna!");
} else if (comb >= 5) {
  console.log("Hai fatto Cinquina!");
} */