/*

append(element): 向列表尾部添加一个新的项
insert(position,element): 向列表的特定位置插入一个新的项
get(position): 获取对应位置的元素
indexOf(element): 返回元素在列表中的索引。如果列表中没有该元素则返回-1。
update(position): 修改某个位置的元素
removeAt(position): 从列表的特定位置移除一项。
remove(element): 从列表中移除一项。
isEmpty(): 如果链表中不包含任何元素，返回true，如果链表长度大于0则返回false.
size() : 返回链表包含的元素个数。与数组的length属性类似。
toString(): 由于列表项使用了Node类，就需要重写继承自JavaScript对象默认的toString方法，让其只输出元素的值

*/

function LinkList(){
    this.head = null;
    this.length = 0;
    this.tail = null;

    function Node(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }

    LinkList.prototype.append = function(element){
        let newNode = new Node(element);
        if(this.length === 0){
            this.head = newNode;
        }else{
            //找到最后一个节点
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            newNode.prev = current;
            current.next = newNode;

        }
        this.tail = newNode;
        this.length++;
    }

    LinkList.prototype.insert = function(position,element){
        //不对负数进行处理，直接报错
        if(position < 0 || position > this.length) return false;
        let newNode = new Node(element);

        if(!this.length){
            this.head = newNode;
            this.tail = newNode;
        }else{
            if(position === 0){
                newNode.next = this.head;
                this.head = newNode;
                this.head.prev = newNode;
            }else if(position == this.length){
                this.tail.next = newNode;
                newNode.prev = this.tail;
                this.tail = newNode;
            }else{
                let current = this.head;
                for(let i = 1; i <= position ;i++){
                    if(position == i){
                        newNode.prev = current;
                        newNode.next = current.next;
                        current.next = newNode;
                        break;
                    }
    
                    current = current.next;
                    
                }
            }
        }
        
        this.length++;
    }

    LinkList.prototype.get = function(position){
        //不对负数进行处理，直接报错
        if(position < 0 || position >= this.length) return false;
        let result = ''
        let current = this.head;
        let prev = null;
        for(let i = 0; i < this.length ;i++){
            if(position == i){
                result = current.data;
            }
            prev = current;
            current = current.next;
        }

        return result;
    }

    LinkList.prototype.indexOf = function(element){
        let index = -1;
        let current = this.head;
        for(let i = 0; i < this.length ;i++){
            if(element === current.data){
                result = current.data;
                index = i;
                break;
            }
            current = current.next;
        }
        return index;
    }
    
    LinkList.prototype.update = function(position,element){
        //不对负数进行处理，直接报错
        if(position < 0 || position >= this.length) return false;
        let current = this.head;
        for(let i = 0; i < this.length ;i++){
            if(position == i){
                current.data = element;
                break;
            }
            current = current.next;
        }


    }

    LinkList.prototype.removeAt = function(position){
        //不对负数进行处理，直接报错
        if(position < 0 || position >= this.length) return null;
        let current = this.head;

        if(this.length == 1){
            this.head = null
            this.tail = null;
        }else{
            if(position === 0){
                this.head = current.next;
                this.head.prev = null;
            }else if(position == this.length - 1){
                this.tail = this.tail.prev;
                this.tail.next = null;
            }else{
                let prev = null;
                for(let i = 0; i < this.length ;i++){
                    if(position == i){
                        prev.next = current.next;
                        current.prev = prev;
                        break;
                    }
                    prev = current;
                    current = current.next;
                    
                }
            }
        }

       

        this.length--;

    }

    LinkList.prototype.remove = function(element){
        let index = this.indexOf(element);
        return this.removeAt(index)
    }

    LinkList.prototype.isEmpty = function(){
        return !this.length
    }

    LinkList.prototype.size = function(){
        return this.length
    }

    LinkList.prototype.toString = function(){
        let current = this.head;
        let ListString = '';
        while(current){
            ListString += current.data+ ' ';
            current = current.next;
        }

        return ListString;
    }
}

let list = new LinkList();
list.append('aaa');
list.append('bbb');
list.append('ccc');
list.append('ddd');
list.get(1);
console.log(list.toString())