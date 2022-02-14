// Creiamo una funzione che restituisca il fattoriale di un numero intero positivo
let Factorial = function(n) {
	if (n == 0)
		return 1;
	else 
		return n * Factorial(n-1); // Ricorsione: la funzione chiama se stessa
}

// Esempi di esecuzione
console.log(Factorial(4)); // 24
console.log(Factorial(1)); // 1

let f = Factorial;
Factorial = null;

// console.log(f(4)); // errore: nel passo ricorsivo, viene chiamata Factorial, che è null

// Implementiamo Factorial con NFE
Factorial = function fact(n) {
	if (n == 0)
		return 1;
	else 
		return n * fact(n-1);
}

f = Factorial;
Factorial = null;

console.log(f(5)); // corretto: nel passo ricorsivo, viene chiamata fact
