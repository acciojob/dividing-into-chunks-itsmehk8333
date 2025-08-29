const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
	  var arr1 = [];
    for(var i = 0; i < arr.length; i++){
        let tempArr = []
        let sum = 0
        for(var j = i; j < arr.length; j++){
            sum = sum + arr[j];
            tempArr.push(arr[j]);    // build subarray
            if(sum < value){
                arr1.push([...tempArr]); // ✅ push each valid subarray
            }
            else{
                break;
            }
        }
    }
    console.log(arr1)
		   return arr1
  // Write your code here
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
