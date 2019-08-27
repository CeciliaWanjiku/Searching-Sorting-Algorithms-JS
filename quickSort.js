//The way quicksort works, is by choosing a ​pivot​ (an element in the array, often random),
// and check whether values in the array are higher or lower than that pivot.
// The values lower than the pivot should be on the​ ​left side, and the values higher than the pivot should be on the right side!

function quickSort(list) {
  if (list.length <= 1) {
    return list;
  } else {
    const left = [];
    const right = [];
    const sorted = [];
    const pivot = list.pop(); // we're picking the last item to act as the pivot
    const length = list.length;

    for (let i = 0; i < list.length; i++) {
      if (list[i] <= pivot) {
        left.push(list[i]);
      } else {
        right.push(list[i]);
      }
    }

    return sorted.concat(quickSort(left), pivot, quickSort(right));
  }
}

const list = [4, 2, 3, 1, 5];

const sorted = quickSort(list);

console.log(sorted);
