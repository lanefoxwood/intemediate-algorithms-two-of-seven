function diffArray(arr1, arr2) {

    return arr1
        .concat(arr2)
        .filter(val => !arr1.includes(val) || !arr2.includes(val));
  }
  
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

/*Diff Two Arrays
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.

its basically filter, but with extra steps. filter based on the contents of an array return values that are NOT in arr1 or NOT in arr2

*/

// adding comments to demonstrate my logic process:
// this function should accept two arrays as arguments. it will compare the two given arrays, then return a new array which contains elements found in one array, but not the other. in other words, the new array returned will contain the symmetric difference between the two arrays given. for example, if given the two arrays, [1,2,3] and [1,2,3,4], the function will compare the two and should return [4] because that value is only found in one array but not the other. 


// right off the bat im sensing double for loops and the indexOF but ill continue..

//I know i need to define this function:

function diffTwoArrays(array1, array2){
  //inside this function i need to do the following:
  //TODO: 1. initialize an empty array, newArray = [] to hold my values
  //TODO: 2. initialize an empty array, shortestArray = []
  //TODO: 3. initialize an empty array, longestArray = []
  let newArray =[];
  let shortestArray = [];
  let longestArray = [];
  //TODO: 4. i need to deteremine which array is the longest and shortest and assign them to the respective arrays. but there is a huge logic flaw here: what if the two arrays are the same length??? so we need to account for this with  || or 
  if(array1.length < array2.length || array1.length === array2.length){
      shortestArray = [...array1];
      longestArray = [...array2];
  } else{
      shortestArray = [...array2];
      longestArray = [...array1];
  }
  //TODO: 5. i need to loop over each value of the longestArray.
  //TODO: 6. i need to check that selected index of longestArray and see if it cannot be found within the shortestArray.
  //TODO: 7. if the result === -1, then i need to push the value into the newArray. and keep looping over this until I've checked each value of the longestArray.
  for(let i = 0; i < longestArray.length; i ++){
      if(shortestArray.indexOf(longestArray[i]) === -1){
          newArray.push(longestArray[i])
      }
  }
  //TODO: 8. return newArray as a result of running this function. 
  return newArray
};


// wait so.. if i use the "===" and compare the first two values and they aren't equal that doesn't mean that the second array doesn't contain it... so I actually need to use the indexOf or charAt and need one loop. I need to lookup the usage of these two and decide. 

//so, charAt() is a string method. so indexOf() works by returning the FIRST index where a specified value can be found, or -1 if it does not exist in the array. i think this will be the method we can use to solve this. 

// so inside this function I need to initialize the empty array,
// TODO: 1. loop over each index of the first array and put that inside the array2.indexOf(array1[i])
// so the loop looks like : 
// for(let i = 0; i < array2.length; i++){
  // array1.indexOf(array2[i]) ? null : newArray.push(array2[i])
//}

// when making the comparison, i think it would be best to find the longest array. I can find the longest array by using the .length property. 

// the shortest array should be my base array, which i compare against. so i'll essentially loop over each index of the longest one, and compare it to the shortest one. because in the case of [1,2,3] and [1,2,3,4] I check if array1.indexOf(array2[i]) because array1 in this case is the shortest. 

// so right off the bat i want to determine the shortest array, by making the comparison: 

// if(array1.length < array2.length) if that is true, that means array1 is my shortest array, and I can use it as the base array. if that is false, then array2 is actually my base array. so maybe i can do the check like...

// shortestArray = [];
// longestArray = [];
// (array1.length < array2.length) 
// ? shortestArray = [...array1]
//      longestArray = [...array2]
// : shortestArray = [...array2]
//      longestArray = [...array1]

//so now I have determined and sorted the shortest and longest. Now I can meaningfully loop over them:
/*
  for(let i = 0; i < longestArray.length; i++){
      if(shortestArray.indexOf(longestArray[i]) === -1){
          newArray.push(longestArray[i])
      }
  }
*/




// ========================================================================

// the test cases taught me that i need to loop one list, then the other. it doesn't matter the length of the lists, they both need to be checked. i need to check array1 against array2, then check array2 against array1. 

//I'm going to refactor this to just do two loops. 

function diffArray(array1, array2){
  let newArray = [];
  for(let i = 0; i < array1.length; i ++){
      if(array2.indexOf(array1[i]) === -1){
          newArray.push(array1[i])
      }
  }
  for(let i = 0; i < array2.length; i ++){
      if(array1.indexOf(array2[i]) === -1){
          newArray.push(array2[i])
      }
  }
  return newArray;
};

// so everything was NOT good with the first way i attempted to solve this problem. I way over complicated it and I relied on the test cases to teach me about it. It's clear that I didn't really understand the nature of the whole problem when I started. What i really liked that I did was that I figured out the core loop of the problem the first time around. Once I learned my mistakes, it was a simple matter of repeating the loop and changing it around a tiny amount. All good! 