https://www.hackerrank.com/challenges/plus-minus/problem?isFullScreen=true

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;
    
    for(let i=0; i<arr.length; i++){
        if(arr[i]>0){
            positiveCount += 1;
        }
        else if(arr[i]<0){
            negativeCount += 1;
        }
        else if(arr[i]===0){
            zeroCount += 1;
        }
    }
    
    let positiveProportion = positiveCount/arr.length;
    let negatigeProportion = negativeCount/arr.length;
    let zeroProportion = zeroCount/arr.length;
    
    console.log(positiveProportion.toFixed(6));
    console.log(negatigeProportion.toFixed(6));
    console.log(zeroProportion.toFixed(6));

}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
