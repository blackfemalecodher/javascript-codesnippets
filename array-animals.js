const animals = ['cat', 'dog', 'wolf','lion', 'eagle','zebra'];

console.log (animals[0]);


console.log(animals.length);

for (let i = 0; i <= animals.length; i++) {
    const animal = animals[i];
    console.log(animal);
}

console.log(animals.unshift('cow'));
console.log (animals);
