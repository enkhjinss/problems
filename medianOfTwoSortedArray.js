const findMedianSortedArrays = function (nums1, nums2) {
    const mergedArray = nums1.concat(nums2);
    console.log("1 = " + mergedArray);

    let temp = 0;
    for (let i = 0; i < mergedArray.length; i++) {
        for (let j = i + 1; j < mergedArray.length; j++) {
            if (mergedArray[i] > mergedArray[j]) {
                temp = mergedArray[i];
                mergedArray[i] = mergedArray[j];
                mergedArray[j] = temp;
            }
        }
    }

    console.log("2 = " + mergedArray);

    let medianIndex = mergedArray.length / 2;
    let median = 0;
    if (mergedArray.length % 2 === 0) {
        //tegsh baina gsn ug
        median = (mergedArray[medianIndex] + mergedArray[medianIndex - 1]) / 2;
    } else {
        //index n 0-s ehelj bga gedgiig sana !!
        //sondgoi bn gsn ug
        median = mergedArray[Math.floor(medianIndex)];
    }
    console.log(median);
};
findMedianSortedArrays([1, 2], [3, 4]);
