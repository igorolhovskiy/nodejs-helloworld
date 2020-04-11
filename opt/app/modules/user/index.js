let db = require('app/db');
let log = require('app/modules/logger')(module);

function User(name) {
    this.name = name;
    this.hello_arrow = () => {
        log(db.getPhrase("hello") + ", " + this.name);
    }
}

User.prototype.hello = who => {
    log(db.getPhrase("hello") + ", " + who.name);
}

module.exports = User;