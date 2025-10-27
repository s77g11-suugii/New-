//function sayHello () {
//    console.log("Сайна уу");
//}
//sayHello();

//function greet(name) {
//    console.log("сайн уу"+ name+ "?");
//}
//greet("Сараа");

//function add(a, b) {
//    return a + b;
//}
//let sum = add(5, 10);
//console.log("niilber: "+ sum);

//const add = (a, b) => {
//    return a + b;
//};
//console.log(add(23, 45));

//const add = (a, b) => a + b;
//console.log(add(3, 4));

//function saraaage(name, age) {
//    console.log("сайн уу миний нэр " +name+ " нас " +age)
//}
//saraaage("Сараа", "22");

//function numbers() {
//    for (let i = 1; i <= 10; i++) {
//        if (i % 2 === 0) {
//           console.log("too " +i+ " n tegsh");
//        }
//    }
//}
//numbers();

//function nasTootsoh(tursunOn) {
//  return 2025 - tursunOn;
//}
//console.log("Бат одоо " + nasTootsoh(2003) + " настай.");

//function niitUne(jimsToo, negUne) {
//    return jimsToo * negUne;
//}
//console.log("jimsnii niit une " +niitUne(5, 1200)+ " $");

//function hurd(zam, hugatsaa) {
//    return zam / hugatsaa;
//}
//console.log("dundaj hurd " +hurd(300, 5)+ " km");

//function hurd(zam, hugtsaa) {
//    return zam / hugtsaa;
//}
//console.log("hurd " +hurd(200, 4)+ "km");

//function massiv() {
//    const massiv = [12, 17, 20, 15, 14];
//    for (let i = 0; i < massiv.length; i++) {
//        if (massiv[i] % 2 === 0) {
//            console.log("Тэгш нас: " + massiv[i]);
//        }
//    }
//}
//massiv();

//function jims(too, une) {
//    return too * une;
//}
//console.log("jimsnii niit une " +jims(5, 1200)+ " $");

//function massiv() {
//   const massiv = [12, 17, 20, 15, 14, 18];
//   for (let i = 0; i < massiv.length; i++) {
//    if (massiv[i] % 2 === 0) {
//        console.log("Тэгш нас: " + massiv[i]);
//    } else if (massiv[i] % 2 !== 0) {
//        console.log("Сондогой нас: " + massiv[i])
//    }
//   } 
//}
//massiv();

//array
//array
//array

//const massiv = () => {
//    const array = [12, 17, 20, 15, 14, 18];
//    for (let i = 0; i < array.length; i++) {
//        console.log(array[i] % 2 === 0 ? "Тэгш нас: " + array[i] : "Сондогой нас: " + array[i]);
//    }
//}
//massiv();

//const numbers = [180, 3];
//const hurd = numbers[0] / numbers[1];
//console.log(hurd);

//const numbers = [1800, 5];
//const jims = numbers[0] * numbers[1];
//console.log(jims);

//const utga = ["Сараа", "22"];
//const name = utga[0];
//const age = utga[1];
//console.log("сайн уу миний нэр " + name + " нас " + age);

//let i = 1;
//while (i <= 10) {
//    if (i % 3 === 0) {
//        console.log(i + " 3t huwaagdag too");
//} else if (i % 2 === 0) {
//        console.log(i + " tegsh too");
//} else {
//    console.log(i + " sondgoi too");
//}
//i++;
//}

//const numbers = [];        
//const tegshNumbers = [];   
//const sondgoiNumbers = [];     
//const gurawNumbers = [];   
//let i = 1;
//while (i <= 10) {
//    numbers.push(i);       
//    if (i % 3 === 0) {
//        gurawNumbers.push(i);
//    } else if (i % 2 === 0) {
//        tegshNumbers.push(i);
//    } else {
//        sondgoiNumbers.push(i);
//    }
//    i++;
//}
//console.log("Бүх тоо:", numbers);
//console.log("Тэгш тоо:", tegshNumbers);
//console.log("Сондгой тоо:", sondgoiNumbers);
//console.log("3-т хуваагддаг тоо:", gurawNumbers);

//const person = {
//name: "suugii",
//age: 22,
//city: "Ulaanbaatar"
//};
//console.log("minii ner " + person.name + " gedeg. bi " + person.age + " nastai. bi " + person.city + " amidardg")
 
//const amjilt = false;
//const amlaltaarAjil = new Promise((resolve, reject) => {
//  if (amjilt) {
//    resolve("Амжилттай ажиллаа!");
//  } else {
//    reject("Алдаа гарлаа!");
//  }
//});
//amlaltaarAjil
//  .then((hariu) => {
//    console.log(hariu); 
//  })
//  .catch((aldaa) => {
//    console.log(aldaa); 
//  });

const fs = require("fs");

//fs.writeFileSync("test.txt", "Сайн байна уу, энэ бол Node.js!");
const data = fs.readFileSync("test.txt", "utf8");
//fs.unlinkSync("test.txt");

//console.log("Файл амжилттай бичигдлээ!");
console.log(data);
//console.log("Файл устгагдлаа!");