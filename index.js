// run `node index.js` in the terminal

// don't remove this line if are using prompt
const prompt = require('prompt-sync')();

function findFirstOccurrence(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  let result = -1; // Initiate result in case target not found

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      result = mid; // store the index of the found target

      end = mid - 1; // Move left to find the first occurrence
    } else if (arr[mid] < target) {
      start = mid + 1; // Move right
    } else {
      end = mid - 1; // Move left
    }
  }

  return result;
}

const input = [1, 2, 4, 4, 4, 5, 6, 6, 7];

const targetElement = 4;

const result = findFirstOccurrence(input, targetElement);

console.log(`First occurrence of ${targetElement}: ${result}`);
