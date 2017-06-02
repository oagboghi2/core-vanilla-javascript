// 1. What is this code going to show?
/*
let fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");

// what's in fruits?
alert( fruits.length ); // 4
*/
// 2. Let’s try 5 array operations.
/*

let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[1] = "Classics";
firstValue = styles.shift();
console.log(firstValue);
styles.unshift("Rap","Reggie");
console.log(styles);
*/
// 3. What is the result? Why?
/*
let arr = ["a", "b"];

arr.push(function() {
  alert( this );
});

arr[2](); // You will end up calling the function, executing an alert() that will show the function.
*/
// 4. Write the function sumInput() that:

//Asks the user for values using prompt and stores the values in the array.
//Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
//Calculates and returns the sum of array items.
/*
function sumInput(){
  let arr = [];

  while(true){
    let value = prompt("A number please?", 0);

    if(value === "" || value === null || !isFinite(value)) break;

    arr.push(+value);
  }

  let sum = 0;
  for(let number of arr){
    sum += number;
  }
  return sum;
}
alert(sumInput());
*/

// 5. The task is: find the contiguous subarray of arr with the maximal sum of items.

//Write the function getMaxSubSum(arr) that will find return that sum.

arr = [1, -2, 3, 4, -9, 6];
var value = 0;

function getMaxSubSum(arr){
  for(var i = 0; i < arr.length; i++){
    if(arr[i] >= 0){
      value += arr[i];
    }else{
      //console.log(i);
    }
  }
  return value;
}

getMaxSubSum(arr);//14

arr = [1,2,3];
var value = 0;

function getMaxSubSum(arr){
  for(var i = 0; i < arr.length; i++){
    if(arr[i] >= 0){
      value += arr[i];
    }else{
    }
  }
  return value;
}

getMaxSubSum(arr);//6
