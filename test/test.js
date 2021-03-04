// Напишите программу, которая выведет имя человека, выпившего n-ую баночку.
//  *
//  * Обратите внимание, что в самом начале очередь выглядит так: Шелдон, Леонард, Пенни, Раджеш, Говард.
//  * Первым человеком является Шелдон.
//  *
//  * Входные данные
//  * Входные данные состоят из единственного целого числа n.
//  *
//  * Выходные данные
//  * Выведите единственную строку — имя человека, который выпьет n-ую баночку колы. Баночки нумеруются от 1.
//  * Обратите внимание, что следует выводить имена в следующем написании: "Sheldon", "Leonard", "Penny", "Rajesh", "Howard".
//  * Именно в этом порядке друзья стоят в очереди изначально.
//  */
let arr = ["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"]
i = Infinity
while (i--) {
    let copy = arr.shift();
    arr = [...arr, copy, copy];

}
console.log(arr);
let student = ["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"]

function drinkCola(student, n_) {


    let n = n_;
    while (n--) {
        const copyEl = student.shift()
        student = [...student, copyEl, copyEl];
    }
    return student[0]
}
console.log(drinkCola(student, Infinity));