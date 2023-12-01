function deepClone(obj){
    let tempObj = {};
    for(let k in obj){
        if(!obj.hasOwnProperty(k)) return
        if(typeof obj[k] === 'object' && obj[k] !== null){
            tempObj[k] = deepClone(obj[k])
        }else{
            tempObj[k] = obj[k]
        }
    }

    return tempObj
}
let a = {
    a:'aaa',
    b:{
        d:'d'
    }
}

let b = deepClone(a)

console.log(a.b === b.b)