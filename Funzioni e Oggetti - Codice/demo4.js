// Creiamo l'oggetto user con il metodo intro
let user = {
	name: 'Paolo',
	phone: '+39339999',
	intro: function() {
		console.log('Mi chiamo ' + this.name);
	},
}

let f = user.intro;
f(); // losing this

// Creiamo una funzione che accetta come parametro un'altra funzione e la esegue
let exec = function(func) {
	func();
}

// Chiamiamo exec passando user.intro come parametro
exec(user.intro); // losing this

// Binding this: 
let fbind = user.intro.bind(user); // fbind sarà user.intro in cui this è sempre user

exec(fbind); // this in fbind è user

/* user.intro.bind(user) restituisce la funzione user.intro nella quale il this è user */
exec(user.intro.bind(user));


