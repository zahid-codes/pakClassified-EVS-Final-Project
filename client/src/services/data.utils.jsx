// // services/data.utils.js

// export const getCategories = async () => {
//     try {
//         const response = await fetch("http://localhost:5000/api/categories", {
//             method: "GET",
//             headers: {
//                 "Content-Type": "application/json",
//                 token: "YOUR_TOKEN_HERE", // Replace with your token
//             },
//         });

//         if (!response.ok) {
//             throw new Error("Network response was not ok");
//         }

//         const data = await response.json();
//         console.log("Data received:", data); // Log data to check structure
//         return data; // Ensure you return the full data
//     } catch (error) {
//         console.error("Error fetching categories:", error);
//         return null; // Return null or handle error appropriately
//     }
// };


// // export const getCategories = () => {
// //     fetch("http://localhost:5000/api/categories", {
// //         method: "GET",
// //         headers: {
// //           "Content-Type": "application/json",
// //           token:
// //             "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzFkMTg2YjYwZDJhYTAwZGJiOWJmMjEiLCJpYXQiOjE3MzA1NTk1NzcsImV4cCI6MTczMDU2MzE3N30.KE-8oisB4xHIZ_NAypI-pkdkrvHd4YjerciRgDw_6as",
// //         },
// //       })
// //         .then((response) => response.json())
// //         .then((data) => {
// //           console.log(data);
// //           return data;
// //         })
// //         .catch((error) => console.error("Error fetching data:", error));
// // }

// // module.exports = { getCategories }