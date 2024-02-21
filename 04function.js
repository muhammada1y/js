//this is function syntax

function nameFoFunction(perameters,perameters2){

}

//call to function 
//name is refernces namd () call to  function
nameFoFunction()



function add(p1,p2,p3){
   let addNum = p1 + p2 + p3
   return addNum
}
// add(1,3,6);

// if funtion call form var
let addNum = add(1,3,6)
// console.log(addNum)




function userLogin(user){
    if(user === undefined){
        let users = "enter your data"
        return users
    }
    let users = `yes ${user} is login`
   return users
}

// console.log(userLogin("asd"))

//passing arry in function

function numbers(num1,num2,...num){
  return num
}
// console.log(numbers(122,3443,23431,234234,4342));


//object rap
function result(num){
  if(num > 100){
    console.log("its big number");
  }
  else if (num >= 75){
    console.log("u tag b+");
  }else if(num >= 45){
    console.log("pass");
  }else{
    console.log("fail");
  }}

let aliResult =  result(75)
//this is muhammed ali khan function maker and uiuaskdj