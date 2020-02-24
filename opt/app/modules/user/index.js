let db = require('app/db');

function User(name) {
    this.name = name;
    this.hello_arrow = () => {
        console.log(db.getPhrase("hello") + ", " + this.name);
    }
}

User.prototype.hello = function(who) {
    console.log(db.getPhrase("hello") + ", " + who.name);
}

module.exports = User;