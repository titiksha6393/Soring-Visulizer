import React from 'react';
import { getMergeSortAnimations } from '../sortingAlgorithms/mergeSort.js';
import { getBubbleSortAnimations } from '../sortingAlgorithms/bubbleSort.js';
import { getSelectionSortAnimations } from '../sortingAlgorithms/selectionSort.js';
import { getQuickSortAnimations } from '../sortingAlgorithms/quickSort.js';
import { getHeapSortAnimations } from '../sortingAlgorithms/heapSort.js';
import { getInsertionSortAnimations } from '../sortingAlgorithms/insertionSort.js';
import { getShellSortAnimations } from '../sortingAlgorithms/shellSort.js';
import './SortingVisualizer.css';

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 10;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 120;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

const ANOTHER_COLOR = 'green';

const SORTED_COLOR = 'Blue';

export default class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
            array.push(randomIntFromInterval(5, 700));
        }
        this.setState({ array });
    }

    mergeSort() {
        const animations = getMergeSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }
    }
    bubbleSort() {
        const animations = getBubbleSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 4;
            if (isColorChange === 0 || isColorChange === 1) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            }
            else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }
    }
    selectionSort() {
        const animations = getSelectionSortAnimations(this.state.array);
        var temp = 1;
        // var temp2 = 1;
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const [barOneIdx, barTwoIdx, isColorChange] = animations[i];
            //color to mark the minimum bar in the remaining array
            if (isColorChange === 0) {
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = ANOTHER_COLOR;
                const color2 = PRIMARY_COLOR;
                setTimeout(() => {
                    barTwoStyle.backgroundColor = color2;
                    barOneStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            };
            //color change during comparison
            if (isColorChange === 1) {
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                temp = temp === 1 ? 0 : 1;
                const color = temp === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            };
            //to mark the sorted array
            if (isColorChange === 2 || isColorChange === 3) {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                    if (isColorChange === 3) {
                        barOneStyle.backgroundColor = PRIMARY_COLOR;
                    }
                    else {
                        barOneStyle.backgroundColor = SORTED_COLOR;
                    }
                }, i * ANIMATION_SPEED_MS);
            };
            //to mark the sorted array
            // if (isColorChange === 3) {
            //     setTimeout(() => {
            //         const [barOneIdx, newHeight] = animations[i];
            //         const barOneStyle = arrayBars[barOneIdx].style;
            //         barOneStyle.height = `${newHeight}px`;
            //         barOneStyle.backgroundColor = SORTED_COLOR;
            //     }, i * ANIMATION_SPEED_MS);
            // }
        }
    }
    heapSort() {
        const animations = getHeapSortAnimations(this.state.array);
        let temp = 1;
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const [barOneIdx, barTwoIdx, flag] = animations[i];
            if (flag === 0) {
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                temp = temp === 1 ? 0 : 1;
                const color = temp === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            };
            if (flag === 1 || flag === 2) {
                setTimeout(() => {
                    // const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    if (flag === 2) {
                        barOneStyle.backgroundColor = SORTED_COLOR;
                    }
                    barOneStyle.height = `${barTwoIdx}px`;
                }, i * ANIMATION_SPEED_MS);
            };
            if (flag === 2) {

            }
        }
    }
    quickSort() {
        const animations = getQuickSortAnimations(this.state.array);
        var temp = 1;
        var temp1 = 1;
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const [barOneIdx, barTwoIdx, flag] = animations[i];
            if (flag === 0) {
                const barOneStyle = arrayBars[barOneIdx].style;
                // const barTwoStyle = arrayBars[barTwoIdx].style;
                temp1 = temp1 === 1 ? 0 : 1;
                const color = temp1 === 0 ? SORTED_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    // barTwoStyle.backgroundColor = SORTED_COLOR;
                }, i * ANIMATION_SPEED_MS);
            };
            if (flag === 1) {
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                temp = temp === 1 ? 0 : 1;
                const color = temp === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            };
            if (flag === 2) {
                setTimeout(() => {
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${barTwoIdx}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }
    }
    insertionSort() {
        const animations = getInsertionSortAnimations(this.state.array);
        var temp = 1;
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const [barOneIdx, barTwoIdx, flag] = animations[i];
            if (flag === 0) {
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                temp = temp === 1 ? 0 : 1;
                const color = temp === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            };
            if (flag === 1) {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            };
        }
    }
    shellSort() {
        const animations = getShellSortAnimations(this.state.array);
        var temp = 1;
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const [barOneIdx, barTwoIdx, flag] = animations[i];
            if (flag === 0) {
                temp = temp === 1 ? 0 : 1;
                const color = temp === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            };
            if (flag === 1) {
                setTimeout(() => {
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${barTwoIdx}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }
    }

    // NOTE: This method will only work if your sorting algorithms actually return
    // the sorted arrays; if they return the animations (as they currently do), then
    // this method will be broken.
    testSortingAlgorithms() {
        for (let i = 0; i < 100; i++) {
            const array = [];
            const length = randomIntFromInterval(1, 1000);
            for (let i = 0; i < length; i++) {
                array.push(randomIntFromInterval(-1000, 1000));
            }
            const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
            // const mergeSortedArray = getMergeSortAnimations(array.slice());
            // const bubbleSortedArray = getBubbleSortAnimations(array.slice());
            // const selectionSortedArray = getSelectionSortAnimations(array.slice());
            // const quickSortedArray = getQuickSortAnimations(array.slice());
            // const heapSortedArray = getHeapSortAnimations(array.slice());
            // const quickSortedArray = getQuickSortAnimations(array.slice());
            // const insertionSortedArray = getInsertionSortAnimations(array.slice());
            const shellSortedArray = getShellSortAnimations(array.slice());
            // console.log(arraysAreEqual(javaScriptSortedArray, mergeSortedArray));
            // console.log(arraysAreEqual(javaScriptSortedArray, bubbleSortedArray));
            // console.log(arraysAreEqual(javaScriptSortedArray, selectionSortedArray));
            // console.log(arraysAreEqual(javaScriptSortedArray, heapSortedArray));
            // console.log(arraysAreEqual(javaScriptSortedArray, quickSortedArray));
            // console.log(arraysAreEqual(javaScriptSortedArray, insertionSortedArray));
            console.log(arraysAreEqual(javaScriptSortedArray, shellSortedArray));
            // console.log(array);
            // console.log(javaScriptSortedArray);
            // console.log(selectionSortedArray);
            // console.log(arraysAreEqual(javaScriptSortedArray, quickSortedArray));
        }
    }

    render() {
        const { array } = this.state;

        return (
            <div className="array-container">
                {array.map((value, idx) => (
                    <div
                        className="array-bar"
                        key={idx}
                        style={{
                            backgroundColor: PRIMARY_COLOR,
                            height: `${value}px`,
                        }}></div>
                ))}
                <div>
                    <button onClick={() => this.resetArray()}>New Array</button>
                    <button onClick={() => this.mergeSort()}>Merge Sort</button>
                    <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
                    <button onClick={() => this.selectionSort()}>Selection Sort</button>
                    <button onClick={() => this.heapSort()}>Heap Sort</button>
                    <button onClick={() => this.quickSort()}>Quick Sort</button>
                    <button onClick={() => this.insertionSort()}>Insertion Sort</button>
                    <button onClick={() => this.shellSort()}>Shell Sort</button>
                    <button onClick={() => this.testSortingAlgorithms()}>Test Sorting Algorithms</button>
                </div>
            </div>
        );
    }
}

// From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function arraysAreEqual(arrayOne, arrayTwo) {
    if (arrayOne.length !== arrayTwo.length) return false;
    for (let i = 0; i < arrayOne.length; i++) {
        if (arrayOne[i] !== arrayTwo[i]) {
            return false;
        }
    }
    return true;
}
