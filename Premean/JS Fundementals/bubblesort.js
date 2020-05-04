function bubbleSort(arr)
{
    var swapped;
    // Start looping from the end of the array towards the beginning
    for (var i = arr.length; i > 0; i--)
    {
        swapped = false;
        // Start the inner loop from the beginning of the array
        for (var j = 0; j < i - 1; j++)
        {
            console.log(arr, arr[j], arr[j + 1]);
            // If the current value is greater than the next value...swap!
            if (arr[j] > arr[j + 1])
            {
                // Basic swap logic
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
        if (!swapped) {
            console.log("Used no swap logic")
            break;
        }
    }
    
    return arr;
}

console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]));
//console.log(bubbleSort([6, 5, 3, 1, 8, 7, 2, 4]));
//console.log(bubbleSort([37, 45, 29, 8]));