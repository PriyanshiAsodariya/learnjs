
let arr = [10, 7, 67, 44, 5]
let arr2 = [10, 24, 10, 5, 67]

const maxArr = (arr) => {
    let max1 = arr[0]

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max1) {
            max1 = arr[i]
        }
    }
    console.log(arr);
    console.log("maximum number is : ", max1);
}
// maxArr(arr)

//------------------------------------------------


let number = [10, 7, 67, 44, 5]

let max = number.reduce((acc, value) => {
    if (acc > value) {
        return acc;
    } else {
        return value;
    }
})
console.log("maximum:", max);


//------------------------------------------



// let arr1 = [10, 7, 67, 44, 5]

const minArr = (arr) => {
    let min = arr[0]

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
    }
    console.log(arr);
    console.log("minimum number is: ", min);
}

// minArr(arr1)



// let arr = [10, 7, 67, 44, 5]

let ans = arr.reduce((acc, value) => {
    if (acc < value) {
        return acc
    } else {
        return value
    }
})

console.log("minimum:", ans);

//---------------------------------------------


// let array = [10, 5, 22, 3, 45]

const sortArr = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (array[i] > arr[j]) {

                temp = arr[i];
                arr[i] = arr[j]
                arr[j] = temp;
            }
        }
    }
    console.log("asecnding element", array);

}
// sortArr(arr)



let array1 = [10, 5, 22, 3, 45]

array1.sort((a, b) => a - b)
console.log("asecnding: ", array1);

//=======================================

// let num = [10, 5, 22, 3, 45]

const decArr = (arr) => {

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {

                temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    console.log("decending element:", num);
}

// decArr(arr);


let num1 = [10, 5, 22, 3, 45]

num1.sort((a, b) => b - a)
console.log("descending: ", num1);
//===========================================

// arr.reverse()
// console.log(arr);

//(reverse)

//-------------------------

const revArr = (arr2) => {
    newArr = [];
    for (let i = arr2.length - 1; i >= 0; i--) {
        newArr.push(arr2[i])
    }
    console.log(newArr);
}
// revArr(arr2)

//---------------------------

//(sum)
const sumArr = (arr2) => {
    let sum = 0;
    for (let i = 0; i < arr2.length; i++) {
        sum = sum + arr2[i]
    }
    console.log("sum is:", sum);
}
// sumArr(arr2)

//---------------------------------

//(average)

const aveArr = (arr2) => {
    let sum = 0;
    for (let i = 0; i < arr2.length; i++) {
        sum = sum + arr2[i]
    }
    console.log("average is:", sum / arr2.length);
}

// aveArr(arr2);

//----------------------------------

//(check element)

const checkelem = (arr2, elem) => {
    let temp;
    for (i = 0; i < arr2.length; i++) {
        if (arr[i] === elem) {
            temp = elem;
            break;
        }
    }
    if (temp) {
        console.log(temp + "is available");
    } else {
        console.log(elem + "is not avialble");
    }
}

// checkelem(arr2,99);

//------------------------------------------

// const dupArr = (arr2) => {
//     for (i = 0; i < arr2.length; i++) {
//         for (j = i + 1; j < arr2.length; j++) {
//             if (arr2[i] === arr2[j]) {
//                 for (k = j; k < arr2.length; k++) {
//                     arr2[k] = arr2[k + 1]
//                 }
//                 arr2.length--;
//             }
//         }
//     }
//     console.log(arr2);

// }
// // dupArr(arr2);

let arr3 =[5,6,7,8,7,9]

const dupArray = (arr3) =>{

    let newArr =[];

    arr3.map((v)=>{
        if(!newArr.includes(v)){
            newArr.push(v)
        }
    })
    console.log(newArr);
    
}

dupArray(arr3);

//-------------------------------------------------

//(merge two array in new array)

let data1 = [1,2,3,4,5]
let data2 = [10,20,30,40,50]
let data3 = []

for(let i=0; i<data1.length; i++){
    data3[i] = data1[i]
}
for(let i=0; i<data2.length; i++){
//   console.log( [data1.length+i]);
    data3[data1.length+i] = data2[i]
    
}

console.log(data3);

//----------------------------------------------------

//(split array into two array)

let data = [1,2,3,'A','B','C', 4,5,6, 'D','E']
let stingArr = []
let numArr = []

// data.forEach(value => {
// //     console.log(value);
// //    console.log( typeof(value));

//     if(typeof(value) === 'string'){
//         stingArr.push(value)
//     }

//     if(typeof(value) === 'number'){
//         numArr.push(value)
//     }
// });

// console.log(stingArr);
// console.log(numArr);



    let num = data.filter((v)=>typeof(v)=== 'number')
    let string = data.filter((v)=>typeof (v)=== 'string') 

    console.log(num);
    console.log(string);

//----------------------------------------
//(right rotate)
let arr1 = [1,2,3,4,5]        //[3,4,5,1,2]

const rotatArr = (arr1,n)=>{

    for(i=0; i<n; i++){
        let elem = arr1.pop();
        arr1.unshift(elem)
    }
    console.log(arr1);
}
rotatArr(arr1,3)

//-----------------------------------

//(left rotate)

 let array = [1,2,3,4,5]      // [4,5,1,2,3]

 const rotatArr1 = (array,n)=>{

    for(i=0; i<n; i++){
        let elem = array.shift();
        array.push(elem)
    }
    console.log(array);
}
rotatArr1(array,3)
//--------------------------


let a1 = [1,20,33,4,5]
let a2 = [1,20,33,4,6]

const largest = (a1) =>{
    let ans = a1.sort((a,b) => b-a)
    console.log(ans)

    console.log(ans[1]);
} 
// largest(a1);
//----------------------------------

const smallest = (a1,k) =>{
   let ans = a1.sort((a,b) => a-b)
   console.log(ans[k-1]);
}
// smallest(a1,3)
//------------------------

const median = (a1) =>{

    let array = a1.sort((a,b)=>a-b)
    console.log(array);
    let median;
    
    let first = Math.floor(array.length/2-1)
    let second = Math.floor(array.length/2)

    if(array.length % 2 === 0){
        median = (first + second)/2

        console.log(median);

    }else{
        let ans = Math.floor(array.length/2)
        median =  array[ans]

        console.log(median);
    }
}
median(a1);
//---------------------------------

const compareArray = (a1,a2) =>{
   
    if(a1.length != a2.length){
        return false;
    }else{
        for(let i=0; i<a1.length; i++){
            if(a1[i] != a2[i]){
                return false
            }
        }
        return true; 
    }
}
// let result = compareArray(a1,a2)

//     if(result){
//         console.log("both are equal");
//     }else{
//         console.log("both are not equal:");
//     }
//-----------------------------------------
//(occurance of first and last)
let array2 = [1,2,3,3,3,4]

let result  = array2.indexOf(3)
console.log("first index of occurance",result);

let result1 = array2.lastIndexOf(3)
console.log("last index of occurance",result1);
//---------------------------------------------

let firstindex = -1;
let lastindex = -1
const firstoccurance = (a2,target) =>{
    for(let i=0; i<a2.length; i++){
        if(a2[i] === target && firstindex === -1){
            firstindex = i;
        }
        if(a2[i] === target && firstindex != -1){
            lastindex = i;
        }
    }
    console.log(" first index: " + firstindex + " second index: " + lastindex);
}
firstoccurance(array2,3)
//--------------------------------






