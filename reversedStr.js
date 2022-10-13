/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/

//text, return the reversedText
//no empty, no case sensitive, no multiple text
//'tacos' -> 'socat'
//'bed' -> 'deb'
//'fall' -> 'llaf'


function reverseString(text) {
 // let reversedText = text.split('').reverse().join('') //chained methods
 // return reversedText // Code goes here
 // return [...text].reverse().join()//using spread method
 let result = "" 
 // for (let i = text.length - 1; i >= 0; i--)//using for loop
 for (let char of text) //using of method
 {
     // result += text[i]
     result = char + result;

     
 }
 return result
}

console.log(reverseString('tacos'),'socat')
console.log(reverseString('bed'),'deb')
console.log(reverseString('fall'), 'llaf')