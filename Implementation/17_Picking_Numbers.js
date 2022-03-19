//https://www.hackerrank.com/challenges/picking-numbers/problem?isFullScreen=true

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
 * Complete the 'pickingNumbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */
function find_counts(a, number){ // find number count from the array
    let count = 0;
    
    for(let i=0;i<a.length;i++){
        if(number==a[i]){
            count += 1;  
        }

    }
    return count;
}

function pickingNumbers(a) {
    // Write your code here
    let result = 0;
    
    // find duplicates
    let duplicates = [...new Set(a.filter((value, index, self) => self.indexOf(value) !== index))];
    
    if(!duplicates.length){
        return 2;
    }
    
    for(let i=0;i<duplicates.length;i++){
        let temp = find_counts(a, duplicates[i]);

        let preCount = find_counts(a, duplicates[i]-1); // previous number
        let postCount = find_counts(a, duplicates[i]+1); // following number

        if(preCount>=postCount){ // longest subarray length finding
            temp += preCount;
        }
        else{
            temp += postCount;
        }
        
        if(temp>result){
            result = temp;
        }
    }
    
    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const result = pickingNumbers(a);

    ws.write(result + '\n');

    ws.end();
}
