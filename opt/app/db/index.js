let phrases;
util = require('util');

function PhraseError(message) {
    this.message = message;
    Error.captureStackTrace(this, PhraseError);
}
util.inherits(PhraseError, Error);

exports.connect = () => {
    phrases = require('app/lang/en');
}

exports.PhraseError = PhraseError;

exports.getPhrase = (name) => {
    if (!phrases[name]) {
        throw new PhraseError("No such phrase " + name);
    }
    return phrases[name];
}