// FOR OF LOOP
// It automatically find the end, start point i.e. size of array, It Automatically increase the value of iteration.

// Over the Array
const arr=[1,2,3,4,5]
for (const i of arr) {
    console.log(i)
}

const arr1=["Manjeet","virat","shiva"]
for (const j of arr) {
    console.log(arr1[j])
}

//Over the string
const call="Manjeet"
for (const k of call) {
    console.log(`Every letter of the name is ${k}`)
}



/*------------------------   MAPS   -------------------------------------------------------- 
    ==> Maps are similler to Array but it doesn't repeat the value i.e. all the value are    
        unique inside the map.
    ==> It return the element in that sequence in which they are stored.
    ==> map.operation(key,value)
*/

const map = new Map()
map.set('IN','India')
map.set('FR','France')
map.set('USA','United State Of America')
map.set('IN','India') // only one time india is print in output bcz it has unique value.

console.log(map)

// FOR OF loop on MAP
for (const [key,value] of map) // For seprate value of key and value.
    {
    console.log(key,':-',value)
    }


// FOR OF LOOP Over the Objects

const obj={
    game1: "NFS",
    game2:"GTA"
}
for (const [key , value] of obj) 
    {
    // This Method is not applicable over the objects. For Objects we use the FOR IN LOOP.
        console.log(key,':-',value)
    }