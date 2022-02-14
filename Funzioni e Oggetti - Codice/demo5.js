// Creiamo un oggetto
let user = {
	name: 'Paolo',
	surname: 'Rossi',
	
	// Creiamo un metodo
	m1: function() {
		console.log(this.name); // this è l'oggetto user
		
		// Creiamo una funzione dentro al metodo
		let f = function() {
			console.log(this.surname); // this è il Global Object
		}
		
		// Chiamiamo tale funzione
		f();
	},
	
	// Creiamo una seconda versione del metodo
	m2: function() {
		console.log(this.name); // this è l'oggetto user
		
		// Creiamo una funzione dentro al metodo
		let f = () => { console.log(this.surname) }; // le arrow function non hanno this; this è quello della funzione più esterna
		
		// Chiamiamo tale funzione
		f();
	},
}

// Viene stampato solo il name
user.m1();

// Viene stampato sia il name che il surname (nella arrow function il this è l'oggetto user)
user.m2();