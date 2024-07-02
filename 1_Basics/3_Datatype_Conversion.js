/*
    We can convert any datatype into another datatype.

    Syntax => let variable_name = Datatype( pre_variable )  

##   First letter of Datatype in syntax should be capital.

 */

// ------------------------------------------------------Conversion into Number--------------------------------------------------------------
    let score ="33"
    console.log(typeof score)

// Datatype conversion => string into Number
    let result= Number(score)
    console.log(typeof result)
    console.log(result)

/*
    --> "33" => 33.
    --> "33abc" => NaN (Not a number).
    --> null => 0.
    --> undefind => NaN.
    --> true => 1; false => 0.
    --> "Manjeet" => NaN.

 NaN is also a unique type number.
*/

// ----------------------------------------------Convert into Boolean datatype --------------------------------------------------------------

    let win=1
    console.log(win)
    console.log(typeof win)

// Number Convert into boolean
    let InBoolean= Boolean(win)
    console.log(typeof InBoolean)
    console.log(InBoolean)

/*
    --> 1 => true; 0 => false.
    --> number => true.
    --> "" => false.
    --> "manjeet" => true.
    --> "21abc" => true.
    --> null => false.
    --> undefined => false.

*/

//-------------------------------------------------------- Convert into string---------------------------------------------------------------
  let captain= 33
  let InString= String(captain)
  console.log(InString)
  console.log(typeof InString)


  //***********************************************___OPERATION_____*************************************************************************

  let num=5
  let negative = -num
  console.log(negative)
  /*
    Some other operation exist in javascript
    --> cosole.log(2+1)
    --> cosole.log(2-1)
    --> cosole.log(2*1) ; Power --> Console.log(2**3)  2 ki power 3
    --> cosole.log(2/1) 
    --> cosole.log(2%1)
  */

// String Concatenation

let say ="hello"
let name=" manjeet"
let combine= say + name
console.log(combine)

// Some complex concatenation

 console.log("1"+3)  // Work as String concatenation
 console.log(1+"3"+6) // Work as String concatenation
 console.log(1+"4")   // Work as String concatenation

 console.log(1+4) //Work as Mathematical operation

 console.log(1+3+"5") // Work as Mathematical operation first then concatenate 5 bcz Mathematical occur first.
 console.log("1"+5+7) // Work as string concation entirely bcz it occur first.

 console.log((((3+4)*9)%6)/3) // If we use multiple operator expression for best practice use parenthesis.

 let age=32
console.log(++age) //pre increment
console.log(age++) //post increment


/*
    LINK FOR MORE KNOWLEDGE
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
*/ 