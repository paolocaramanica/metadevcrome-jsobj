// Creiamo un oggetto vuoto
let o = {};

// Creiamo un oggetto con due proprietà
let rettangolo = {
	base: 13,
	altezza: 9,
};

// Le proprietà possono essere di tipo diverso
let obj = {
	name: "Paolo",
	age: 2,
	admin: false,
}

// ... anche di tipo oggetto
let obj2 = {
	name: "Paolo",
	address: {
		str: "Via Cavour",
		n: 13,
		city: "Roma",
	}
}

// Accesso in dot notation 
console.log(obj.name); // in lettura
obj.name = 'Marco'; // in scrittura

// E' possibile aggiungere ed eliminare proprietà ad un oggetto anche dopo la creazione
obj.surname = 'Rossi'; // aggiunta la proprietà surname
delete obj.age; // eliminata la proprietà age

// Vediamo come è cambiato l'oggetto
console.log(obj);

// Square bracket notation
console.log(obj['name']);
obj['name'] = 'Pluto';

// La square bracket notation è necessaria se la chiave contiene spazi o se è contenuta in una variabile
obj['name surname'] = 'Paolo Rossi'; // aggiunta una proprietà contenente spazi
let k = 'job'; // 
obj[k] = 'Programmer'; // la proprietà 'job' è contenuta nella variabile k

// Vediamo gli effetti
console.log(obj);
