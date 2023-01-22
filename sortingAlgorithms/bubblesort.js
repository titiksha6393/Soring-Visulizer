export function getBubbleSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    let len = auxiliaryArray.length;
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < (len - i - 1); j++) {
            animations.push([j, j + 1]);
            animations.push([j, j + 1]);
            if (auxiliaryArray[j] > auxiliaryArray[j + 1]) {
                animations.push([j, auxiliaryArray[j + 1]]);
                animations.push([j + 1, auxiliaryArray[j]]);
                var temp = auxiliaryArray[j]
                auxiliaryArray[j] = auxiliaryArray[j + 1]
                auxiliaryArray[j + 1] = temp
            }
            else {
                animations.push([j, auxiliaryArray[j]]);
                animations.push([j + 1, auxiliaryArray[j + 1]]);
            }
        }
    }
    // return auxiliaryArray;
    return animations;
}
