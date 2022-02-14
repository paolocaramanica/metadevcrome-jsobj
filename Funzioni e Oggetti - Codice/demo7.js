// Creaiamo un oggetto user
let user = {
	name: 'Paolo',
	surname: 'Rossi',
	_age: 18, 
	
	get age() {
		return Math.floor(this._age);
	},
	
	set age(a) {
		if (a < 18 && a > 99)
			this._age = 18;
		else 
			this._age = a;
	}
}

// admin deve avere le proprietà di user, più la proprietà username
let admin = {
	__proto__: user,
	username: 'p_rossi',
}

console.log(admin.username); // p_rossi, username è una proprietà dell'oggetto admin
console.log(admin.name); // Paolo, recupera name dall'oggetto user
console.log(user.username); // undefined, l'oggetto user non ha una proprietà username

user.name = 'Marco'; // modifichiamo la proprietà name di user
console.log(user.name); // Marco (name è una proprietà di user e contiene 'Marco')
console.log(admin.name); // Marco (admin non ha la proprietà name, la prende da user, con il relativo valore 'Marco')

admin.name = 'Enzo'; // modifichiamo la proprietà name di admin
console.log(admin.name); // Enzo
console.log(user.name); // Marco

console.log(admin); // ora admin contiene anche la proprietà name
/* l'accesso in scrittura, admin.name = 'Enzo', non funziona con il prototype, ma crea la proprietà name nell'oggetto admin */

admin.age = 45; // il this in set age() è admin: in scrittura viene creata la proprietà age in admin
console.log(admin.age); // 45
console.log(user.age); // 18



