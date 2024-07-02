

//Compresion always return boolean value


// -----------------------------------------------Basics Compresion (Compare with same datatype)---------------------------------------------
console.log(3>=10)
console.log(3>10)
console.log("Mannu"<="Mannu")
console.log(3<10)
console.log("MANJEET"!="BALIYAN")
console.log(3==10)

console.log(" ")

// ------------------------------------------------Compare with different Datatype-----------------------------------------------------------
// Here automatic typeconversion occur
console.log("2">= 1)
console.log("2"> 1)
console.log("2"< 1)
console.log("2"<= 1)
console.log("2"== 1)

console.log(" ")

// ---------------------------------------------Compare with null----------------------------------------------------------------------------

/*when we compare with null comparision operator == and other work differently
    * All comparision operator except(==) treat null == 0.
    * Where (==) operator treat null= NaN.
*/
console.log(null>0)
console.log(null>=0)
console.log(null<=0)
console.log(null<0)
console.log(null==0)

console.log(" ")

//-------------------------------------------Compare with undefined--------------------------------------------------------------------------

// Same condition as null but it's always return false. and all the operators work similarlly
console.log(undefined>0)
console.log(undefined>=0)
console.log(undefined<=0)
console.log(undefined<0)
console.log(undefined==0)

console.log(" ")
//--------------------------------------------STRICT CHECK (===)----------------------------------------------------------------------------
 // It compare both (datatype and value), where (==) compare only value.

 console.log("34"=== 34)


 // NOTE => We always avoid to compare with null and undefined bcz it's reduce the readability of our code and it's not a good practices.
