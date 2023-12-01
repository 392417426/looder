function chunk(arr,size){
    if(!Array.isArray(arr)) return;
    
    let returnArr = [];
    if(arr.length <= size){
        returnArr.push(arr);
    }else{
        let len = arr.length;
        let count = Math.ceil(len / size);
        for(let i = 0; i < count;i++){
            returnArr.push(arr.slice(i * size,(i + 1) * size))
        }
    }

    return returnArr
}

let a = [1,2,3,4,5,6]

console.log(chunk(a,3))