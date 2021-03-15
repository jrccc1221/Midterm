
let myAnimals = ['dog', 'cat', 'horse', 'meerkat']
addings = prompt("Enter a new animal: ")
myAnimals.push(addings.toLowerCase())
let myAnimalsreverse = myAnimals.reverse()
console.log(`The last animal is a/an ${myAnimalsreverse[0]}`)