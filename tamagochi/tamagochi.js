alert('Привет!');


let name = prompt('Давайте создадим вашего персонажа,как мы его назовем?');
alert(`Твоего персонажа зовут ${name}`);
let age = prompt('Сколько ему лет?')
alert(`Ему ${age} лет`)
let animal = prompt('Что у вас за животное?')
alert(`У вас супер ${animal}`)
alert(`Твоего персонажа зовут ${name},Ему ${age} лет,У вас супер ${animal}`)




let animal1 = {
    name: name,
    age: age,
    animal: animal,
    energy: 10,
    satiety: 7





}
console.log(animal1);

let timerId = setInterval(() => {
    if (confirm('Желаете покормить вашего питомца?') === true) {
        alert('Вы покормили своего питомца(satiety+1)');
        animal1.satiety++;
    } else {
        alert('satiety-1');
        animal1.satiety--
    };

}, 7000);
let timerId = setInterval(() => {
    if (confirm('Желаете чтобы ваш питомец поспал??') === true) {
        alert('Ваш питомец поспал(energy+1)');
        animal1.energy++;
    } else {
        alert('energy-1');
        animal1.energy--
    };

}, 10000);