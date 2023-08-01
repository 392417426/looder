
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