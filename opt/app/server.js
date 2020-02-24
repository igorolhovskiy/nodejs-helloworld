User = require('./modules/user').User

let vasya = new User("Vasya");
let petya = new User("Petya");

vasya.hello(petya);
petya.hello_arrow();
vasya.hello_arrow();
vasya.hello({name: "World"});