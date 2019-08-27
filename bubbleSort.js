//it sorts values by comparing the subsequent values and if the number following I
// is lesser then it swaps them abd continues to do so for the entire array.
// compare subsequent items in an array
// swap if not sorted
// loop through and check
// store value being sorted
// push rearrangement.

const swap = (arr, firstIndex, secondIndex) => {
    if (arr[secondIndex] < arr[firstIndex]) {
        const temp = arr[secondIndex];
        arr[secondIndex] = arr[firstIndex];
        arr[firstIndex] = temp;
        
    }
}
const bubbleSort = (arr) => {
    let arrLength = arr.length
    do{
        for(leftIndex=0; leftIndex<arr.length; leftIndex++){
            let rightIndex = (leftIndex+1)
            if (arr[rightIndex] < arr[leftIndex]) {
                swap(arr, leftIndex, rightIndex)
            }
    
        }
    }
    while (arrLength--);
    return arr

}
console.log(bubbleSort([1,20,4,5]));
