const languages = ["Pyton", "C++", "C#", "PHP"];
const searchLanguage = "Java Script";
if (!languages.includes(searchLanguage)) {
  console.log(" Java ");
  languages.push(searchLanguage);
}
console.log(" масив:", languages);
