// Insertion Sort

/*
Pseudocode:
for j = 2 to A.length
    temp = A[j]
    - Insert A[j] into the sorted sequence A[1..j-1].
    i = j-1
    while i > - and A[i] > temp
        A[i + 1] = A[i]
        i = i - 1
    A[i + 1] = temp
*/ 

const array = [5, 2, 4, 6, 1, 3];

const insertionSort = (array) => {
  for (let j = 0; j < array.length; j += 1) {
    let temp = array[j];
    let i = j - 1;
    while(i >= 0 && array[i] > temp) {
      array[i + 1] = array[i];
      i = i - 1;
    }
    array[i + 1] = temp;
  }
  return array;
}

console.log(insertionSort(array));