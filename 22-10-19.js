// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.




// From: https://www.codewars.com/kata/563e320cee5dddcf77000158/javascript

//parameters: you will get a number as input, the array will never be empty
//returns: average of the array reduced to the lowest nearest integer
//examples: getAverage([2,2,2,2]),2)
// getAverage([1,2,3,4,5,]),3);
// getAverage([1,1,1,1,1,1,1,2]),1)


function getAverage(array){
    //sum everything first
    const initialValue = 0;
    const sumWithInitial = array.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    );
    // sum divided by total numbers in array, down the the lowest integer
      let average = Math.floor(sumWithInitial/array.length)
    //return answer
      console.log(average)
    
    }
    getAverage([2,2,2,2])
    getAverage([1,2,3,4,5,])
    getAverage([1,1,1,1,1,1,1,2])