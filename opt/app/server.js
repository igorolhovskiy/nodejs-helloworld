function User(name) {
    this.name = name;
    this.hello_arrow = () => {
        console.log("Hello, " + this.name);
    }
}

User.prototype.hello = function(who) {
    console.log("Hello, " + who.name);
}

let vasya = new User("Vasya");
let petya = new User("Petya");

vasya.hello(petya);
petya.hello_arrow();
vasya.hello_arrow();
vasya.hello({name: "World"});