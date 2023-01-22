export function getHeapSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    heapSort(auxiliaryArray, animations);
    // return auxiliaryArray;
    return animations;
}
// To heapify a subtree rooted with node i which is
// an index in arr[]. n is size of heap
function heapSort(auxiliaryArray, animations) {
    var N = auxiliaryArray.length;

    // Build heap (rearrange array)
    for (let i = Math.floor(N / 2) - 1; i >= 0; i--)
        heapify(auxiliaryArray, N, i, animations);

    // One by one extract an element from heap
    for (let i = N - 1; i > 0; i--) {
        // Move current root to end
        animations.push([0, i, 0]);
        animations.push([0, i, 0]);
        animations.push([0, auxiliaryArray[i], 2]);
        animations.push([i, auxiliaryArray[0], 2]);
        var temp = auxiliaryArray[0];
        auxiliaryArray[0] = auxiliaryArray[i];
        auxiliaryArray[i] = temp;

        // call max heapify on the reduced heap
        heapify(auxiliaryArray, i, 0, animations);
    }
}
function heapify(auxiliaryArray, N, i, animations) {
    var largest = i; // Initialize largest as root
    var l = 2 * i + 1; // left = 2*i + 1
    var r = 2 * i + 2; // right = 2*i + 2

    // If left child is larger than root
    if (l < N && auxiliaryArray[l] > auxiliaryArray[largest]) {
        animations.push([l, largest, 0]);
        animations.push([l, largest, 0]);
        largest = l;
    }

    // If right child is larger than largest so far
    if (r < N && auxiliaryArray[r] > auxiliaryArray[largest]) {
        animations.push([r, largest, 0]);
        animations.push([r, largest, 0]);
        largest = r;
    }

    // If largest is not root
    if (largest !== i) {
        animations.push([i, auxiliaryArray[largest], 1]);
        animations.push([largest, auxiliaryArray[i], 1]);
        var swap = auxiliaryArray[i];
        auxiliaryArray[i] = auxiliaryArray[largest];
        auxiliaryArray[largest] = swap;

        // Recursively heapify the affected sub-tree
        heapify(auxiliaryArray, N, largest, animations);
    }
}