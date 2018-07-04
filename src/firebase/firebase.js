
import  * as firebase from 'firebase';
import moment from 'moment';

// Initialize Firebase
const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();


// // database.ref('attributes').remove()
// //     .then(() => {
// //         console.log("Removed");
// //     })
// //     .catch((e) => {
// //         console.log("e", e);
// //     })

// // database.ref().set({
// //     name: 'Luis Deras',
// //     age: 25,
// //     isSingle: false,
// //     stressLevel: 6,
// //     location: {
// //         city: "San Pedro Sula",
// //         country: "Honduras"
// //     },
// //     job: {
// //         title: 'Software Developer',
// //         company: 'Google'
// //     }
// // })

// // database.ref()
// //     .on('value', (snapshot) => {
// //         let val = snapshot.val()
// //         console.log(val.name, ' is a ', val.job.title, ' at ', val.job.company);
// //     })


// // setTimeout(() => {
// //     database.ref().update({
// //         name: "Gigi",
// //         'job/company': "Steam"
// //     })
// // }, 3000);


// // database.ref('expenses').push({
// //     description: 'Rent',
// //     amount: 3400,
// //     createdAt: 123123   
// // })



// database.ref('expenses')
//     .once('value')
//     .then((snapshot) =>  {
//         const expenses = [];
//         snapshot.forEach(childSnapshot => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         });


//         console.log("expenses", expenses);
//     })

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach(childSnapshot => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     });


//     console.log("expenses", expenses);  
// })

// // database.ref().update({  
// //     stressLevel: 9,
// //     'job/company': 'Amazon',
// //     'location/city': 'Seattle'
// // });







export  { firebase, database as default };