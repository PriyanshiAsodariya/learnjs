
let arr = [10, 7, 67, 44, 5]
let max1 = arr[0]

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max1) {
        max1 = arr[i]
    }
}
console.log(arr);
console.log("maximum number is : ", max1);


let number = [10, 7, 67, 44, 5]

// let max = number.reduce((a, b) => a > b ? a : b)
// console.log("maximum:", max);

let max = number.reduce((acc,value)=>{
    if(acc>value){
        return acc;
    }else{
        return value;
    }
})
console.log("maximum:",max);


//------------------------------------------



let arr1 = [10, 7, 67, 44, 5]
let min = arr1[0]

for (let i = 0; i < arr1.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
    }

console.log(arr1);
console.log("minimum number is: ", min);

let arr2 = [10, 7, 67, 44, 5]

let ans = arr2.reduce((acc,value)=>{
    if(acc<value){
        return acc
    }else{
        return value
    }
})

console.log("minimum:", ans);

//---------------------------------------------


let array = [10, 5, 22, 3, 45]

for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j<arr1.length; j++) {
        if (array[i] > arr[j]) {

            temp = array[i];
            array[i] = array[j]
            array[j] = temp;
        }
    }
}
console.log("asecnding element", array);


let array1 = [10, 5, 22, 3, 45]

array1.sort((a, b) => a - b)
console.log("asecnding: ", array1);

//=======================================

let num = [10, 5, 22, 3, 45]

for (let i = 0; i<num.length; i++) {
    for (let j = i + 1; j<num.length; j++) {
        if (num[i] < num[j]) {

            temp = num[i]
            num[i] = num[j]
            num[j] = temp
        }
    }
}
console.log("decending element:", num);

let num1 = [10, 5, 22, 3, 45]

num1.sort((a, b) => b - a)
console.log("descending: ", num1);
