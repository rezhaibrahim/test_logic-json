const fizzbuzz = (snap) => {
    for (let i = 1; i <= snap; ++i) {
        if (i % 3 == 0 && i % 5 == 0) {
          kata = "FizzBuzz";
          console.log(kata);
        } else if (i % 3 == 0) {
          kata = "Fizz";
          console.log(kata);
        } else if (i % 5 == 0) {
          kata = "Buzz";
          console.log(kata);
        } else {
          console.log(i);
        }
      }
}

fizzbuzz(15)