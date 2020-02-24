let phrases;

exports.connect = () => {
    phrases = require('app/lang/en');
}

exports.getPhrase = (name) => {
    if (!phrases[name]) {
        throw new Error("No such phrase " + name);
    }
    return phrases[name];
}