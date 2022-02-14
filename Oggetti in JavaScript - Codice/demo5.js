// Creiamo un oggetto
let user = {
	name: 'Paolo',
	surname: 'Rossi',
	age: 25,
	admin: false,
	address: {
		str: 'Via Cavour',
		num: 12,
		city: 'Roma',
	}
}

// Convertiamolo in JSON
let user_json = JSON.stringify(user);

// Da console.log vediamo la differenza: il primo è un oggetto, il secondo una stringa
console.log(user);
console.log(user_json);

// Consideriamo un JSON
let rettangolo_json = '{"base": 3, "altezza": 2}';

// Convertiamolo in oggetto
let rettangolo = JSON.parse(rettangolo_json);

console.log(rettangolo_json);
console.log(rettangolo);