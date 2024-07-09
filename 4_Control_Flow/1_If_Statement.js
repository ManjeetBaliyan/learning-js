// TOTAL CONCEPT SAME AS C++

const user_login =true
const debit_card=true
const loginbyGoogle=true
const loginbyemail=false
if(user_login && debit_card)
{
    console.log("You are eligible for shoping ")
}
else{
    console.log("You are not eligible for shopping")
}

if(loginbyGoogle || loginbyemail)
{
    console.log(`You are login by ${loginbyGoogle}`)
}