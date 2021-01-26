function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
//console.log(countup(5));


//Explanation
//returns empty array when n is less than 1. This sets the base for when the loop (recursion) should stop.
function countUpBase(n) {
  if (n < 1) {
    return "Base reached. n is less than 1.";
  } else {
    return "Base not reached. n is greater than 1. Function will continue."
  }
}

//uncomment to test
//countUpBase(0);
//countUpBase(5);

//Recursion
//Now we setup the recursion. Recursive functions are functions that simply call themselves when the base is not true/false and continue to call themselves until the base is reached, similar to a loop (n.length; i++ or n; i--).
function countUpRecursion(n) {
  if (n < 1) {
    return "Base reached. n is less than 1. End Function. ";
  } else {
    console.log("Base not reached. n is greater than 1. Function will continue. Begin Recursion " + n);
    return countUpRecursion(n - 1) + n; // returns all numbers greater than n in ascending order. Hence Counting Up.
  }
}

//countUpRecursion(0);
//countUpRecursion(5);

//Now we will push each n value into an array using recursion.

function countUp(n) {
  if (n < 1) {
    return []; //returns empty array if base value (n) is greater than 1.
  } else {
    const countUpArray = countUp(n - 1); //initializes variable with value of (n - 1)
    countUpArray.push(n); //adds (pushes) value of (n - 1) to end of array
    return countUpArray; //returns completed array equal to base.
  }
}

//uncomment to test
//countUp(0);
//countUp(5);

//Now we will create a recursive function that counts down and add that to an array.
//There are numerous ways to do this which I will show.

//this first way uses the a simliar approach as the countUp function but changes the way the value is added to the array. Using unshift(n) we add the value to the beginning of the array instead of at the end like when using push(n).
function countDown(n) {
  if (n < 1) {
    return [];
  } else {
    const countDownArray = countDown(n - 1);
    countDownArray.unshift(n);
    return countDownArray;
  }
}

//countDown(0);
//countDown(5);

//This way uses arr.splice instead of unshift
function countDown2(n) {
  if(n < 1) {
    return [];
  } else {
    const countDownArray2 = countDown2(n - 1);
    countDownArray2.splice(0,0,n);
    return countDownArray2;
  }
}

//countDown2(0);
//countDown2(5);

//the next few ways use ternary operators
//using concatenation
function countdownTernConcat(n) {
  return (n < 1) ? [] : [n].concat(countdownTernConcat(n -1));
}

//countdownTernConcat(0);
//countdownTernConcat(5);

//ternary only
function countdownTern(n) {
  return (n < 1) ? [] : [n, ...countdownTern(n - 1)];
}

//countdownTern(0);
//countdownTern(5);
