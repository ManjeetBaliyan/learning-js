const mc_heroes = ["thor", "ironman", "Spiderman"];
const dc_heroes = ["superman", "batman", "joker"];

mc_heroes.push(dc_heroes);
console.log(mc_heroes); // Here array can't merge. First array take the second array as an element bcz in JAVASCRIPT array take every thing so it take 2nd array as an element.
console.log(mc_heroes[3][2]); //as an element.

// Combine two ARRAY by using spread[... arr1, ...arr2, ....................... , ...arrN] method.
const All_heroes =[...mc_heroes, ...dc_heroes]
console.log(All_heroes)

const confused_array=[1,2,[4,6],7,3,[4,9,[0,6,[1,3,8]]]]
const simple_array = confused_array.flat(Infinity) // Flat remove all the nested or inside [](square brackets)
console.log(simple_array)

console.log(Array.isArray("Naman")) // check given data is array or not.
console.log(Array.from("Naman")) // Make given data into a array.

//Important
console.log(Array.from({name : "Akki"})) // it can't make array from a object directly here we define who will make array (key or value).

// Making array from many others variables.
let score1 = 1234
let score2 = 322
let score3 =987
console.log(Array.of(score1,score2,score3))