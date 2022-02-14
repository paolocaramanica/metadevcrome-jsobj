// Definiamo una funzione
let Sum = function(a,b) {
	return a+b;
}

// Una funzione è un oggetto, che ha delle proprietà predefinite, tra cui name e length
console.log(Sum.name); // Nome della funzione ("Sum")
console.log(Sum.length); // Numero di parametri della funzione (2)

// E' anche possibile definire delle proprietà custom, come qualunque oggetto
Sum.descr = "Effettua la somma di due numeri";
console.log(Sum.descr); // Contenuto della proprietà descr

// Esempio di uso delle proprietà custom

// Consideriamo la funzione MakeCounter, che crea un contatore
function MakeCounter() {
	let c = 0;
	let counter = function() {
		return c++;
	}
	return counter;
}

let c1 = MakeCounter(); // essendo una closure, c1 "ricorda" che era contenuta in MakeCounter ed ha accesso alla variabile c

console.log(c1()); // Restituisce 0 e porta c a 1
console.log(c1()); // Restituisce 1 e porta c a 2

// Consideriamo un'implementazione alternativa
function MakeCounter2() {
	let counter = function() {
		return counter.c++;
	}
	
	// Essendo la funzione counter un oggetto (come tutte le funzioni), è possibile creare una proprietà
	counter.c = 0;
	return counter;
}

let c2 = MakeCounter2();
console.log(c2()); // Restituisce 0 e porta c2.c a 1
console.log(c2()); // Restituisce 1 e porta c2.c a 2

/* A differenza dell'implementazione precedente, c non è una variabile della funzione c1 (quindi visibile
solo internamente), ma una proprietà accessibile anche dall'esterno */
c2.c = 100; // Possiamo modificare il valore di c, per forzare il contatore a ripartire da un nuovo valore
console.log(c2()); // Restituisce 100 e porta c2.c a 101
