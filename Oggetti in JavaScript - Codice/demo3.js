// Se abbiamo bisogno di creare più rettangoli (con diversi valori di base e altezza)
// Creriamo un costruttore di rettangoli

function Rettangolo(b,h) {
	this.base = b;
	this.altezza = h;
	this.calcolaPerimetro = function() {
		return 2 * (this.base + this.altezza);
	}
	this.calcolaArea = function() {
		return this.base * this.altezza;
	}
}

let rett1 = new Rettangolo(4,8);

console.log(rett1.calcolaPerimetro());

rett1.base = 90;
console.log(rett1.calcolaArea());

// Chiamando la funzione con l'operatore new
/* questo è (più o meno) quanto JavaScript fa dietro le quinte
	this = {};
	this.base = b;
	this.altezza = h;
	this.calcolaPerimetro = ...
	...
	
	return this;
*/

// Definiamo una classe Triangolo
class Triangolo {
	constructor(b,h) {
		this.base = b;
		this.altezza = h;
	}
	calcolaArea() {
		return this.base * this.altezza / 2;
	}
}

let tr = new Triangolo(4,5);

console.log(tr.calcolaArea());

tr.pluto = 3;

console.log(tr);



