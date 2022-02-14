// Definiamo una stringa
let s = "pluto";

// Lavoriamo con la stringa s come se fosse un oggetto
console.log(s.length); // 5, la proprietà length contiene la lunghezza della stringa
console.log(s.toUpperCase()); // PLUTO, il metodo toUpperCase() restituisce la stringa in maiuscolo

// E' possibile utilizzare i costruttori String, Number, ... ma non è consigliabile

let t1 = 'abc'; // stringa, tipo elementare salvato per valore
let t2 = 'abc';

if (t1 == t2)
	console.log('t1 e t2 sono uguali'); // il confronto avviene per valore
else 
	console.log('t1 e t2 sono diverse');

let t3 = t2;

if (t2 == t3)
	console.log('t3 e t2 sono uguali'); // il confronto avviene per valore
else 
	console.log('t3 e t2 sono diverse');

t3 = 'def'; // modifica solo t3, non t2

let s1 = new String('abc'); // la stringa s1 è un oggetto, è salvata per riferimento
let s2 = new String('abc');

if (s1 == s2)
	console.log('stringhe uguali'); 
else 
	console.log('stringhe diverse'); // vengono confrontati i riferimenti, non i valori

let b = new Boolean(false);

if (b)
	console.log('b è true'); // b è un oggetto, un oggetto viene sempre convertito in true
