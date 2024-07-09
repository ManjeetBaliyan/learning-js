const email="Manjeet322332" // email = ""
if(email) // By default it's assume it's true.
{
    console.log("User has email")
}
else{
    console.log("User doesn't have email")
}

/*
------------------------------  FALSEY VALUE  -----------------------------------------------
    1.false.
    2. 0.
    3. -0.
    4. BigInt 0n.
    5. null.
    6. undefined.
    7. ""(empty string).
    8. NaN.
*/
// Remain all of them are known as truthy value

/*-----------------  SURPRISING TRUTHY FUNCTION  --------------------------------------------
    1. "0" (zero written inside a string)
    2. "false" (false written inside a string)
    3. " " (space inside a string )
    4. [] (empty array)
    5. {} (empty object)
    6. function(){}  (empty function without parameter and defination of the function.
*/

// CHECKING FOR EMPTY OBJECTS
const emp ={}
if(Object.keys(emp).length===0)
{
    console.log("Object is empty")
}

//Checking for Array
const emp_id=[]
if(emp_id.length===0)
{
    console.log("Array is empty")
}

//------------------  Nullish Coalescing Operator ( ?? ) :- based on  null undefied ---------

let val1;
// val1 = 5 ?? 10 
// val1 = null ?? 10 
// val1 = undefined ?? 10  
   val1 = null ?? 10 ?? 15

console.log(val1)


/*--------------------   TERNIARY OPERATOR   ----------------------------------------------
    condition ? true : false
*/

const IcePrice=200
IcePrice <=300 ? console.log("Hurray") : console.log("So sad ")

//-------------------------------------------------------------------------------------------
/* Some Equality(==) rule in browser console

    1. false == 0 =====> true.
    2. false == "" =====> true.
    3. 0 == "" ====> true.
*/
