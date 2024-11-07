**Title: Find First Occurrence of a Target in a Sorted Array**

**Objective:**
Develop a JavaScript function that employs binary search to locate the first occurrence of a specified target value in a sorted array. The function should return the index where the first instance of the target is found.

For example, given the following sorted input array:
```js
const input = [1, 2, 4, 4, 4, 5, 6, 6, 7];
const targetElement = 4;
```

The expected output should be:
```js
First occurrence of 4: 2
```

If the element is not found:
```js
First occurrence of 8: -1
```

**Instructions:**

1. Write a function `findFirstOccurrence(arr, target)` that accepts a sorted array `arr` and a target element `target`.
2. Initialize two pointers, `start` and `end`, to 0 and `arr.length - 1`, respectively.
3. Utilize a while loop to perform binary search. Calculate the middle index in each iteration.
4. If the middle element matches the target, continue searching to the left to find the first occurrence.
5. If the target is less than the middle element, adjust the `end` pointer.
6. If the target is greater than the middle element, adjust the `start` pointer.
7. Once the first occurrence is found, return the index.
8. If the target is not found by the end of the loop, return -1.
9. Display the result using `console.log`.

**Hints:**

- Use a variable to keep track of the first occurrence's index when a match is found.
- To ensure you have the first occurrence, only update the result and move the `end` pointer when the `mid` element matches the target.
- Be mindful of the loop condition and ensure it allows you to continue searching even after a match is found.

<details>
<summary>Helpful Tips</summary>

- Remember to check for edge cases, such as when the target is at the beginning or end of the array.
- Consider what adjustments might be necessary if the array contains duplicates of the target element.
</details>