function chunk(array, size = 1) {
  const clonedArr = array.slice();
  const chunkedArr = [];
  let currentCut = 0;
  let cutsNumber = Math.trunc(array.length / size);

  while (true) {
    currentCut++;
    const chunk = clonedArr.splice(0, size)
    chunkedArr.push(chunk)

    console.log("CurrentCut: ", currentCut);
    console.log("Current chunk: ", chunk);
    console.log("ChunckedArr: ", chunkedArr);

    if (currentCut >= cutsNumber) return [...chunkedArr, clonedArr];
    // if (currentCut > array.length) return;
  }
}

// module.exports = chunk;

const array = [2, 3, 6, 10, 12, 40, 8, 5, 9, 33]
const array2 = [2, 3, 6, 10, 12, 40, 8, 5, 9, 28, 10, 12, 40, 8, 5, 9, 33]
const res = chunk(array, 3);
const res2 = chunk(array2, 4);
console.log("Result: ", res);
console.log("Result: ", res2);
