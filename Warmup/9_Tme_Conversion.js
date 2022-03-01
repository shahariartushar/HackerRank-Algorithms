//https://www.hackerrank.com/challenges/time-conversion/problem?isFullScreen=true

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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
  // Write your code here
  let [hours, minute, secondAndFormat] = s.split(":");
  let second = secondAndFormat.slice(0, 2);
  let format = secondAndFormat.slice(2);
  let hour = parseInt(hours);

  if (format == "PM") {
    hours = (hour + 12).toString();
  } else if (format == "AM" && hour == 12) {
    hours = "00";
  }

  return hours + ":" + minute + ":" + second;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  const result = timeConversion(s);

  ws.write(result + "\n");

  ws.end();
}
