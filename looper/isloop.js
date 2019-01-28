'use strict';

//Complete this algo
const isLoop = (linkedlist) => {
  let slowFrog = linkedlist.head;
  let fastFrog = linkedlist.head;

  while (fastFrog.next !== null) {
    fastFrog = fastFrog.next.next;
    slowFrog = slowFrog.next;

    if (fastFrog.value === slowFrog.value) {
      return true;
    }
  }
  return false;
};


/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop
