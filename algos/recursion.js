// function countDown(num){
//   if (num === 0 || num < 0){
//     return "stop"
//   }
//   console.log(num)
//   return countDown(num-1)
// }

// console.log(countDown(-3))

let arr  = [1, 2, [3, [4]], [[5]]]

// if array is not array, push into new array

// console.log(arr[2].slice(0) + arr.slice(1))

// const flattenArray = (arr) => {
//   let result = []
//   for (i = 0; i < arr.length; i++ ){
//     let el = array[i]
//     if (Array.isArray(el)) {
//       const flatted = flattenArray(el)
//       result = result.concat(flatted)
//     }
//     else {
//       result.push(el)
//     }
// }
// return result 
// } 
   
// console.log(flattenArray)

//Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
//productOfArray([1,2,3]) //6
//productOfArray([1,2,3,10]) //60
//productOfArray([0,4,56,12]) //0

function productOfArray (arr, prod = 1){
  if (!arr[0]) return prod
  if (arr
  prod *= arr[0]

  return productOfArray(arr.slice(1), prod) 
}

console.log(productOfArray([2, 4, 0]))





// function fibo(num){
//   if (num === 0 ) return 1
//   if (num === 1) return 1 
// }