export function getBubbleSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    // mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    bubbleSortHelper(array, array.length, animations);
    return animations;
}

function bubbleSortHelper(array, len, animations) {

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < (len - i - 1); j++) {
            // These are the values that we're comparing; we push them once
            // to change their color.
            animations.push([j, j + 1]);
            // These are the values that we're comparing; we push them a second
            // time to revert their color.
            animations.push([j, j + 1]);
            if (array[j] > array[j + 1]) {
                animations.push([j + 1, j]);
                let temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
                animations.push([j + 1, array[j]]);
            }
        }
    }
}