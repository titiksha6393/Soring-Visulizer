export function getQuickSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    let len = auxiliaryArray.length;
    quickSort(auxiliaryArray, 0, len - 1, animations);
    // return auxiliaryArray;
    return animations;
}
/* The main function that implements QuickSort
          arr[] --> Array to be sorted,
          low --> Starting index,
          high --> Ending index
 */
function quickSort(arr, low, high, animations) {
    if (low < high) {
        // pi is partitioning index, arr[p]
        // is now at right place
        let pi = partition(arr, low, high, animations);

        // Separately sort elements before
        // partition and after partition
        quickSort(arr, low, pi - 1, animations);
        quickSort(arr, pi + 1, high, animations);
    }
}
function partition(arr, low, high, animations) {
    // pivot
    let pivot = arr[high];
    animations.push([high, high, 0]);
    // Index of smaller element and
    // indicates the right position
    // of pivot found so far
    let i = (low - 1);

    for (let j = low; j <= high - 1; j++) {

        // If current element is smaller
        // than the pivot
        if (arr[j] < pivot) {
            animations.push([j, j, 1]);
            animations.push([j, j, 1]);
            // Increment index of
            // smaller element
            i++;
            animations.push([i, arr[j], 2]);
            animations.push([j, arr[i], 2]);
            var ptr = arr[i];
            arr[i] = arr[j];
            arr[j] = ptr;
        }
    }
    animations.push([high, high, 0]);
    animations.push([i + 1, arr[high], 2]);
    animations.push([high, arr[i + 1], 2]);
    var temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
    return (i + 1);
}
