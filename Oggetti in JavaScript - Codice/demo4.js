// Assegniamo una stringa ad una variabile
let stringa1 = "Ciao";

// creiamo una copia di tale variabile
let stringa2 = stringa1;

stringa2 = "Pluto";

console.log(stringa1);
console.log(stringa2);

// Proviamo con gli oggetti

let oggetto1 = {
	a: 19,
	b: 24,
}

let oggetto2 = oggetto1;

oggetto2.a = 10;

// oggetto1.a risulta modificato poiché gli oggetti sono salvati per riferimento
console.log(oggetto1.a);

// Confronto tra oggetti
let obj1 = {
	p: 9,
	q: 7,
}

let obj2 = {
	p: 9,
	q: 7,
}

/* Anche se gli oggetti sono uguali (hanno le stesse proprietà con gli stessi valori),
poiché nelle variabili è salvato il riferimento in memoria all'oggetto, il confronto tra obj1 e obj2
restituisce false*/

if (obj1 == obj2)
	console.log("Uguali");
else 
	console.log("Diversi");

// Clonazione di oggetti
let rettangolo = {
	base: 12,
	altezza: 8,
}

let rettangolo2 = {};
for (let k in rettangolo)
	rettangolo2[k] = rettangolo[k];

// Ora abbiamo un oggetto clone di quello di partenza (nel caso di oggetti annidati può essere molto più complesso!)
console.log(rettangolo2);


