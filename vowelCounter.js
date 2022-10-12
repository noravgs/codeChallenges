/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/
//text, -> return count of vowels
//test -> 1
//'anehizxcv' -> 3
//book -> 2
//one word, no case sensitive, no empty '' return number
function vowelsCounter(text) {
 const vowels = ['a,e,i,o,u']
 let counter = 0;
 for (let letter of text.toLowerCase()){
  if(vowels.includes(letter)){
   counter++

 }
 }
  return counter
}

console.log(vowelsCounter('test'), '1')
console.log(vowelsCounter('anehizxcv'), '3')
console.log(vowelsCounter('book'), '2')

//Regular Expression
function vowelsCounter(text) {
 // Search text with Regex and store all matching instances 
 let matchingInstances = text.match(/[aeiou]/gi);

 // Check if matching instances exist then calculate length
 if (matchingInstances) {
     // Return number of vowels
     return matchingInstances.length
 } else {
     return 0
 }
}