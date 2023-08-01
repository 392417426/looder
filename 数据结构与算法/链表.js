/*
相对于数组,链表有一些优点
内存空间不是必须连续的. 可以充分利用计算机的内存。实现灵活的内存动态管理 
链表不必在创建时就确定大小, 并且大小可以无限的延伸下去
链表在插入和删除数据时，时间复杂度可以达到O(1).相对数组效率高很多

相对于数组,链表有一些缺点:
链表访问任何一个位置的元素时,都需要从头开始访问.(无法跳过第一个元素访问任何一个元素)
无法通过下标直接访问元素，需要从头一个个访问,直到找到对应的元素.

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

    function Node(data){
        this.data = data;
        this.next = null
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

            current.next = newNode;
        }

        this.length++;
    }

    LinkList.prototype.insert = function(position,element){
        //不对负数进行处理，直接报错
        if(position < 0 || position > this.length) return false;
        let newNode = new Node(element);
        if(position === 0){
            newNode.next = this.head;
            this.head = newNode;
        }else{
            let current = this.head;
            for(let i = 0; i < this.length ;i++){
                if(position == i){
                    newNode.next = current.next;
                    current.next = newNode;
                    break;
                }

                current = current.next;
                
            }
        }
        this.length++;
    }

    LinkList.prototype.get = function(position){
        //不对负数进行处理，直接报错
        if(position < 0 || position > this.length) return false;
        let result = ''
        let current = this.head;
        for(let i = 0; i < this.length ;i++){
            if(position == i){
                result = current.data;
            }
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
        if(position < 0 || position > this.length) return false;
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
        if(position < 0 || position > this.length) return false;
        let current = this.head;
        if(position === 0){
            this.head = current.next;
        }else{
            let pre = null;
            for(let i = 0; i < this.length ;i++){
                if(position == i){
                    pre.next = current.next;
                    break;
                }
                pre = current;
                current = current.next;
                
            }
        }

        this.length--;

    }

    LinkList.prototype.remove = function(element){
        let current = this.head;
        if(this.head.data === element){
            this.head = current.next;
        }else{
            let pre = null;
            for(let i = 0; i < this.length ;i++){
                if(element == current.data){
                    pre.next = current.next;
                    break;
                }
                pre = current;
                current = current.next;
                
            }
        }

        this.length--;
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
list.remove('ccc')
console.log(list.toString())