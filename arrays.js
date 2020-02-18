function fizzBuzz(n){
  for (i = 1; i <= n; i++) {
    if (i%3 === 0 && i%5 === 0){
      console.log("FizzBuzz")
    } else if (i % 3 === 0){
      console.log("Fizz")
    }
    else if (i % 5 === 0){
      console.log("Buzz")
    }
    else {
      console.log(i)
    }
    }
  }


fizzBuzz(5)

let myMatrix = [[1,2,3,4],
                [5,6,7,8],
                [9,10,11,12],
                [13,14,15,16]];


function unroll(matrix) {
  
	if (matrix.length === 0) return;
	
	// top
	console.log(...matrix.shift());
	
	// right (last elem of each)
	console.log(...matrix.map(arr => arr.pop()))
	
	// bottom
	console.log(...matrix.pop().reverse());

	// left (first elem of each)
	console.log(...matrix.map(arr => arr.shift()).reverse());

	unroll(matrix);

}

unroll(myMatrix);

// end result: 1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10
