export function getSelectionSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    let len = auxiliaryArray.length;
    for (let i = 0; i < len; i++) {
        let lowest = i
        animations.push([lowest, lowest, 0]);
        for (let j = i + 1; j < len; j++) {
            animations.push([j, j, 1]);
            animations.push([j, j, 1]);
            if (auxiliaryArray[j] < auxiliaryArray[lowest]) {
                animations.push([j, lowest, 0]);
                lowest = j
            }
        }
        if (lowest !== i) {
            // Swap
            animations.push([lowest, auxiliaryArray[i], 3]);
            animations.push([i, auxiliaryArray[lowest], 2]);
            var temp = auxiliaryArray[i];
            auxiliaryArray[i] = auxiliaryArray[lowest];
            auxiliaryArray[lowest] = temp;
        }
        else {
            animations.push([i, auxiliaryArray[i], 2]);
        }
    }
    // return auxiliaryArray;
    return animations;
}