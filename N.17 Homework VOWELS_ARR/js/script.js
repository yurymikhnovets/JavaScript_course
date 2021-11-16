// С использованием метода массива forEach
let countVowelsForEach = function(userText) {
	if(!userText) {
		return 0;
	}
	userText = userText.toLowerCase();
	let count = 0;
	let vowelArray = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'];
	Array.from(userText).forEach(char => {
		if(vowelArray.includes(char)) {
			count++;
		}
	});
	return count;
}
let runVowelsForEach = function() {
	let userText = prompt('Введите любое русское слово');
	console.log('В слове ' + '"' + userText + '"' + ' ' + 'количество гласных букв : ' + countVowelsForEach(userText));
}

// С использованием метода массива filter
let countVowelsFilter = function(userText) {
	if(!userText) {
		return 0;
	}
	userText = userText.toLowerCase();
	let vowelArray = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'];
	let count = [... userText].filter(element => vowelArray.includes(element)).length;
	return count;
}

let runVowelsFilter = function() {
	let userText = prompt('Введите любое русское слово');
	console.log('В слове ' + '"' + userText + '"' + ' ' + 'количество гласных букв : ' + countVowelsFilter(userText));
}

// С использованием метода массива reduce
let countVowelsReduce = function(userText) {
	if(!userText) {
		return 0;
	}
	userText = userText.toLowerCase();
	let vowelArray = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'];
	let count = [... userText].reduce((a, b) => vowelArray.includes(b) ? a + 1 : a, 0);
	return count;
}

let runVowelsReduce = function() {
	let userText = prompt('Введите любое русское слово');
	console.log('В слове ' + '"' + userText + '"' + ' ' + 'количество гласных букв : ' + countVowelsReduce(userText));
}