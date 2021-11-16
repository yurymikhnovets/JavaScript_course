let countVowels = function(userText) {
	if(!userText) {
		return 0;
	}
	userText = userText.toLowerCase();
	let count = 0;
	let vowelArray = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'];
	for(let i = 0; i < userText.length; i++) {
		if(vowelArray.includes(userText[i])) {
			count += 1;
		}
	}
	return count;
}

let runVowels = function() {
	let userText = prompt('Введите любое русское слово');
	console.log('В слове ' + '"' + userText + '"' + ' ' + 'количество гласных букв : ' + countVowels(userText));
}