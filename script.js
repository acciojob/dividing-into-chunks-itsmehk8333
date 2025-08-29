const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
	  let result = [];
    let currentChunk = [];
    let currentSum = 0;

    for (let num of arr) {
        if (currentSum + num <= n) {
            // add to current chunk
            currentChunk.push(num);
            currentSum += num;
        } else {
            // push current chunk to result
            result.push(currentChunk);
            // start new chunk
            currentChunk = [num];
            currentSum = num;
        }
    }

    // push the last chunk if not empty
    if (currentChunk.length > 0) {
        result.push(currentChunk);
    }

    return result;
  // Write your code here
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
