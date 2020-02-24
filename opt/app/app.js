
db = require('app/db');
db.connect();

User = require('app/modules/user');

function run() {
    let vasya = new User("Vasya");
    let petya = new User("Petya");

    vasya.hello(petya);
    petya.hello_arrow();
    vasya.hello_arrow();
    vasya.hello({name: "World"});
}

if (module.parent) {
    exports.run = run;
} else {
    run();
}