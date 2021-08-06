var arr = [];
for(var i = 0;i < 1000000;i++){
    arr.push(Math.floor(Math.random() * 100000000))
}
//冒泡排序
function sort1(arr){

    for(var i= 0; i < arr.length;i++){
            for(var j = 0; j < arr.length;j++){
                var temp1 = arr[j];
                var temp2 = arr[j+1];
                if(temp1 > temp2){
                    arr[j] = temp2;
                    arr[j+1] = temp1;
                }
            }
    }

    return arr;
}

//冒泡排序优化
function sort2(arr) {
    var i = arr.length-1;  //初始时,最后位置保持不变
    while ( i> 0) {
        var pos= 0; //每趟开始时,无记录交换
        for (var j= 0; j< i; j++)
            if (arr[j]> arr[j+1]) {
                pos= j; //记录交换的位置
                var tmp = arr[j]; arr[j]=arr[j+1];arr[j+1]=tmp;
            }
        i= pos; //为下一趟排序作准备
     }
     return arr;
}


//直接插入排序
function sort4(arr){
    var len = arr.length;
    for (var i = 1; i < len; i++) {
        var key = arr[i];
        var j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }


    return arr;
}

//希尔排序
function sort5(arr){

    var increment = arr.length;
    var i
    var temp;

    do {
        increment = Math.floor(increment / 3) + 1;
        for (i = increment ; i < arr.length; i++) {

            if (arr[i] < arr[i - increment]) {
                temp = arr[i];
                for (var j = i - increment; j >= 0 && temp < arr[j]; j -= increment) {
                    arr[j + increment] = arr[j];
                }
                arr[j + increment] = temp;
            }
        }
    }while (increment > 1)

    return arr;
}

//归并排序
function merge(left, right) {
    var result = [];

    while (left.length && right.length) {
        if (left[0] < right[0])
            result.push(left.shift());
        else
            result.push(right.shift());
    }

    return result.concat(left, right);
}

function sort6(a) {

    if (a.length === 1)
        return a;

    var work = [];
    for (var i = 0, len = a.length; i < len; i++)
        work.push([a[i]]);

    work.push([]); // 如果数组长度为奇数

    for (var lim = len; lim > 1; lim = ~~((lim + 1) / 2)) {
        for (var j = 0, k = 0; k < lim; j++, k += 2)
            work[j] = merge(work[k], work[k + 1]);

        work[j] = []; // 如果数组长度为奇数
    }

    return work[0];
}

//快速排序(三数取中)
function getMiddleIndex(arr){
    var len = arr.length;
    var low = {"index":0,"value":arr[0]};
    var middle = {"index":Math.floor(len / 2),"value":arr[Math.floor(len / 2)]}
    var high = {"index":len - 1,"value":arr[Math.floor(len - 1)]}
    var temp1,temp2;

    if(low.value > middle.value){
        temp1 = low;
        temp2 = middle;
        low = temp2;
        middle = temp1;
    }

    if(middle.value > high.value && high.value > low.value){
        temp1 = middle;
        temp2 = high;
        middle = temp2;
        high = temp1;
    }else if(middle.value > high.value && high.value < low.value){
        temp1 = low;
        temp2 = middle;
        low = high;
        middle =  temp1;
        high = temp2;
    }
    return middle.index;
}

function sort7(arr){
    if(arr.length <= 1){return arr;}
    var middleIndex = getMiddleIndex(arr);
    var middle=arr.splice(middleIndex,1)[0];
    var left=[];
    var right=[];

    for(var i=0;i<arr.length;i++){
        if(arr[i]<=middle){
            left.push(arr[i]);
        }
        else{
            right.push(arr[i]);
        }
    }

    return sort7(left).concat([middle],sort7(right));
}

// 快排
function quickSort(arr){
	if(arr.length <= 1) return arr;
	var index = Math.floor(arr.length / 2);

	var middle = arr.splice(-,1)[0];
	var left = [],right = [];
	for(let i = 0 ; i < arr.length; i++){
		if(middle > arr[i]){
			left.push(arr[i])
		}else{
			right.push(arr[i])
		}
	}

	return quickSort(left).concat([middle],quickSort(right))
}


console.time('sort1')
console.log(quickSort(arr))
console.timeEnd('sort1')

// console.time('sort1')
// sort1(arr)
// console.timeEnd('sort1')
// console.time('sort2')L
// sort2(arr)
// console.timeEnd('sort2')

// console.time('sort4')
// sort4(arr)
// console.timeEnd('sort4')
// console.time('sort5')
// sort5(arr)
// console.timeEnd('sort5')
// console.time('sort6')
// sort6(arr)
// console.timeEnd('sort6')
// console.time('sort7')
// sort7(arr)
// console.timeEnd('sort7')



