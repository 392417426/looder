/*
集合通常是由一组无序的,不能重复的元素构成,例如es6中的set

add(value): 向集合添加一个新的项。
remove(value) : 从集合移除一个值。
has(value): 如果值在集合中，返回true，否则返回false。
clear() : 移除集合中的所有项
size() : 返回集合所包含元素的数量。与数组的length属性类似。
values() : 返回一个包含集合中所有值的数组。
union():求两个集合的并集
intersection（）求两个集合的交集
difference()求差集
subSet（）验证一个给定集合是否是另一集合的子集。
并集 : 对于给定的两个集合，返回一个包含两个集合中所有元素的新集合
交集 :对于给定的两个集合，返回一个包含两个集合中共有元素的新集合.
差集:对于给定的两个集合，返回一个包含所有存在于第一个集合且不存在于第二个集合的元素的新集合。
子集: 验证一个给定集合是否是另一集合的子集。

*/

function Set(){
    this.items = {};

    Set.prototype.add = function(value){
        if(this.has(value)){
            return false;
        }
        this.items[value] = value;
        return true;
    }

    Set.prototype.has = function(value){
        return this.items.hasOwnProperty(value);
    }

    Set.prototype.remove = function(value){
        if(!this.has(value)){
            return false;
        }
        delete this.items[value]
        return true;
    }

    Set.prototype.clear = function(value){
        this.items = {};
    }

    Set.prototype.values = function(value){
        return Object.values(this.items);
    }

    Set.prototype.size = function(){
        return this.values().length;
    }

    Set.prototype.union = function(otherSet){
        let unionSet = new Set();
        this.forEach(item => {
            unionSet.add(item)
        })

        otherSet.forEach(item => {
            unionSet.add(item)
        })
        return unionSet

    }

    Set.prototype.intersection = function(otherSet){
        let intersectionSet = new Set();
        this.forEach(item => {
            if(otherSet.has(item)){
                intersectionSet.add(item)
            }
        })

        return intersectionSet;
    }

    Set.prototype.difference = function(otherSet){
        let differenceSet = new Set();

        this.forEach(item => {
            if(!otherSet.has(item)){
                differenceSet.add(item)
            }
        })

        return differenceSet;
    }

    Set.prototype.difference = function(otherSet){
        let differenceSet = new Set();

        this.forEach(item => {
            if(!otherSet.has(item)){
                differenceSet.add(item)
            }
        })

        return differenceSet;
    }

    Set.prototype.subSet = function(otherSet){
        let flag = true;
        this.forEach(item => {
            if(!otherSet.has(item)){
                flag = false;
            }
        })

        return flag
    }

    Set.prototype.forEach = function(fn){
        let values = this.values();
        values.forEach(item => {
            fn.call(null,item)
        })

    }

    
}

let setA = new Set();
setA.add(1)
setA.add(2)
setA.add(3)

let setB = new Set();
setB.add(3)
// setB.add(4)
// setB.add(5)

console.log(setB.subSet(setA))

