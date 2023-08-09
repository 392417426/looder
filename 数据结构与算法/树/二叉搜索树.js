/*
二叉搜索树( BST，Binary Search Tree)，也称二叉排序树或二叉查找树
二叉搜索树是一颗二叉树,可以为空;
如果不为空，满足以下性质:
非空左子树的所有键值小于其根节点的键值
非空右子树的所有键值大于其根节点的键值
左、右子树本身也都是二叉搜索树

二又搜索树作为数据存储的结构由重要的优势:
可以快速地找到给定关键字的数据项 并且可以快速地插入和删除数据项

非平衡树:
比较好的二又搜索树数据应该是左右分布均匀的 但是插入连续数据后,分布的不均匀,我称这种树为非平衡树 对于一棵平衡二叉树来说,插入/查找等操作的效率是O(logN) 对于一棵非平衡二叉树,相当于编写了一个链表,查找效率变成了O(N)

insert(key): 向树中插入一个新的键
search(key): 在树中查找一个键，如果节点存在，则返回true ; 如果不存在，则返回false。
inOrderTraverse() : 通过中序遍历方式遍历所有节点。
preOrderTraverse() : 通过先序遍历方式遍历所有节点
postOrderTraverse() : 通过后序遍历方式遍历所有节点。
min(): 返回树中最小的值/键。
max(): 返回树中最大的值/键
remove(key) : 从树中移除某个键

*/

function BinarySearchTree(){
    this.root = null;
    function Node(key){
        this.key = key;
        this.left = null;
        this.right = null;
    }

    BinarySearchTree.prototype.insert = function(key){
        let newNode = new Node(key);
        if(this.root === null){
            this.root = newNode; 
            return
        }

        this.insertNode(this.root,newNode);
        
    }

    BinarySearchTree.prototype.insertNode = function(node,newNode){
        if(node.key > newNode.key){
            if(node.left === null){
                node.left = newNode;
            }else{
                this.insertNode(node.left,newNode)
            }
        }else{
            if(node.right === null){
                node.right = newNode;
            }else{
                this.insertNode(node.right,newNode)
            }
        }
    }

    BinarySearchTree.prototype.search = function(key){
        let node = this.root;

        while(node !== null){
            if(node.key < key){
                node = node.left;
            }else if(node.key > key){
                node = node.right;
            }else{
                return true;
            }
        }

        return false
    }

    BinarySearchTree.prototype.remove = function(key){
        let current = this.root;
        let parent = null;
        let isLeftChild = true;
        
        while (current.key !== key){
            parent = current;

            if(key < current.key){
                isLeftChild = true;
                current = current.left;
            }else{
                isLeftChild = false;
                current = current.right;

            }

            if(current === null) return false;
        }
        
        //删除的节点是叶子节点
        if(current.left === null && current.right === null){
            if(current === this.root){
                this.root = null;
            }else{
                if(isLeftChild){
                    parent.left = null;
                }else{
                    parent.right = null;
                }
            }
        }else if(current.left === null){
            if(current === this.root){
                this.root = current.right;
            }else if(isLeftChild){
                parent.left = current.right
            }else{
                parent.right = current.right
            }
        }else if(current.right === null){
            if(current === this.root){
                this.root = current.left;
            }else if(isLeftChild){
                parent.left = current.left
            }else{
                parent.right = current.left
            }
        }else{
            let successor = this.getSuccessor(current);
            if(current === this.root){
                this.root = successor;
            }else if(isLeftChild){
                parent.left = successor
            }else{
                parent.right = successor
            }
            successor.left = current.left;
        }

        return true;
    }

     this.getSuccessor = function(delNode){
        let successerNode = delNode;
        let successerParent = delNode;
        let current = delNode.right;
        while(current !== null){
            successerParent = successerNode;
            successerNode = current;
            current = current.left;
            
        }

        if(successerNode !== delNode.right){
            successerParent.left = successerNode.right;
            successerNode.right = delNode.right;
        }


        return successerNode;
    }



    BinarySearchTree.prototype.preOrderTraverse = function(handler){
        this.preOrderTraversalNode(this.root,handler)
    }

    BinarySearchTree.prototype.preOrderTraversalNode = function(node,handler){
        if(node === null){
            return;
        }

        handler(node.key);
        this.preOrderTraversalNode(node.left,handler)
        this.preOrderTraversalNode(node.right,handler)
    }

    BinarySearchTree.prototype.inOrderTraverse = function(handler){
        this.inOrderTraversalNode(this.root,handler)
    }

    BinarySearchTree.prototype.inOrderTraversalNode = function(node,handler){
        if(node === null){
            return;
        }

        this.inOrderTraversalNode(node.left,handler)
        handler(node.key);
        this.inOrderTraversalNode(node.right,handler)
    }

    BinarySearchTree.prototype.postOrderTraverse = function(handler){
        this.postOrderTraversalNode(this.root,handler)
    }

    BinarySearchTree.prototype.postOrderTraversalNode = function(node,handler){
        if(node === null){
            return;
        }

        this.postOrderTraversalNode(node.left,handler)
        this.preOrderTraversalNode(node.right,handler)
        handler(node.key);
    }

    BinarySearchTree.prototype.min = function(){
        let node = this.root;
        let key = null;
        while(node !== null){
            key = node.key
            node = node.left
        }

        return key
    }

    BinarySearchTree.prototype.max = function(){
        let node = this.root;
        let key = null;
        while(node !== null){
            key = node.key
            node = node.right
        }

        return key
    }
}

let bst = new BinarySearchTree();
bst.insert(11)
bst.insert(7)
bst.insert(15)
bst.insert(5)
bst.insert(3)
bst.insert(9)
bst.insert(8)
bst.insert(10)
bst.insert(13)
bst.insert(12)
bst.insert(14)
bst.insert(20)
bst.insert(18)
bst.insert(25)
bst.insert(6)
bst.remove(7)
bst.inOrderTraverse(function(res){
    console.log(res)
})
