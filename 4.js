const prefixedArray = ["1-Pyton", "2-C++", "3-C#", "4-PHP"];
const cleanArray = [];
for (const item of prefixedArray) {
  cleanArray.push(item.split("-")[1]);
}
console.log(" без префіксів:", cleanArray);
