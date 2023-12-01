function flat(arr){
    if(!Array.isArray(arr)) return;
    let tempArr = [];
    for(let i = 0; i < arr.length;i++){
        if(Array.isArray(arr[i])){
            tempArr.push(...flat(arr[i]));
        }else{
            tempArr.push(arr[i]);
        }
    }

    return tempArr
}

let a = [[1,2,[3,4]],5,6,[7]];
console.log(flat(a))