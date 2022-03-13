//https://www.hackerrank.com/challenges/sock-merchant/problem?isFullScreen=true

'use strict';

const fs = require('fs');

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
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n, ar) {
    // Write your code here
    ar.sort(function(a, b) { // sort the array
        return a - b;
    });
    
    let uniqueArray = ar.filter((value, index, self)=>{ // make another array with no duplicates
        return self.indexOf(value) === index;
    });
    let result = 0;
    for(let i=0;i<uniqueArray.length;i++){
        let count = 0;
        
        for(let j=0;j<ar.length;j++){ // find the count for each type
            if(uniqueArray[i]==ar[j]){
                 count += 1;  
            }
        }
        
        if(count%2==0){ // sum the pairs
            result += count/2;
        }
        else if((count-1)%2==0){
            result += (count-1)/2;
        }
    }
    
    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const ar = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));

    const result = sockMerchant(n, ar);

    ws.write(result + '\n');

    ws.end();
}
