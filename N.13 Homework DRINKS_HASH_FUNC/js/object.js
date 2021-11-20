var drinkStorage = new HashStorage();
  
var listBox = document.querySelector('.list-box');
var add = document.querySelector('.buttons-box .add');
add.onclick = function () {
    var key = prompt('Введите название напитка','');
    var value = (function () {
        value = {};
        value.alcohol = confirm('Напиток алкогольный?');
        value.recept  = prompt('Напишите рецепт','');
        return value;
    })();
        console.log(drinkStorage);
        return drinkStorage.addValue(key,value);
    };
  
var info = document.querySelector('.buttons-box .info');
info.onclick = function () {
    var key = prompt('Введите название напитка','');
    var value = drinkStorage.getValue(key);
    var answer = `\nНапиток: ${key};
                  \nАлкогольный: ${value.alcohol ? 'Да' : 'Нет'};
                  \nРецепт приготовления: ${value.recept}.`;
    listBox.innerHTML = answer;
};
  
var del = document.querySelector('.buttons-box .delete');
del.onclick = function () {
    var key = prompt('Введите название напитка','');
    listBox.innerHTML = drinkStorage.deleteValue(key);
};
  
var list = document.querySelector('.buttons-box .list');
list.onclick = function () {
    listBox.innerHTML = drinkStorage.getKeys().join(';\n');
};