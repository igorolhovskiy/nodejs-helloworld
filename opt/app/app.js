
db = require('app/db');
db.connect();

User = require('app/modules/user');
log = require('app/modules/logger')(module);

util = require('util');

function run() {
    // let vasya = new User("Vasya");
    // let petya = new User("Petya");

    // let obj = {
    //     a: 10,
    //     b: 15,
    //     inspect: function() {
    //         return "This is an object obj"
    //     }
    // }
    // try {
    //     vasya.hello(petya);
    //     petya.hello_arrow();
    //     vasya.hello_arrow();
    //     vasya.hello({name: "World"});
    // } catch (e) {
    //     if (e instanceof db.PhraseError) {
    //         log(e);
    //     }
    // }

    log("Run is ok!");
    // log(util.inspect(obj));

    let needle = '15';
    let haystack = [];
    haystack.push(15);
    if (haystack.includes(needle)) {
        log("Needle in haystack!");
    } else {
        log("Needle NOT in haystack!");
    }
}

if (module.parent) {
    exports.run = run;
} else {
    run();
}