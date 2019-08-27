linearSearch = (array, value) => {
    for(let i = 0; i < array.length; i++) {
        if(array[i] === value) {
            return `value found at index ${array[i]}`
        }

    }
    return "Value not found"
}

console.log(linearSearch([1,3,4,5], 4));