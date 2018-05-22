let  val;
// //part 1
// var name = 'samadi';
// console.log(name);
// var age = 34;
// console.log(age);
// var married = true;
// var blue = false;
// //part 2
// //arrays
// var villes = ['fes','taza','rabat'];
// console.log(villes[0]);
// //add to the first array
// villes.unshift('casa');
// console.log(villes);
// //remove from the first of the array
// villes.shift();
// console.log(villes);
// //part 3
// //array of object
// var contacts = [{nom: 'samadi',tel:'0567767676'},{nom: 'amine',tel:'0568867676'}];
// console.log(contacts[0].tel);
// //add object to the end of the array
// contacts.push({nom:'halim',tel:'009909999'});
// console.log(contacts[2]);
// //part 4
// //object
// var person = {
//     nom : "samadi",
//     prenom : "samir",
//     age : 34,
//     ville : 'Taza',
// }
// //show person
// console.log(person.nom);
// //part 5 
// //show date 
//  var date = new Date();
//  console.log(date);
//part 6 val to string
// integer to string
// var value 
// value = String(6);
// console.log(typeof value);
// value = String(4+4);
// console.log(value);
// value = (7).toString();
// console.log(value);
//part 7 
// //date to string
// value = String(new Date());
// console.log(value);
//part 8
// //bool to string
// value = String(true);
// console.log(value);
//part 9
// //string to number
// value = Number('8');
// console.log(value);
// value = parseInt('10.03');
// console.log(value);
// value = parseFloat('10.03');
// console.log(value);
//part 10
// value = "5" + 2     // returns "52"     
// value = "5" - 2     // returns 3         
// value = "5" * "2"   // returns 10    
// console.log(value);
//part 11
// //calculate 
// const num1 = 100;
// const num2 = 50;
// let val;
// val = num1 + num2;
// val = num1 * num2;
// val = num1 - num2;
// val = num1 / num2;
// val = num1 % num2;
// console.log(val);
//part 12
// val = Math.PI;
// val = Math.round(2.4);
// console.log(val);
//part 13
// val = Math.ceil(2.4);
// val = Math.floor(2.8);
// val = Math.sqrt(64);
//part 14
// val = Math.abs(-3);
// val = Math.pow(8, 2);
// val = Math.min(2,33,4,1,55,6,3,-2);
// val = Math.max(2,33,4,1,55,6,3,-2);
// console.log(val);
//part 15
// val = Math.random();
// val = Math.floor(Math.random() * 10 + 1);
// console.log(val);
//part 16
// const firstName = 'Samadi';
// const lastName = 'Samir';
// const age = 36;
// const str = 'la vie est belle';
// const text1 = 'javascript est';
// const text2 = 'un langage de programmation';
// const tags = 'web design,web development,programming';
// // Length
// val = firstName.length;
// console.log(val);
//part 17
//indexOf
// val = firstName.indexOf('d');
// console.log(val);
//part 18
//  val = str.slice(-3);
//  console.log(val);
//part 19
// val = str.substring(3,6);
// console.log(val);
//part 20
// val = str.substr(3,6);
// console.log(val);
//part 21
// val = str.replace('la vie','Darija Coding');
// console.log(val);
//part 22
// val = str.toUpperCase();
// console.log(val);
//part 23
// val = text1.concat(" ",text2);
// console.log(val);
//part24
// val = text1.charAt(2);
// console.log(val);
//part 26
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const numbers = [43,56,33,23,44,36,5];
const numbers2 = new Array(22,45,33,76,54);
// val = numbers.length;
// console.log(val);
//part 27

// numbers.push(250);
//part 28
// x = numbers.pop();
// console.log(x);
//part 29
// numbers.unshift(2);
//part 30
// val = numbers.shift();
//part 31
// numbers.sort();
// val = numbers.sort(function(x, y){
//     return x - y;
// });
//part 32

// val = numbers.sort(function(x, y){
//     return y - x;
// });
//part 33
// val = numbers.concat(numbers2);
//part 34
// function greaterThan(num){
//   return num > 50;
// }
  
// val = numbers.find(greaterThan);
//part 36
// console.log(numbers);
// numbers.splice(1,2);
//part 37
//objets 
// const person = {
//     nom : 'samadi',
//     prenom : 'samir',
//     age : 30,
// }
// console.log(person.nom);
//part 38
//add array to object
// const person = {
//     nom : 'samadi',
//     prenom : 'samir',
//     age : 30,
//     hobbies: ['music', 'sports'],
// }
// console.log(person.hobbies[0]);
//part 39
//add object inside object
// const person = {
//   firstName: 'Steve',
//   lastName: 'Smith',
//   age: 36,
//   email: 'steve@aol.com',
//   hobbies: ['music', 'sports'],
//   address: {
//     ville: 'Taza',
//     pays: 'Maroc'
//   },
// }
// console.log(person.address.ville);
// const person = {
//   firstName: 'Steve',
//   lastName: 'Smith',
//   age: 33,
//   email: 'steve@aol.com',
//   hobbies: ['music', 'sports'],
//   address: {
//     ville: 'Taza',
//     pays: 'Maroc'
//   },
//   getBirthYear: function(){
//     return 2018 - this.age;
//   }
// }
// console.log(person.getBirthYear());
//part 40
// const people = [
//   {name: 'Imad', age: 30},
//   {name: 'Samir', age: 23},
//   {name: 'Amine', age: 40}
// ];

// for(let i = 0; i < people.length; i++){
//   console.log(people[i].name);
// }
//part 41
//get date
// const today = new Date();
let id = 100;
// if(id == 100){
//   console.log('correct');
// } else {
//   console.log('incorrect');
// }
// console.log(id);
// if(id === 100){
//   console.log('correct');
// } else {
//   console.log('incorrect');
// }
// if(id <= 100){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }
// let name = 'samir';
// if(age > 18 || age == 18){
//   console.log(`${name} est majeur`);
// } else {
//   console.log(`${name} est mineur`);
// }
// console.log(age);
// let age = 36;
// switch(age){
//     case 13 :
//     console.log('mineur');
//     break;
//     case 18 :
//     console.log('majeur');
//     break;
//     case 36 :
//     console.log('mature');
//     break;
//     case 50 :
//     console.log('vieux');
//     break;
//     default:
//     console.log('undetérminé');
//     break;
// }
// function sayHello(nom = 'samadi',prenom = 'samir'){
//     return 'Salam ' + nom + ' ' + nom;
// }
// console.log(sayHello());
// FUNCTION EXPRESIONS

// const multip = function(x = 3,y = 8){
//     return x*y;
// };
// // console.log(multip());
// (function(){
//     console.log('hello world');
// })();
// const person = {
//   add: function(name){
//     console.log(`compte ajouté ${name}`);
//   },
//   edit: function(id){
//     console.log(`modifier le compte ${id}`);
//   }
// }
// person.add('samadi');
// person.edit(22);
// for(let i = 0; i < 10; i++){
//   console.log(i);
// }
// let i = 0;

// while(i < 10){
//   console.log('i = ' + i);
//   i++;
// }
// let i = 100;
// do {
//   console.log('i = ' + i);
//   i++;
// }
// while(i < 10);
// const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

// cars.forEach(function(car, index){
//   console.log(`${index} : ${car}`);
// });
// MAP
// FOR IN LOOP
// const user = {
//   nom: 'samadi', 
//   prenom: 'samir',
//   age: 30
// }

// for(let x in user){
//   console.log(`${x} : ${user[x]}`);
// }
// const div = document.getElementById('main-div');
// const h3 = document.createElement('h3');
// h3.className = 'title';
// h3.appendChild(document.createTextNode('Darija Coding'));
// div.appendChild(h3);
// const newH3 = document.createElement('h3');
// newH3.className = 'title';
// newH3.appendChild(document.createTextNode('DCoding'));
// div.replaceChild(newH3,h3);
// const ul = document.querySelector('#listItem');
// const li = document.querySelectorAll('li');
// ul.removeChild(li[0]);
// console.log(ul);
// const h3 = document.getElementById('title');
// h3.classList.add('title');
// console.log(h3);
// const link = document.getElementById('link');
// link.setAttribute('href', 'http://facebook.com')
// console.log(link.getAttribute('href'));
// const form = document.getElementById('form');
// const input = document.getElementById('input');
// form.addEventListener('submit',launchEvent);
// function launchEvent(){
//      alert(input.value);
// }
// const h3 = document.getElementById('title');
// h3.addEventListener('click',launchEvent);
// function launchEvent(e){
//     alert(e.target.textContent);
// }
// localStorage.setItem('nom', 'samadi');
// const nom = localStorage.removeItem('nom');
// localStorage.clear();
// function Person(nom,prenom){
//     this.nom = nom;
//     this.prenom = prenom;
//     this.calculate = function(age){
//         return 2018 - age;
//     }
// }
// const employe = new Person('belasri','imad');
// employe.nationality = 'marocain';
// console.log(employe.calculate(34));
// function Person(nom ,prenom ,age){
//     this.nom = nom;
//     this.prenom = prenom;
//     this.age = age;
// }

// Person.prototype.ville = 'Taza';
// Person.prototype.calculate = function(age){
//     return 2018 - age;
// }
// Person.prototype.getFullName = function(){
//     return `${this.nom} ${this.prenom}`;
// }
// const employe = new Person('samadi','samir','33');
// console.log(employe.hasOwnProperty('nom'));
// class Person {
//     constructor(nom,prenom,age){
//         this.nom = nom;
//         this.prenom = prenom;
//         this.age = age;
//     }
//     hello(){
//         return `bonjour ${this.nom} ${this.prenom}`;
//     }
//     static yearOfBirth(age){
//         return 2018 - age;
//     }
// }
// function parent(nom){
//     return class{
//         sayHello(){
//             return `Bonjour ${nom}`;
//         }
//     }
// }
// class Client extends parent('samadi'){}
// const client = new Client();
// console.log(client.sayHello());
// const person = new Person('samadi','samir',40);
// console.log(person.nom);
// console.log(person.hello());
// console.log(Person.yearOfBirth(38));
// class Product extends Array{
//     countProducts(){
//         return this.length;
//     }
// }
// const products = new Product('samsung','hp','htc','iphone');
// console.log(products.countProducts());