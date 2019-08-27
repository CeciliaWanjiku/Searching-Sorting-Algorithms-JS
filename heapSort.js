// Consider k-th element of the array,:
// -- its left child is located at 2*k+1 index
// -- its right child is located at 2*k+2. index
// -- its parent is located at k/2 index

// how does heapsort work?
//build a max heap, so that the element with the greatest value is at the top.
//switch it with the last element and remove it from the heap.
//repeat steps one and two until the heap has only one element remaining.

function heapify(arr, length, i) {
  let largest = i;
  let left = i * 2 + 1;
  let right = left + 1;

  if (left < length && arr[left] > arr[largest]) {
    largest = left;
  }
  if (right < length && arr[right] > arr[largest]) {
    largest = right;
  }
  if (largest != i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, length, largest);
  }

  return arr;
}

function heapSort(arr) {
  let length = arr.length;
  let i = Math.floor(length / 2 - 1);
  let k = length - 1;

  while (i >= 0) {
    heapify(arr, length, i);
    i--;
  }

  while (k >= 0) {
    [arr[0], arr[k]] = [arr[k], arr[0]];
    heapify(arr, k, 0);
    k--;
  }
  return arr;
}

const arr = [4, 2, 3, 1, 5];

const sorted = heapSort(arr);

console.log(sorted);
