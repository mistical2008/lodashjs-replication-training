function chunk(array, size = 1) {
  const clonedArr = array.slice();
  const chunkedArr = [];
  let currentCut = 0;
  let cutsNumber = Math.trunc(array.length / size);

  while (true) {
    currentCut++;
    // TODO:  <08-04-21, Write more performant algorithm
    // without splicing from the array start> //
    const chunk = clonedArr.splice(0, size)
    chunkedArr.push(chunk)

    if (process.env.DEBUG) {
      console.log("CurrentCut: ", currentCut);
      console.log("Current chunk: ", chunk);
      console.log("ChunckedArr: ", chunkedArr);
      console.log("===========================");
    }

    if (currentCut >= cutsNumber) return [...chunkedArr, clonedArr];
  }
}

module.exports = chunk;

