
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

const dupArr = (arr2) => {
    for (i = 0; i < arr2.length; i++) {
        for (j = i + 1; j < arr2.length; j++) {
            if (arr2[i] === arr2[j]) {
                for (k = j; k < arr2.length; k++) {
                    arr2[k] = arr2[k + 1]
                }
                arr2.length--;
            }
        }
    }
    console.log(arr2);

}
// dupArr(arr2);

//-------------------------------------------------