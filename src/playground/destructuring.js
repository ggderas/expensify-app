// // const person = {
// //     name: "Luis",
// //     age: 24,
// //     location: {
// //         city: "San Pedro Sula",
// //         temp: 29
// //     }
// // };

// // let { name, age } = person;
// // let { city, temp } = person.location;

// // console.log(name, age);
// // console.log("Its " + temp + " in " + city);

// const book = {
//     title: "Pensandolo bien... pensé mal",
//     author: "Jose Madero",
//     publisher: {
//         name: "NOVA P"
//     }
// }


// let { name: publisherName = "Self-Published"} = book.publisher;

// console.log(publisherName);


const address = ["1299 s Juniper Street", "Philadelphia", "Pennsylvania", "19417"];
const item = ["Coffee (hot)", "$2.00", "$2.50", "2.75"];

let [ itemName, , mediumPrice ] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}. `);