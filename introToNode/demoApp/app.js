var catMe = require('cat-me');
var knockknock = require('knock-knock-jokes');
var faker = require('faker');



// console.log(catMe());
// console.log(knockknock());

console.log('====================\nWelcome To My Shop\n====================');

for(var i = 0; i < 10; i++) {
    console.log(faker.fake("{{commerce.productName}} - ${{commerce.price}}"));    
}