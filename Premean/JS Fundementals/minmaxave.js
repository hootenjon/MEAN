function maxMinAvg(arr){
    var max = arr[0];
    var min = arr[0];
    var total = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
        if(arr[i] < min){
            min = arr[i];
        }
        total = total + arr[i];
    }
    console.log( "For the array: [" + arr + "]");
    console.log("The minimum is "+ min +", the maximum is "+ max +", and the average is "+ total/arr.length +".");
    return;
}

maxMinAvg([1, -2, 9, 4])