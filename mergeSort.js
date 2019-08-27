//Merge sort divides an array into halves, calls itself for the two halves, and then merges the two halves.
//It consists of two functions: the mergeSort function, which takes care of partitioning the arrays,
//and the merge function, which merges the separate arrays.

function mergeSort(list) {
  if (list.length === 1) {
    return list;
  } else {
    const middleIndex = Math.floor(list.length / 2);
    let leftArray = list.slice(0, middleIndex);
    let rightArray = list.slice(middleIndex);

    leftArray = mergeSort(leftArray);
    rightArray = mergeSort(rightArray);

    return merge(leftArray, rightArray);
  }
}

function merge(leftArray, rightArray) {
  let sorted = [];
  while (leftArray.length > 0 && rightArray.length > 0) {
    const leftItem = leftArray[0];
    const rightItem = rightArray[0];
    if (leftItem > rightItem) {
      sorted.push(rightItem);
      //shift() Remove an item from the beginning of an array
      rightArray.shift();
    } else {
      sorted.push(leftItem);
      leftArray.shift();
    }
  }
  while (leftArray.length !== 0) {
    sorted.push(leftArray[0]);
    leftArray.shift();
  }
  while (rightArray.length !== 0) {
    sorted.push(rightArray[0]);
    rightArray.shift();
  }

  return sorted;
}

const list = [4, 2, 3, 1, 5,10,20];

const sorted = mergeSort(list);

console.log(sorted);
