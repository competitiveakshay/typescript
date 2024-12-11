type numberArr = number[];

function maximumSum(arr: numberArr){
    let max = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }
    return max;
}

const ans = maximumSum([2,30,4]);
console.log(ans);