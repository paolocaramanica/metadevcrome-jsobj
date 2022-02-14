// Creiamo l'oggetto user con il metodo intro
let user = {
	name: 'Paolo',
	phone: '+39339999',
	intro: function() {
		console.log('Mi chiamo ' + this.nome);
	},
}

user.intro(); // this fa riferimento a user, this.nome è 'Paolo'

let showPhone = function() {
	console.log('Il mio numero di telefono è ' + this.phone);
}

showPhone(); // non essendo un metodo di un oggetto, this fa riferimento al Global Object, che non ha una proprietà phone, quindi this.phone è undefined

// Creiamo il metodo showPhone per user e assegniamo ad esso la funzione showPhone
user.showPhone = showPhone;

user.showPhone(); // stavolta il this fa riferimento a user

// Creiamo un altro oggetto
let office = {
	name: 'Pippo srl',
	phone: '069999',
}

// Creiamo il metodo showPhone per office e assegniamo ad esso la stessa funzione showPhone
office.showPhone = showPhone;

office.showPhone(); // stavolta il this fa riferimento a office

// Creiamo una variabile pres e assegniamo il metodo user.intro
let pres = user.intro;

pres(); // this non fa più riferimento a user, nonostante la funzione pres (= user.intro) sia "nata" come metodo dell'oggetto user: ha perso il this
