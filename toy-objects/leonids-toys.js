const toys = [
    {
        id: 1,
        name: "Slinky",
        manufacturer: "Alex Brands Inc.",
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
    manufacturer: "Mattel, Inc.",
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

for (const toy of toys) {
    console.log(toy.inventory);
};

