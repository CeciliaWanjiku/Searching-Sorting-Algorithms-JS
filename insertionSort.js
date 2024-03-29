//The element not in the right position is moved all the way tp where it should be
//​The current element stays the current element after swapping​, until the element is in the right position!

function insertionSort(list) {
  for (let i = 1; i < list.length; i++) {
    let currentElement = list[i];
    let j = i;

    while (j > 0 && list[j - 1] > currentElement) {
      list[j] = list[j - 1];
      j--;
    }

    list[j] = currentElement;
  }
  return list;
}

const list = [4, 2, 3, 1, 5];

const sorted = insertionSort(list);

console.log("Is it sorted?", sorted);
