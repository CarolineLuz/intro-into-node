const thingsThatPuppersDo = require('./thingsThatPuppersDo');
const dogBreeds = require('dog-breeds');


const breed = dogBreeds.random()


console.log(``)
console.log(`Hi, I'm your smol puppy companion! Nice to meet you!`)
console.log(`    __    __`)
console.log(`    \\/----\\/`)
console.log(`     \\0  0/    ${thingsThatPuppersDo.randomThing()}`)
console.log(`     _\\  /_`)
console.log(`   _|  \\/  |_`)
console.log(`  | | |  | | |`)
console.log(` _| | |  | | |_`)
console.log(`"---|_|--|_|---"`)
console.log(``)
console.log(`I am a ${breed.name}. Arf, this is how I'll look one day when I grow up: ${breed.imageURL}`)
console.log(``)