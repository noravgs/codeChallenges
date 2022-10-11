// Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 3, print out “Fizz”; when it’s divisible by 5, print out “Buzz”; when it’s divisible by both 3 and 5, print out “Fizz Buzz”.
//num from 0 -> 100, 
//num / 3 === 0 -> 'Fizz"
//num / 5 === 0 -> 'Buzz'
//num / 3 && 5 === 0 -> 'FizzBuzz'
function fizzBuzz(num){
 for (let i = 0; i < 100; i++)
 if (i % 3 === 0 && i % 5 === 0){
  console.log('fizzBuzz')
 }else if(i % 3 === 0){
  console.log('fizz')
 }else if(i % 5 === 0) {
  console.log('Buzz')
 }else{
  console.log(i)
 }
}

fizzBuzz()