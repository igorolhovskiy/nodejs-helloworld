let lang = require('./en');

function User(name) {
    this.name = name;
    this.hello_arrow = () => {
        console.log(lang.hello + ", " + this.name);
    }
}

User.prototype.hello = function(who) {
    console.log(lang.hello + ", " + who.name);
}

exports.User = User;

console.log(module);