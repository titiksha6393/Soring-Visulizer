export function getShellSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    shellSort(auxiliaryArray, animations);
    // return auxiliaryArray;
    return animations;
}
function shellSort(arr, animations) {
    let n = arr.length;

    //Start with a really large gap, and then reduce the gap until there isn't any
    //With this, the gap starts as half of the array length, and then half of that every time
    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        //Do a insertion sort for each of the section the gap ends up dividing
        for (let i = gap; i < n; i++) {
            //We store the current varible
            let temp = arr[i];

            //This is the insection sort to sort the section into order
            let j;
            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                animations.push([j, j - gap, 0]);
                animations.push([j, j - gap, 0]);
                animations.push([j, arr[j - gap], 1]);
                arr[j] = arr[j - gap];
            }
            animations.push([j, temp, 1]);
            arr[j] = temp;
        }
    }
    return arr;
}
