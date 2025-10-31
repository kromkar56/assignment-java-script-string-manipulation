let sen= prompt("Enter a sentence:");

let Count = sen.trim().split("").length;

let wordReplace = prompt("Enter the word to replace:");
let replaceWord = prompt("Enter the new word:");
let newSen = sen.replaceAll(wordReplace, replaceWord);


let substring = prompt("Enter a word to check in the sentence:");
let isPresent = sen.includes(substring);

console.log("Original Sentence: ",sen);
console.log("Word Count: ",Count);
console.log("After Replacement: ",newSen);
console.log("Is the word:",isPresent ? "Yes" : "No");
