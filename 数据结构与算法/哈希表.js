
function HashTable(){
    this.storage = [];
    this.count = 0;
    this.limit = 7;

    /*设计哈希函数
    1> 将字符串转成比较大的数字: hashCode
    2> 将大的数字hashCode压缩到数组范围(大小)之内
    */
    HashTable.prototype.hashFunc = function(str,size){
        let hashCode = 0;
        for(let i = 0; i < str.length;i++){
            hashCode = 37 * hashCode + str.charCodeAt(i);
        }

        return hashCode % size
    }

    //插入和修改方法
    HashTable.prototype.put = function(key,value){
        let index = this.hashFunc(key,this.limit);
        let bucket = this.storage[index];
        //判断bucket是否为空
        if(!bucket){
            bucket = [];
            this.storage[index] = bucket;
        }

        //判断是否修改数据
        for(let i = 0;i < bucket.length;i++){
            let tuple = bucket[i];
            if(tuple[0] == key){
                tuple[1] = value;
                return
            }
        }

        bucket.push([key,value]);
        this.count++;

        //判断是否需要扩容
        if(this.count > this.limit * 0.75){
            let newPrime = this.getPrime(this.limit * 2);
            this.resize(newPrime)
        }
    }

    //获取操作
    HashTable.prototype.get = function(key){
        let index = this.hashFunc(key,this.limit);
        let bucket = this.storage[index];
        if(!bucket) return null;

        for(let i = 0; i < bucket.length;i++){
            let tuple = bucket[i];
            if(tuple[0] == key){
                return tuple[1];
            }
        }

        return null;
    }

    //删除操作
    HashTable.prototype.remove = function(key){
        let index = this.hashFunc(key,this.limit);
        let bucket = this.storage[index];
        if(!bucket) return null;

        for(let i = 0; i < bucket.length;i++){
            let tuple = bucket[i];
            if(tuple[0] == key){
                bucket.splice(i,1);
                this.count--;

                if(this.limit > 7 && this.count < this.limit * 0.25){
                    let newPrime = this.getPrime(Math.floor(this.limit / 2));
                    this.resize(newPrime)
                }

                return tuple[1];
            }
        }

        return null;
    }

    HashTable.prototype.isEmpty = function(){
        return !this.count
    }

    HashTable.prototype.size = function(){
        return this.count
    }


    //哈希表扩容/缩容
    HashTable.prototype.resize = function(newLimit){
        let oldStorage = this.storage;
        this.storage = [];
        this.count = 0;
        this.limit = newLimit;

        for(let i = 0; i < oldStorage.length;i++){
            let bucket = oldStorage[i];
            if(!bucket) continue;
            for(let j = 0; i < bucket.length;j++ ){
                let tuple = bucket[j];
                this.put(tuple[0],tuple[1]);
            }
        }
    }

    //判断是否质数
    //特点：只能被1和自己整除
    HashTable.prototype.isPrime = function(num){
        let temp = parseInt(Math.sqrt(numm))
        for(var i  = 2;i < temp;i++){
            if(num % i == 0) return false
        }
        return true;
    }

    //获取质数的方法
    HashTable.prototype.getPrime = function(num){
        while(!this.isPrime(num)){
            num++
        }
        return num;
    }
}

let ht = new HashTable();
ht.put('abc',123)
ht.put('cba',521)
ht.put('mba',455)
// ht.remove('abc')
console.log(ht.get('abc'))