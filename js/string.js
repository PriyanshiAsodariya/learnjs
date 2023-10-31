
//concat

// let text1 = 'hello';
// let text2 = 'Priyanshi';
// let result = text1.concat(text2)
// console.log(result);                         //hellopriyanshi

// let text1 = 'hello';
// let text2 = 'Priyanshi';
// let result = text1.concat(" ",text2)
// console.log(result);                             //hello priyanshi

//---------------------------------------


//include

// let text = "Hello world, welcome to the universe.";
// let result = text.includes("welcome")
// console.log(result);                                       // return boolean value (true)

// let text = "Hello world, welcome to the universe.";
// let result = text.includes("world",7);                        // check index after word is in string or not
// console.log(result);                                         // return false

//-----------------------------------------------

//indexof

// let text = "Hello world, welcome to the universe.";
// let result = text.indexOf("welcome");
// console.log(result);                                           // index 13


// let text = "Hello world, welcome to the universe.";
// let result = text.indexOf("e");
// console.log(result);                                       //index 1

//----------------------------------------------

// startswith

// let text = "Hello world, welcome to the universe.";
// let result = text.startsWith("Hello");
// console.log(result);                                         // true

// let text = "Hello world, welcome to the universe.";
// let result = text.startsWith("Hello", 1);                     // false
// console.log(result);                                        // check position and index both 

//--------------------------------------------------

//endwith

// let text = "Hello world";
// let result = text.endsWith("world");
// console.log(result);                                            // true

// let text = "Hello world, welcome to the universe.";        // true
// let result = text.endsWith("world", 11);                 // check index of position in last position 
// console.log(result);

//----------------------------------------------

//slice

// let text = "Hello world!";
// // let result = text.slice(0, 5);                             //hello
// let result = text.slice(1, 8);                           //ello wo
// console.log(result);

// let text = "Hello world!";
// let result = text.slice(3);                                    // lo world
// console.log(result);                                           //index of 3 
                                         
// let result = text.slice(-3);                           // ans id!  // slice can accepet minus value
//-------------------------------------

//sub string

// let text = "Hello world!";
// let result = text.substring(1 , 4);
// console.log(result);                                       // ans ell

//--------------------------------------
// substr


// let text = "Hello world!";
// let result = text.substr(2 , 6);                              // llo wo
// console.log(result);                                      // ans hello  first parameter is index ans second is number of charachter


// let text = "Hello world!";
// let result = text.substr(2);                                    // llo world!
// console.log(result);

//--------------------------------------------------
//replace

// let text = "red yellow green";
// let result = text.replace("yellow", "white");
// console.log(result);                                                     //value can replace 

// //(global replace)
// let text = "Mr Blue has a blue house and a blue car";
// let result = text.replace(/blue/g, "red");
// console.log(result);                                                  // replace all blue (global replace)

//--------------------------------------------------
//replace all

// let text = "I love Cats. Cats are very easy to love. Cats are very popular."
// result = text.replaceAll("Cats","Dogs");
// console.log(result);                                             // change of all cats insted of dog

//--------------------------------------------------
//trim 

// let text = "       Hello World!        ";
// let result = text.trim();                                        // output is hello world
// console.log(result);                                            // trim can not count space 


//-------------------------------------

// split(convert in array)

// let text = "How are you doing today?";
// let result = text.split(" ");                                     // conver into array
// console.log(result);                                               // how,are,you,doing,today

// let text = "How &are&you&doing&today?";
// let result = text.split("&");                                     // conver into array
// console.log(result);                                               // how,are,you,doing,today


//------------------------------------------
//match

// let id1 = document.getElementById("id1")
// console.log(id1);
// console.log(id1.matches(".box"));                           //true    // matches can compare css selector
// console.log(id1.matches(".class"));                          // false

//-------------------------------------------
//test

// let text = "The best things in life are free"; 
// let pattern = /e/;
// let result = pattern.test(text);
// console.log(result);                                       ///

//---------------------------------------
//toLowercase

// let text = "Hello World!";
// let result = text.toLowerCase();
// console.log(result);

//------------------------------------

//uppercase

// let text = "Hello World!";
// let result = text.toUpperCase();
// console.log(result);

//------------------------------




