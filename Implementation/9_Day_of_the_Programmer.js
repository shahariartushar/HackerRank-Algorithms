//https://www.hackerrank.com/challenges/day-of-the-programmer/problem?isFullScreen=true

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
 * Complete the 'dayOfProgrammer' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER year as parameter.
 */

function dayOfProgrammer(year) {
    // Write your code here
    let result;
    if(year<1918){
        if(year%4==0){
            result = "12.09."; // 256-244; here, 244 is the sum of the days of first 8 months of the year   
        }
        else{
            result = "13.09."; // 256-243
        }
        
    }
    else if(year==1918){
        /*The transition from the Julian to Gregorian calendar system occurred in 1918, 
        when the next day after January 31st was February 14th. 
        This means that in 1918, February 14th was the 32nd day of the year in Russia.
        */
        result = "26.09."; // 256-230
    }
    else{
        if((year%4===0 && year%100!==0 ||  year%400===0)){
            result = "12.09.";    
        }
        else{
            result = "13.09.";
        }
        
    }
    
    return result+year;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const year = parseInt(readLine().trim(), 10);

    const result = dayOfProgrammer(year);

    ws.write(result + '\n');

    ws.end();
}
