'use strict';

// Complete this algo
const binarySearch = (array, target) => {

  let n = 0;
  let lastOfRawIdx = Math.pow(2, n) - 1;

  while (target > array[lastOfRawIdx]) {
    if (lastOfRawIdx > array.length - 1) {
      lastOfRawIdx = array.length - 1;
      break;
    } else {
      n++;
      lastOfRawIdx += Math.pow(2, n);
    }
  }
  let beginingOfRowIdx = lastOfRawIdx - Math.pow(2, n) + 1;
  for (let i = beginingOfRowIdx; i <= lastOfRawIdx; i++) {
    if (array[i] === target) {
      console.log(array[i])
      return true;
    }
  }
  return false;
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch
