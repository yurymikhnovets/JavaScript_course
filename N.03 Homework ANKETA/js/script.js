let anketa = function() {

	let lastName = prompt('Ваша фамилия :');
		while(!lastName) {
			lastName = prompt('Поле должно быть заполненно! Введите Вашу фамилию еще раз');
		}

	let firstName = prompt('Ваше имя :');
		while(!firstName) {
			firstName = prompt('Поле должно быть заполненно! Введите Ваше имя еще раз');
		}

	let middleName = prompt('Ваше отчество :');
		while(!middleName) {
			middleName = prompt('Поле должно быть заполненно! Введите Ваше отчество еще раз');
		}

	let ageInYears = prompt('Ваш возраст :');
		while(!ageInYears || isNaN(ageInYears)) {
			ageInYears = prompt('Вы ввели пустое или не числовое значение! Попробуйте еще раз');
		}

	let gender = confirm('Вы мужчина?');
	let ageAfterFiveYears = parseInt(ageInYears) + 5;
	let ageInDays = ageInYears * 365;
	let retired;

		if(gender == true && ageInYears < 62.5) {
			gender = 'мужской';
			retired = 'нет';
		} else if (gender == true && ageInYears > 62.5) {
			gender = 'мужской';
			retired = 'да';
		} else if (gender == false && ageInYears < 57.5) {
			gender = 'женский';
			retired = 'нет';
		} else {
			gender = 'женский';
			retired = 'да';
		}

	alert('Ваше ФИО : ' + lastName + ' ' + firstName + ' ' + middleName + '\n' + 'Ваш возраст в годах : ' + ageInYears + '\n' + 'Ваш возраст в днях : ' + ageInDays + '\n' + 'Через 5 лет вам будет : ' + ageAfterFiveYears + '\n' + 'Ваш пол : ' + gender + '\n' + 'Вы на пенсии : ' + retired);
	
}