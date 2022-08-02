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