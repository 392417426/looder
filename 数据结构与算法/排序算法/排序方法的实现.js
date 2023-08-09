/*

冒泡排序的思路:
对未排序的各元素从头到尾依次比较相邻的两个元素大小关系，
如果左边的队员高,则两队员交换位置向右移动一个位置,比较下面两个队员当走到最右端时，最高的队员一定被放在了最右边按照这个思路,从最左端重新开始,这次走到倒数第二个位置的队员即可
依次类推就可以将数据排序完成。

选择排序改进了冒泡排序
将交换的次数由O(N2)减少到O(N) 但是比较的次数依然是O(N2)

选择排序的思路:
选定第一个索引位置，然后和后面元素依次比较，如果后面的队员,小于第一个索引位置的队员,则交换位置，经过一轮的比较后,可以确定第一个位置是最小的然后使用同样的方法把剩下的元素逐个比较即可，
可以看出选择排序，第一轮会选出最小值，第二轮会选出第二小的值，直到最后。

选择排序的比较次数:
选择排序和冒泡排序的比较次数真实次数:N*(N-1)/2 大O表示法: O(N2)

选择排序的交换次数:
选择排序每次进行选择的时候, 最多需要交换1次,一共遍历多少次呢? N - 1次选择排序的交换次数只有N-1次,用大O表示法就是O(N). 所以选择排序通常认为在执行效率上是高于冒泡排序的

插入排序的思路
局部有序:
插入排序思想的核心是局部有序. 什么是局部有序呢?
比如在一个队列中的人,我们选择其中一个作为标记的队员,这个被标记的队员左边的所有队员已经是局部有序的
这意味着,有一部门人是按顺序排列好的.有一部分还没有顺序
插入排序的思路
从第一个元素开始，该元素可以认为已经被排序取出下一个元素，在已经排序的元素序列中从后向前扫描
如果该元素( 已排序 )大于新元素，将该元素移到下一位置重复上一个步骤，直到找到已排序的元素小于或者等于新元素的位置将新元素插入到该位置后,重复上面的步骤.

插入排序的比较次数:
第一趟时，需要的最多次数是1，第二趟最多次数是2，依次类推,最后一趟是N-1次,因此是插入排序的最多次数: 1 + 2 + 3 + ... + N -1 = N(N - 1) /2.
然而每趟发现插入点之前,平均只有全体数据项的一半需要进行比较.
我们可以除以2得到 N *(N - 1)/4以相对择排他比较次数是少了一半的

插入排序的复制次数:
第一趟时，需要的最多复制次数是1,第二趟最多次数是2,依次类推，最后一趟是N-1次.
因此复制次数最多是1 + 2 + 3 + ... + N -1= N(N - 1)/2.
平均次数N *(N - 1)/4.

对于基本有序的情况
对于已经有序或基本有序的数据来说插入排序要好很多
当数据有序的时候 while循环的条件总是为假 所以它变成了外层循环中的一个简单语句,执行N-1次.
在这种情况下,算法运行至需要N(N)的时间,效率相对来说会更高.
0另外别忘了，我们的比较次数是选择排序的一半,所以这个算法的效率是高于选择排序的.

希尔排序的思路:
比如下面的数字,81,94,11,96,12,35,17, 95,28, 58, 41,75,15.
不正确的分组方式(81,94,11) (96,12,35)(17,95,28)(58,41,75)(15)
我们先让间隔为5,进行排序.(35, 81),(94, 17),(11,95),(96, 28),(12, 58),(35,41),(17, 75),(95, 15)排序后的新序列,一定可以让数字离自己的正确位置更近一步.
我们再让间隔位3,进行排序.(35,28, 75, 58, 5),(17, 12, , 81),(11, 41, 96, 94)福排序后的新序列，一定可以让数字离自己的正确位置又近了一步
最后，我们让间隔为1，也就是正确的插入排序.

*/
function ArrayList(){
    this.array = [];

    ArrayList.prototype.insert = function(item){
        this.array.push(item)
    }

    ArrayList.prototype.toString = function(){
        return this.array.join('-')
    }

    ArrayList.prototype.swap = function(m,n){
        let temp = this.array[m];
        this.array[m] = this.array[n];
        this.array[n] = temp
    }

    //冒泡排序
    ArrayList.prototype.bubbleSort = function(){
        let length = this.array.length;
        for(var j = length - 1; j >= 0;j--){
            for(var i = 0; i < j;i++){
                if(this.array[i] > this.array[i+1]){
                    this.swap(i,i+1)
                }
            }
        }
    }

    //选择排序
    ArrayList.prototype.selectionSort = function(){
        let length = this.array.length;
        let min = 0;
        for(var i = 0; i < length - 1; i++){
            min = i;
            for(var j = min + 1; j < length  ;j++){
                if(this.array[min] > this.array[j]){
                    min = j;
                }
                
            }
            this.swap(min,i)
        }
    }

    //插入排序
    ArrayList.prototype.inselectionSort = function(){
        let length = this.array.length;
        for(let i = 1;i < length;i++){
            var temp = this.array[i];
            var j = i;
            while(this.array[j - 1] > temp && j > 0){
                this.array[j] = this.array[j - 1];
                j--
            }
            this.array[j] = temp
        }
    }

    //希尔排序
    ArrayList.prototype.shellSort = function(){
        let length = this.array.length;
        var gap = Math.floor(length / 2);
        while(gap >= 1){
            for(let i = gap; i < length;i++){
                var temp = this.array[i];
                var j = i;

                while(this.array[j - gap] > temp && j > gap - 1){
                    this.array[j] = this.array[j - gap];
                    j -= gap;
                }

                this.array[j] = temp;
            }

            gap = Math.floor(gap / 2);
        } 
    }

    //快速排序
    ArrayList.prototype.quickSort = function(){
        this.quick(0,this.array.length - 1)
    }

    ArrayList.prototype.quick = function(left,right){
        if(left >= right) return
        
        let pivot = this.median(left,right);
        let i = left;
        let j = right - 1;
        while(true){
            while(this.array[++i] < pivot){}

            while(this.array[--j] > pivot){}

            if(i < j){
                this.swap(i,j);
            }else{
                break
            }
        }

        this.swap(i,right - 1);
        this.quick(left,i - 1);
        this.quick(i + 1,right);
    }

    ArrayList.prototype.median  = function(left,right){
        let center = Math.floor((left + right) / 2);
        if(this.array[left] > this.array[center]){
            this.swap(left,center)
        }

        if(this.array[center] > this.array[right] && this.array[right] > this.array[left]){
            this.swap(center,right)
        }else if(this.array[center] > this.array[right] && this.array[right] < this.array[left]){
            this.swap(center,right);
            this.swap(left,center)
        }

        this.swap(center,right - 1);
        return this.array[right - 1]
    }
}


var list = new ArrayList();

function resetList(){
    let array = [];
    for(let i = 0;i < 9;i++){
        array.push(Math.floor(Math.random() * 100))
    }

    return array
}
let array = resetList();
// console.log('----冒泡排序start----')
// console.time()
// list.bubbleSort();
// console.timeEnd()
// console.log('----冒泡排序end----')

// console.log('----选择排序start----')
// console.time()
// list.selectionSort();
// console.timeEnd()
// console.log('----选择排序end----')

// console.log('----插入排序start----')
// console.time()
// list.inselectionSort();
// console.timeEnd()
// console.log('----插入排序end----')
list.array = JSON.parse(JSON.stringify(array))
console.log('----希尔排序start----')
console.time()
list.shellSort();
console.timeEnd()
console.log('----希尔排序end----')

// list.array = JSON.parse(JSON.stringify(array))
// console.log('----快速排序start----')
// console.time()
// list.quickSort();
// console.timeEnd()
// console.log('----快速排序end----')


console.log(list.toString())



