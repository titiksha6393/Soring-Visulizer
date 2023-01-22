export function getInsertionSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    let len = auxiliaryArray.length;
    insertionSort(auxiliaryArray, len, animations);
    // return auxiliaryArray;
    return animations;
}
function insertionSort(arr, n, animations) {
    let i, key, j;
    for (i = 1; i < n; i++) {
        key = arr[i];
        j = i - 1;

        /* Move elements of arr[0..i-1], that are 
        greater than key, to one position ahead 
        of their current position */
        while (j >= 0 && arr[j] > key) {
            animations.push([i, j, 0]);
            animations.push([i, j, 0]);
            animations.push([j + 1, arr[j], 1]);
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        // animations.push([j + 1, i, 0]);
        // animations.push([j + 1, i, 0]);
        animations.push([j + 1, key, 1]);
        arr[j + 1] = key;
    }
} 
