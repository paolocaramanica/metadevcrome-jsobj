// Creiamo un oggetto rettangolo, con il metodo calcolaArea

let rettangolo = {
	base: 13,
	altezza: 4,
	calcolaArea: function() {
		return this.base * this.altezza;
	},
}

// utilizziamo il metodo calcolaArea
let areaRettangolo = rettangolo.calcolaArea();
console.log(areaRettangolo);

// aggiungiamo il metodo calcolaPerimetro
rettangolo.calcolaPerimetro = function() {
	return 2 * (this.base + this.altezza);
}

let perimetroRettangolo = rettangolo.calcolaPerimetro();
console.log(perimetroRettangolo);

// E' possibile definire una funzione e poi attribuirla ad un oggetto
let f = function() {
	console.log('Ciao!');
}

rettangolo.saluto = f;

// Loop sulle proprietà di un oggetto
for (let k in rettangolo) {
	console.log(k);
	console.log(rettangolo[k]);
}
	