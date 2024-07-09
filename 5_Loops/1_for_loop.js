// FOR LOOP
for(let i=0; i<=10; i++)
{
    let element = i
    if(element==2)
    {
        console.log("Best no is 2")
    }
    console.log(`Number is = ${element}`)
}

//NESTED LOOP
for(let i=1;i<=10;i++)
{
    console.log(`Value of i is = ${i}`)
    for (let j = 0; j < 10; j++) {
        console.log(`Value of j = ${j}`);
        
    }
}

//  LOOPS ON ARRAY
let myArray = ["Manjeet","Shiva","Virat"]
console.log(myArray.length)
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element)
    
}



// break and continue concept same as c++