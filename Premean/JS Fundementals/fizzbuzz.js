function fizzBuzz(n) {
    var arr = []
    if (typeof (n) !== 'number' || n < 0) {
        console.log("Parameter must be a number");
        return
    }
    for (var i = 1; i <= n; i++) {

        if (i % 15 == 0) {
            arr[i - 1] = "Fizzbuzz";
            console.log("FizzBuzz");
        }
        else if (i % 3 == 0) {
            arr[i - 1] = "Fizz";
            console.log("Fizz");
        }
        else if (i % 5 == 0) {
            arr[i - 1] = "Buzz"
            console.log("Buzz");
        }
        else {
            arr[i - 1] = i;
            console.log(i);
        }
    }
    return arr
}
console.log(fizzBuzz(15))
fizzBuzz("Fifteen")
fizzBuzz(-15)