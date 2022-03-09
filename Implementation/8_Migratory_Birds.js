//https://www.hackerrank.com/challenges/migratory-birds/problem?isFullScreen=true

"use strict";

const fs = require("fs");

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
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(arr) {
  // Write your code here
  let unlikeArray = arr.filter((item, i, ar) => ar.indexOf(item) === i);
  // Sort Ascending (Lowest to Highest)
  unlikeArray = unlikeArray.sort((a, b) => {
    return a - b;
    //return b - a; //(Highest to Lowest)
  });
  let countArray = [];

  for (let i = 0; i < unlikeArray.length; i++) {
    countArray[i] = 0;
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < unlikeArray.length; j++) {
      if (arr[i] == unlikeArray[j]) {
        countArray[j] += 1;
      }
    }
  }

  let max = Math.max.apply(null, countArray);
  let index = countArray.indexOf(max);
  let result = unlikeArray[index];

  return result;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const arrCount = parseInt(readLine().trim(), 10);

  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  const result = migratoryBirds(arr);

  ws.write(result + "\n");

  ws.end();
}
