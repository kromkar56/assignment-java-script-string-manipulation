let s = prompt("Enter a string");
let arr = s.split(" ");

//number of words
const count = arr.length;

//replace a word
let arr2 = arr;


//index
let i = 0;

//checking the the index of the target word is a number and is less than the length 
while (true) {
  i = prompt("The position of word you want to replace");
  i = Number(i);
  if (isNaN(i)) {
    alert("Enter a number, it should the postion of the target word");
  } else if(i <= count && i >=0) {
    break
  }
  else{
    alert("not a valid postition (>=0 and < the number of words)")
  }
}

const rep = prompt("Enter the word you want to switch with the given index");
arr2[i-1] = rep;
const replacedS = arr2.join(" ");

//now check if the word is present
let ex = false
const check = prompt("enter a word to check if it exists")
for(let x = 0; x < count; x++){
    if (arr2[x].toUpperCase == check.toUpperCase){
        ex = true
    }
}
const ans = `Real String: ${s}<br>Number of words: ${count}<br>String with replaced word: ${replacedS}<br>Existence of the given word in a string: ${ex}`
document.getElementById("text").innerHTML = ans
