function validBraces(braces) {
    var opposites = {
        "(": ")",
        "{": "}",
        "[": "]"
    }
    if (braces.length % 2 !== 0) {
        console.log("Uneven number of braces")
        return false;
    }
    if (braces.length === 2) {
        if (opposites[braces[0]] !== braces[1]) {
            return false;
        } else {
            return true;
        }
    } else {
        for (var i = 0; i < braces.length; i++) {
            console.log("Braces - " + braces)
            if (opposites[braces[i]] === braces[i + 1]) {
                var newBraces = braces.slice(0, i) + braces.slice(i + 2);
                console.log("New - " + newBraces)
                return validBraces(newBraces);
            }
        }
        return false;
    }

}

console.log(validBraces("{{()}}[]"));
console.log(validBraces("{(})"));
