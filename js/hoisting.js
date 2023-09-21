            
// console.log(x);         // ans  7 variable can use first than after declared
// var x  
// x = 7            

// x = 10;
// let x;                   //error beacuse let or const  can not decalrtion move to top
// console.log(x);
            


// console.log(y);      //undefined beacuse variable is not assgined
// var y               //declartion
// y=7                 // intiliaztion



// console.log(x);
// let x;
// x =20;


// console.log(x);
// x = 10;                //error

// x = 10;
// console.log(x);         //ans 10;

// hello()              // ans good morining 

// function hello(){
//     console.log("good morning");      
// }


// hello1()                    // error genrated beacause curly bracket can not support hoisting
    
// {function hello1(){
//     console.log("hello world");
// }}


// hello2();                   //error genreated because arrow function can not call before intialization
                                    
// const hello2 = () => {
//     console.log("hello world");
// }


// function demo(){
//     var x;
//     x = 10;
//     console.log(x);          //10  any variable let var const only declare in function scope
// }

// demo();

// console.log(x);        //error beacuse not declare in outside of function


// function demo(){     //function scope
//     if(true){      //block scope
//         var x;
//         x = 10;
//     }
//     console.log(x);       //10
// }

// demo();


// function demo(){
//     let x;              // global scope + function scope
//     if(true){         // block scope
//         x = 10;
//     }
//     console.log(x);          //10;
// }

// demo();


// function demo(){
//     if(true){
//         let x
//         x = 10
//     }
//     console.log(x);             //error
// }

// demo();


function demo(){
    const x  = 10;
    if(true){
            
        console.log(x);
    }
       
}
demo();




