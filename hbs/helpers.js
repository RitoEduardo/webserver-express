
const hbs = require('hbs');

//Helpers
hbs.registerHelper('getYear', () => new Date().getFullYear() );

hbs.registerHelper('capitalize', (txt) =>{
    let words = txt.split(' ');
    words.forEach( (word, i )=>{
        words[i] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    return words.join(' ');
});

module.exports = {
    hbs
}