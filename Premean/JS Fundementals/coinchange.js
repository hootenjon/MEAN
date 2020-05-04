function coinChange(int) {
    var change = {};
    var remainder = int;

    change.dollars = 0
    if (remainder >= 100) {
        change.dollars = Math.floor(remainder / 100);
        remainder = remainder % 100;
    }
    change.quarters = 0
    if (remainder >= 25) {
        change.quarters = Math.floor(remainder / 25);
        remainder = remainder % 25
    }
    change.dimes = 0
    if (remainder >= 10) {
        change.dimes = Math.floor(remainder / 10);
        remainder = remainder % 10
    }
    change.nickles = 0
    if (remainder >= 5) {
        change.nickles = Math.floor(remainder / 5);
        remainder = remainder % 5
    }
    change.pennies = 0;
    change.pennies = remainder;
    return change;
}

console.log(coinChange(312));
console.log(coinChange(78));