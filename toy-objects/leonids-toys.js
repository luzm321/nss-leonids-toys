const toys = [
    {
        id: 1,
        name: "Slinky",
        manufacturer: "Alex Brands, Inc",
        color: "green",
        inventory: 21,
        price: 2,
        isExpensive: false
    },
    {
        id: 2,
        name: "Nerf Blaster",
        manufacturer: "Hasbro",
        color: "blue",
        inventory: 30,
        price: 30,
        isExpensive: true
    },
    {
        id: 3,
        name: "Play-Doh",
        manufacturer: "Hasbro",
        color: "lilac",
        inventory: 15,
        price: 20,
        isExpensive: false
    }
];

// console.log(toys);

// Displaying the value of the inventory property of all toy objects in the toys array:

// for (const toy of toys) {
//     console.log(toy.inventory);
// };

//New Toys Exercise using the .push() method to add a new toy object in the toys array

const barbie = {
    id: 4,
    name: "Barbie",
    manufacturer: "Mattel, Inc",
    color: "pink",
    inventory: 50,
    price: 25,
    isExpensive: true
};

const pogoStick = {
    id: 5,
    name: "Pogo Stick",
    manufacturer: "Razor",
    color: "Red",
    inventory: 10,
    price: 40,
    isExpensive: true
};

toys.push(barbie);
toys.push(pogoStick);

// for (const toy of toys) {
//     console.log(toy.inventory);
// };

// Iterate Leonid's Toy Catalog Exercise and using string interpolation/template literal to make/print a sentence with the properties combined

// for (const toy of toys) {
//     console.log(`The ${toy.color} ${toy.name} costs ${toy.price} dollars and is made by ${toy.manufacturer}. We have ${toy.inventory} in our inventory and if you asked me if it is expensive, the answer is ${toy.isExpensive}.`);
// };

//Practice: Increasing Leonid's Prices, altering the current for..of loop that displays the toy catalog and increasing the price of each toy by 5% before it is printed for the terminal-based catalog.

// for (const toy of toys) {
//     toy.price += toy.price * .05
//     console.log(`The ${toy.color} ${toy.name} costs ${toy.price} dollars.`)
// };

// Finding An Item in An Array(If Inside For Loop) Exercise

const toyToFind = 2;

for (let toy of toys) {
    if (toy.id === toyToFind) {
        toy.price += toy.price + 5
        console.log(`The ${toy.color} ${toy.name} costs ${toy.price} dollars and is made by ${toy.manufacturer}. We have ${toy.inventory} in our inventory and if you asked me if it is expensive, the answer is ${toy.isExpensive}.`);
    };
};