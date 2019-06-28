// //Setup
// var contacts = [
//     {
//         "firstName": "Akira",
//         "lastName": "Laine",
//         "number": "0543236543",
//         "likes": ["Pizza", "Coding", "Brownie Points"]
//     },
//     {
//         "firstName": "Harry",
//         "lastName": "Potter",
//         "number": "0994372684",
//         "likes": ["Hogwarts", "Magic", "Hagrid"]
//     },
//     {
//         "firstName": "Sherlock",
//         "lastName": "Holmes",
//         "number": "0487345643",
//         "likes": ["Intriguing Cases", "Violin"]
//     },
//     {
//         "firstName": "Kristian",
//         "lastName": "Vos",
//         "number": "unknown",
//         "likes": ["JavaScript", "Gaming", "Foxes"]
//     }
// ];


// function lookUpProfile(name, prop) {
//     // Only change code below this line
//     for (var i = 0, len = contacts.length; i < len; i++) {
//         if (contacts[i].firstName === name) {
//             if (contacts[i].hasOwnProperty(prop)) {
//                 return contacts[i][prop]
//             } else {
//                 return "No such property"
//             }
//         }
//     }
//     return "No such contact"
//     // Only change code above this line
// }

// // Change these values to test your function
// console.log(lookUpProfile("Kistian", "lastName"))
// console.log(lookUpProfile("Bob", "number"))
// console.log(lookUpProfile("Harry", "likes"))

const getOne = async _ => {
    return 1
}

const getAll = async _ => {
    const one = await getOne()
    console.log(one)
}

getAll()