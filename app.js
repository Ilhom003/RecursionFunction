// Recursion functions
// let res = 0
// const sum = (n) => {
//     if (n === 1) return res += 1
//     else {
//         res += n
//         return sum(n - 1)
//     }
// }
// sum(4)
// console.log(res);

// let company = {
//     sales: [
//         { name: 'John', salary: 1000 },
//         { name: 'Alice', salary: 1600 }
//     ],
//     development: {
//         sites: [
//             { name: 'Peter', salary: 2000 },
//             { name: 'Alex', salary: 1800 },
//         ],
//         dev: [
//             { name: 'Peter', salary: 2000 },
//             { name: 'Alex', salary: 1800 },
//         ],
//         internals: [{ name: 'Jack', salary: 1300 }]
//     }
// }

// const getCalc = (company) => {
//     if (Array.isArray(company)) {
//         return company.reduce((prev, current) => prev + current.salary, 0)
//     } else {
//         let sum = 0;
//         for (const sumdep of Object.values(company)) {
//             sum += getCalc(sumdep)
//         }
//         return sum
//     }
// }
// console.log(getCalc(company));

// function calc(n) {
//     if (n == 1) {
//         return 1
//     } else {
//         return n * calc(n - 1)
//     }
// }
// console.log(calc(5));