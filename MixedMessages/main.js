/*
    
    Project: Mixed Messages
    Filename: main.js
    Description: core file for mixed messages project, returns a random message.
    Author: Luis Andino - landinodc@lendingpoint.com

*/

// Words object
const words = {
    adjectives: ['perfect', 'amazing', 'lovely'],
    nouns: ['house', 'dog', 'town'],
    activeverb: ['jump', 'laugh', 'spin'],
    conjunction: ['before', 'after', 'when'],
    adverb: ['usually', 'normally', 'typically'],
    pronoun: ['She', 'He', 'They'],
    otherverb: ['seeing', 'smelling', 'observing']
}

// Returns randum int between 0-2
function randNum3() {
    return Math.floor(Math.random() * 3)
}

// generates and returns message
function returnMessage () {
    // adding some logic to add 's'
    let pronoun = words.pronoun[randNum3];
    if (pronoun === 'They') {
        return `${words.pronoun[randNum3()]} ${words.adverb[randNum3()]} ${words.activeverb[randNum3()]} ${words.conjunction[randNum3()]} ${words.otherverb[randNum3()]} the ${words.adjectives[randNum3()]} ${words.noun[randNum3()]}.`;
    } else {
        return `${words.pronoun[randNum3()]} ${words.adverb[randNum3()]} ${words.activeverb[randNum3()]}s ${words.conjunction[randNum3()]} ${words.otherverb[randNum3()]} the ${words.adjectives[randNum3()]} ${words.noun[randNum3()]}.`;
    }
}

console.log(returnMessage())