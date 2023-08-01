function LinkList(){
    this.head = null;
    this.length = 0;

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