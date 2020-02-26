
db = require('app/db');
db.connect();

User = require('app/modules/user');
log = require('app/modules/logger')(module);

util = require('util');

function run() {
    let vasya = new User("Vasya");
    let petya = new User("Petya");

    let obj = {
        a: 10,
        b: 15,
        inspect: function() {
            return "This is an object obj"
        }
    }

    vasya.hello(petya);
    petya.hello_arrow();
    vasya.hello_arrow();
    vasya.hello({name: "World"});

    log("Run is ok!");
    console.log(util.inspect(obj));
}

if (module.parent) {
    exports.run = run;
} else {
    run();
}