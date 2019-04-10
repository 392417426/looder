//返回无重复字符的最长子串

const findFirstNoRepeatStr = str => {
	// 7X7CgmzykeuzpVfy74WnImBMCNn9ftbjcAEj9MfQ
	let arr = str.split('');

	let obj = {};
	let tmp_arr = [-1];

	let max = 0;
	let start_index = 0;
	let end_index = 0;

	arr.forEach((x,i)=>{
		if(obj[x]){
			tmp_arr.push(i)
		}else{
			obj[x] = x;
		}
	})

	tmp_arr.forEach( (x,i) =>{
		if(i != 0){
			let target = x - tmp_arr[i - 1];
			if(target > max){
				max = target;
				start_index = tmp_arr[i - 1];
				end_index = x;
			}
		}
	})

	return str.substring(start_index,end_index)
}

//多维数组转一维数组 flat([[1,2],3,[4,[5,[6,7,[8]]]]])
const flat = arr =>{
	let tmp_arr = [];

	const _flat = arr => {
		arr.forEach((x)=>{
			if(Array.isArray(x)){
				return _flat(x);
			}else{
				tmp_arr.push(x);
			}
		})
	}
	
	_flat(arr);

	return tmp_arr;
}

//在数组里查找两个数和为目标数字的下标

let arr = [1,2,3,4,5,6,7,8,9];
let target = 9;

const findNumOfSumIndex = (arr,target) => {
	if(!Array.isArray(arr) || arr.length == 0) return new Array();
	let obj = {};
	let returnArr = [];


	arr.forEach((item,i)=>{
		obj[item] = i;
	})
	
	for(let i = 0; i < arr.length;i++){
		let other = target - arr[i];
		if(obj[other]){
			returnArr = [i,obj[other]];
			break;
		}
	}

	return returnArr;
}

//实现JSON.stringify方法
// let obj = {
// 		"name":["aaaaaaaaaaaaaa",18],
// 		"age":18,
// 		"other":{
// 			"cat":"mi",
// 			"dog":"ma",
// 			"name":{
// 				"one":"a",
// 				"two":"b",
// 				"fn":function(){}
// 			},
// 		}
// 	}

const jsonStringify = obj =>{
	let type = typeof obj;
	if(type != "object"){
		if(/string|undefined|function/.test(obj)){
			obj = `"${obj}"`;
		}
		 return String(obj);
	}else{

		let tmp_arr = [];
		let tmp_str = "";
		let return_str = "";
		let is_array = Array.isArray(obj);
		for(let key in obj){
			let value = obj[key];
			let tmp_type = typeof value;
			
			if (/string|undefined|function/.test(tmp_type)) {
                value = '"' + value + '"';
            } else if (type === "object") {
                value = jsonStringify(value);
            }
            tmp_str = (is_array ? "" : '"' + key + '":') + String(value)
			tmp_arr.push(tmp_str) ;
		}
		return_str = tmp_arr.join(",")
		return (is_array ? "[":"{") + return_str +  (is_array ? "]":"}");
	}
}

//实现JSON.parse方法
// let json = '{"a":"a","b":"b"}';

const json_parse = json => {
	let rx_one = /^[\],:{}\s]*$/;
	let rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
	let rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
	let rx_four = /(?:^|:|,)(?:\s*\[)+/g;
	let obj = '';
	if (
	    rx_one.test(
	        json
	            .replace(rx_two, "@")
	            .replace(rx_three, "]")
	            .replace(rx_four, "")
	    )
	) {
	    obj = eval("(" +json + ")");
	}

	return obj;
}


//实现call方法
Function.prototype.call2 = function (content = window) {
	console.log(Array(arguments))
	let params = [...arguments].slice(1);
	content.fn = this;
	let result = content.fn(...params);
	delete content.fn;
	return result;
}

let animate = {
	value : 30
}

function cat(firstname,age) {
	console.log(firstname);
	console.log(age);
	console.log(this.value);
}

cat.call2(animate,'looder',18)