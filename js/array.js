// let book1 = 'maths'
// let book2 = 'science'
// let book3 = 'computer'
// let book4 = 'english'

// console.log(book3);      // ans computer
//----------------------------------------------

// let book = new Array('maths' , 'science', 'computer', 'english');
// console.log(book[3]);            //ans english

//-------------------------------------

// let book = ['maths' , 'science', 'computer', 'english']
// book[3] = 'bio';
// console.log(book[3]);                    // ans bio            

//--------------------------------------


// let book = ['maths' , 'science', 'computer', 'english']

// console.log(book);                   // ans full array

//----------------------------------


// let book = ['maths' , 'science', 'computer', 'english']

// console.log(book.length);               // ans total length of array
//------------------------------------------




// add
// let book1 = ['maths' , 'science', 'computer', 'english']

// book.push('hindi')                              

// console.log(book);                               // add in last
//----------------------------------------------

// let book = ['maths' , 'science', 'computer', 'english']

// book.unshift('hindi')                              

// console.log(book);                                    // add in first

//-----------------------------------------------------

// let book = ['maths' , 'science', 'computer', 'english'];

// book.splice(3,  0 , 'bio')
                        
// console.log(book);                                      // add in 3rd index of bio

//-----------------------------------------


// remove
// let book = ['maths' , 'science', 'computer', 'english']

// book.pop();

// console.log(book);                                // remove last element in array
//-----------------------------------------------

// let book = ['maths' , 'science', 'computer', 'english']

// book.shift()

// console.log(book);                                  // remove first element in array
//----------------------------------------------

// let book = ['maths' , 'science', 'computer', 'english'];

// book.splice(1,2)

// console.log(book);                               // remove 2 elemnt from index of 1

//-----------------------------------



// let text = 'how are you'

// let ans = text.split(' ')

// console.log(ans);                                    // convert string into array

//---------------------------------------------

//(indexof)
// task;

// let book = ["maths" , "science", "computer", "english"];

// let position = book.indexOf("maths");

// console.log(position);                 // ans index of 0

//---------------------------------------

//(lastindex)
// let book =["maths" , "science", "computer", "maths"]

// let poistion = book.lastIndexOf("maths");     //count index of last to first
                                            
// console.log(poistion);                     // ans index of 3

// let position = book.lastIndexOf("maths",2);

// console.log(position);                          // ans index of 0

//--------------------------------------------


//(map)
// let book =["maths" , "science", "computer", "maths"]

// // console.log(book.length);
// // for( let i=0; i<book.length; i++){
// //     console.log(book[i]);
// // }

// book.map ((value,index) => {
//     console.log(index + "--" + value );        //index --- value
// })

// let arr = [45, 23,21]
// let a = arr.map((value,index,array)=>{
//     console.log(value,index,array)
//     return value + 1                     //45+1, 23+1, 21+1;//  array return
// })
                                    
// console.log(a)                        // ans new array created in value increasing;
//------------------------------------------

// (filter)
// let arr1 = [24 , 554, 70, 3 , 8 , 5 , 3 , 10]

// let ans  = arr1.filter((v,i)=> v<10)
                    
// console.log(ans);              // ans is less than 10 value[3,8,5]

//--------------------------------------

// (reduce)

// let arr2 = [1,2,3,4,5]

// let newarr = arr2.reduce((acc,v,i)=> acc + v ,0)
                                        
// //array return 
// console.log(newarr);                        //15

//-------------------------------------

//(every)

// let age = [19 , 24 , 18 , 10]

// let ans = age.every((age) => age>18);    // all condition are true than ans will come ture

// console.log(ans);                 // ans false //beacuse only one condtion is true

//-----------------------------------


//(include)

// let book_name =['maths', 'sci', 'hindi', 'english']
// let ans1  = book_name.includes('hindi')        // check the element in array or not
// console.log(ans1);                         //ans true

//-------------------------------

//(findindex)

// let age = [10,24,33,18,19]

// let ans = age.findIndex((age)=> age>=18)    //ans index of//  1 return undex

// console.log(ans);             // they check in conditon in one true than they not check to more

//---------------------------------------

//(fill)

// let book = ['maths', 'science', 'computer']
// book.fill('bio');
// console.log(book);                 //ans [bio,bio,bio] value can change in  full array

//--------------------------------------

//(sort)

let nme = ['rahul','aman', 'karan']          //[aman,karan,rahul]
nme.sort()
console.log(nme);                           // a to z vise sorting

//------------------------------------

//(reverse)

let fun = ['rahul', 'aman', 'karan']    //[karan ,aman ,rahul]
fun.reverse()
console.log(fun);                    // reverse print











