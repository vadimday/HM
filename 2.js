const numbers2 = [23, 1, 45, 87, 4, 55, 6];
let maxNumber = numbers2[0];
for (const num of numbers2) {
  if (num > maxNumber) {
    maxNumber = num;
  }
}
console.log("Найбільше:", maxNumber);
