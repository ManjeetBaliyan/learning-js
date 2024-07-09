//-----------------------   FOR IN LOOP   ---------------------------------------------------

const obj={
    ja:"javascript",
    cpp:"C++",
    html: "Hyper text markup language",
    rb:"Ruby",
    swift:"Swift"
}

// For Print Key
for (const key in obj) {
    console.log(key)
}

console.log(" ")

//For print the value of key
for (const key in obj) {
    console.log(obj[key])
    
}

//-----------------------------  OVER THE ARRAY ---------------------------------------------

const arr=["js","c++","java","python","ruby"]
for (const key in arr) {
    console.log(key) // It return the key(Index) no. of array not the value .It's the major difference between the FOR IN and FOR OF Loop.
}

//for value 
for (const key in arr) {
    console.log(arr[key]) // 
}

//------------------------   OVER THE MAPS   ------------------------------------------------

const map = new Map()
map.set('IN','India')
map.set('FR','France')
map.set('USA','United State Of America')
map.set('IN','India')

for (const key in map) {
    console.log(key) // Map are not itterable so it doesn't return anything.
}