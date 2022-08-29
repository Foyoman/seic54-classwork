function quickSort(arr){
  if (arr.length <= 1) {
    return arr;
  } 

  const pivot = arr.shift(); // .pop() would also work

  // O(2N): less code; programmer's time is more important
  const lessThan = arr.filter(element => element < pivot);
  const moreThan = arr.filter(element => element >= pivot);

  // O(N): mode code; computer's timer is more important
  // const lessThan = [];
  // const moreThan = [];
  
  // arr.forEach((element) => {
  //   if (element < pivot) {
  //     lessThan.push(element);
  //   } else {
  //     moreThan.push(element);
  //   }
  // });

  return [...quickSort(lessThan), pivot, ...quickSort(moreThan)];
}

module.exports = quickSort;