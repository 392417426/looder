/*
队列的认识
队列(Queue)，它是一种受限的线性表,先进先出(FIFO First In First Out)
受限之处在于它只允许在表的前端( front )进行删除操作
口 而在表的后端(rear)进行插入操作

*/

//队列结构 以数组方式实现
function Queue(){
    this.items = [];

        Queue.prototype.enqueue = function(element){
            return this.items.push(element)
        }

        Queue.prototype.dequeuue = function(){
            return this.items.shift()
        }

        Queue.prototype.front = function(){
            return this.items[0]
        }

        Queue.prototype.isEmpty = function(){
            return !this.items.length
        }

        Queue.prototype.size = function(){
            return this.items.length
        }

        Queue.prototype.toString = function(){
            return this.items.join(' ')
        }
}

let queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.dequeuue();
queue.dequeuue();
console.log(queue)


//实现击鼓传花
//游戏规则：几个朋友一起玩一个游戏 围成一圈 开始数数 数到某个数字的人自动淘汰 最后剩下的这个人会获得胜利, 请问最后剩下的是原来在哪一个位置上的人?
function passGame(nameList,number){
    let queue = new Queue();
    nameList.forEach(element => {
        queue.enqueue(element);
    });
    
    while(queue.size() > 1){
        for(let i = 0;i < number - 1;i++){
            queue.enqueue(queue.dequeuue());
        }
        queue.dequeuue()
    }
    return queue.front()
}

console.log(passGame([1,2,3,4,5],2))

