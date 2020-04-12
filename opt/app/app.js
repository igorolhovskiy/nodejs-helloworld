
db = require('app/db');
db.connect();

User = require('app/modules/user');
log = require('app/modules/logger')(module);
EventEmitter = require('events').EventEmitter;

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

    // log("Run is ok!");
    // // log(util.inspect(obj));

    // let needle = '15';
    // let haystack = [];
    // haystack.push(15);
    // if (haystack.includes(needle)) {
    //     log("Needle in haystack!");
    // } else {
    //     log("Needle NOT in haystack!");
    // }

    let server = new EventEmitter;

    server.on('request', request => {
        request.approved = true;
    });

    server.on('request', request => {
        log(request);
    });

    server.emit('request', {from: "Vasya"});
    server.emit('request', {from: "Petya"});

    server.on('error', () => log('EventEmitter error captured'));

    server.emit('error');

}

if (module.parent) {
    exports.run = run;
} else {
    run();
}