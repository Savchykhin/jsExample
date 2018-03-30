var arr = ["String", 45, { "name": "TESTER" }, 22, 67];

for (var i = 0; i < arr.length; i++) {   
    if (typeof (arr[i]) === "object") {
        break;
    }
    else if (typeof (arr[i]) === "number") {
        arr[i] = "Some Number XXXX";
    }
    else{
        console.log(arr[i]);
    }
}

console.log(arr);
