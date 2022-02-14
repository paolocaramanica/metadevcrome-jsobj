let user = {
	name: 'Paolo',
	_year: 1979, // non vogliamo che sia scritta direttamente
	
	// restituisce il valore in _year
	get year() {
		return this._year;
	},
	
	// prima di settare _year, verifica che sia nel range voluto
	set year(anno) {
		if (anno <= 2020 && anno >= 1920)
			this._year = anno;
		else 
			this._year = 1920;
	}
}

console.log(user.year); // 1979

user.year = 1960;
console.log(user.year); // 1960 (il valore è nel range previsto)

user.year = 1400;
console.log(user.year); // 1920 (il valore 1400 non è nel range)

user._year = 1300;
console.log(user.year); // 1300 (la proprietà _year è accessibile)
