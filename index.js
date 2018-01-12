function myFizzBuzz(start, end, multipleOfFirstNumber, multipleOfSecondNumber) {
    for (var i = start; i <= end; i++) {
      
      // if a number is a multiple of 3 print out fizz 
      if(i % multipleOfFirstNumber === 0 && i % multipleOfSecondNumber === 0) {
        // do this code inside of here
        console.log("fizzbuzz");
      } else if (i % multipleOfFirstNumber === 0) {
        console.log("fizz");
      } else if (i % multipleOfSecondNumber === 0) {
        console.log("buzz");
      } else {
        console.log(i);
      }
    } 
  }

  myFizzBuzz(50, 400, 10, 13);

  myFizzBuzz(1, 100, 3, 5);