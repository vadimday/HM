const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];
let totalSum = 0;
for (const num of array1) {
  totalSum += num;
}
for (const num of array2) {
  totalSum += num;
}
console.log(" два масива:", totalSum);
