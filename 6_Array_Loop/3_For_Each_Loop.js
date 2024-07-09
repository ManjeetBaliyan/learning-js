//-------------------------   FOR EACH LOOP  ------------------------------------------------

// For each loop take call back inside it.
// For each loop can't return.
// So we use filter in for each loop for return the value.

const lng=["js","java","cpp","python","ruby"]
lng.forEach( function (element) {
    console.log(`language is ${element}`)
})


// With Arrow function 

lng.forEach((element) => {
    console.log(element)
});

// By Decleration the function outside and pass the reference of that function inside the FOR EACH LOOP.

function language(items)
{
    console.log(items)
}

lng.forEach(language) // Here only give reference( language ) not executed( language() ) here.


// For each has more than one parameter 

lng.forEach((element,index,lng) => {
    console.log(element,index,lng)
});


// When a array contain a no. of objects 

const arr=[
    {
        name: "java",
        petname:"java"
    },
    {
        name: "cpp",
        petname:"c++"
    },
    {
        name: "python",
        petname:"py"
    }
]

// Here element refer the objects of the array.
arr.forEach((element) => {
    console.log(`My Language is ${element.name} and pet name is ${element.petname}.` )
});