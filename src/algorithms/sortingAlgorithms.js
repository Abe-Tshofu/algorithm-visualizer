export const bubbleSort = (array, setArray, setIsSorting) => {
  let n = array.length;
  let arr = [...array];
  let animations = [];

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      animations.push([j, j + 1, 'compare']);
      if (arr[j] > arr[j + 1]) {
        animations.push([j, j + 1, 'swap']);
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  executeAnimations(animations, arr, setArray, setIsSorting);
};

const executeAnimations = (animations, sortedArray, setArray, setIsSorting) => {
  for (let i = 0; i < animations.length; i++) {
    const [idx1, idx2, action] = animations[i];

    setTimeout(() => {
      if (action === 'swap') {
        setArray(prevArray => {
          const newArray = [...prevArray];
          [newArray[idx1], newArray[idx2]] = [newArray[idx2], newArray[idx1]];
          return newArray;
        });
      }
    }, i * 100);
  }

  setTimeout(() => {
    setArray(sortedArray);
    setIsSorting(false);
  }, animations.length * 100);
};

