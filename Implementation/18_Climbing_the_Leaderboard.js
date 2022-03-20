//https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem?isFullScreen=true

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
 * Complete the 'climbingLeaderboard' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY ranked
 *  2. INTEGER_ARRAY player
 */

function search(s, a, i, j, r) {
  // find the position
  if (j - i <= 1) {
    if (a > s[i]) {
      return r[s[i]] - 1 > 0 ? r[s[i]] - 1 : 1;
    } else if (a == s[i]) {
      return r[s[i]];
    } else if (a > s[j]) {
      return r[s[i]] + 1;
    } else if (a == s[j]) {
      return r[s[j]] == undefined ? r[s[j - 1]] : r[s[j]];
    } else {
      return r[s[j]] == undefined ? r[s[j - 1]] + 1 : r[s[j]] + 1;
    }
  }
  var mid = Math.floor(i + (j - i) / 2);

  // find the position using recursion
  if (s[mid] < a) {
    return search(s, a, i, mid, r);
  } else {
    return search(s, a, mid, j, r);
  }
}

function climbingLeaderboard(ranked, player) {
  // Write your code here

  let result = [];
  var ranks = new Array();
  var rank = 1;
  ranks[ranked[0]] = rank;
  for (var j = 1; j < ranked.length; j++) {
    if (ranked[j] != ranked[j - 1]) {
      rank++;
      ranks[ranked[j]] = rank;
    }
  }

  // binary search
  for (var j = 0; j < player.length; j++) {
    result[j] = search(ranked, player[j], 0, ranked.length, ranks);
  }

  // return result;
  return result;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const rankedCount = parseInt(readLine().trim(), 10);

  const ranked = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((rankedTemp) => parseInt(rankedTemp, 10));

  const playerCount = parseInt(readLine().trim(), 10);

  const player = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((playerTemp) => parseInt(playerTemp, 10));

  const result = climbingLeaderboard(ranked, player);

  ws.write(result.join("\n") + "\n");

  ws.end();
}
