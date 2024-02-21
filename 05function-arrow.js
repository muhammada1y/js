// const user = {
//     name:"asd",
//     email:"asd@gmail.com",
//       messageToUser:function(){
//         // 'this' is show the current content
//         console.log(`${this.name} ap agaya hay websit ma`);
//         console.log(this)
//       }
     
// }

// user.messageToUser();
            //comment change user name
// user.name = "dsa"
// user.messageToUser();

          //comment  if i can use "this" in globle it show empty object
// console.log(this);

//can "this" is use in function
// function ali(){
  // const name = "asds"
  // console.log(this.name);
//never use "this" in function   
// }
// ali()
// function
function f1(){

}


// arrow function

const arrow = ()=>{

}
//second type

const arrow2 = (num1,num2)=>(console.log("sum of numbers",num1 + num2))
// arrow2(1,4)

// third type

((n1,n2)=>{console.log(`this is function${n1,n2}`);})(2,3);

 ((num1,num2)=>{console.log(`sum of numbers ${num1+num2}`);})(1,2)  


 //callback function
   // function is render as aurgument in function is called callback function
 function hello(){
   return console.log("hello this is number");
 }


 function num(num1,num2){
      const result = num1 + num2
      if(result === Number) {
        hello()
      }
 }

 num(12,23,hello())