
db = require('app/db');
db.connect();

User = require('app/modules/user');
log = require('app/modules/logger')(module);

function run() {
    let vasya = new User("Vasya");
    let petya = new User("Petya");

    vasya.hello(petya);
    petya.hello_arrow();
    vasya.hello_arrow();
    vasya.hello({name: "World"});

    log("Run is ok!");
}

if (module.parent) {
    exports.run = run;
} else {
    run();
}