//https://www.hackerrank.com/challenges/mini-max-sum/problem?isFullScreen=true&h_r=next-challenge&h_v=zen

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
  // Write your code here

  // Bubble sort algorithm
  // for (let i=0;i<arr.length;i++){
  //     for(let j=0;j<arr.length-i;j++){
  //         if(arr[j]>arr[j+1]){
  //             let temp = arr[j];
  //             arr[j] = arr[j+1];
  //             arr[j+1] = temp;
  //         }
  //     }
  // }

  // Sort Ascending (Lowest to Highest)
  arr = arr.sort((a, b) => {
    return a - b;
    //return b - a; //(Highest to Lowest)
  });

  let miniSum = 0;
  let maxSum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i != 4) {
      miniSum += arr[i];
    }
    if (i != 0) {
      maxSum += arr[i];
    }
  }
  console.log(miniSum + " " + maxSum);
}

function main() {
  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  miniMaxSum(arr);
}
