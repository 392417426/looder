/*
栈的认识
栈( stack )，它是一种受限的线性表,后进先出(LIFO)
其限制是仅允许在 表的一端 进行插入和删除运算。这一端被称为栈顶，相对地，把另一端称为栈底。
LIFO(ast in first out)表示就是后进入的元素,第一个弹出栈空间.类似于自动餐托盘,最后放上的托盘,往往先把拿出去使用.
向一个栈插入新元素又称作进栈、入栈或压栈，它是把新元素放到栈顶元素的上面，使之成为新的栈顶元素口从一个栈删除元素又称作出栈或浪栈，它是把栈项尤素删院障，使其相邻的元素成为新的栈顶元素
*/


//实现栈结构
function Stack(){
    this.items = [];

    Stack.prototype.push = function(element){
        this.items.push(element)
    }

    Stack.prototype.pop = function(){
        return this.items.pop()
    }

    Stack.prototype.peek = function(){
        return this.items[this.items.length - 1]
    }

    Stack.prototype.isEmpty = function(){
        return !this.items.length
    }

    Stack.prototype.size = function(){
        return this.items.length
    }

    Stack.prototype.toString = function(){
        return this.items.join(' ')
    }
}


//十进制转二进制
function decToBin(decNumber){
    let s = new Stack();
    
    while(decNumber > 0){
        s.push(decNumber % 2 );
        decNumber = Math.floor(decNumber / 2)
    }

    let result = '';
    while(!s.isEmpty()){
        result += s.pop();
    }
    return result;
}

console.log(decToBin(200))