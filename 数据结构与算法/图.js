/*
什么是图？
图结构是一种与树结构有些相似的数据结构.
福图论是数学的一个分支,并且, 在数学的概念上,树是图的一种
它以图为研究对象，研究 顶点 和 边 组成的图形的数学理论和方法 
主要研究的目的是事物之间的关系,顶点代表事物,边代表两个事物间的关系

实现图的封装和方法
addVertex():添加顶点
addEdge():添加边
bfs():广度优先搜索算法
dfs():深度优先搜索算法

广度优先搜索算法的思路:
广度优先算法会从指定的第一个顶点开始遍历图,先访问其所有的相邻点,就像一次访问图的一层
换句话说，就是先宽后深的访问顶点

深度优先搜索的思路:
深度优先搜索算法将会从第一个指定的顶点开始遍历图,沿着路径知道这条路径最后被访问了
接着原路回退并探索一条路径
*/

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

function Graph(){
    this.vertexes = [];
    this.edges = {};

    Graph.prototype.addVertex = function(v){
        this.vertexes.push(v)
        this.edges[v] = [];
    }

    Graph.prototype.addEdge = function(v1,v2){
        this.edges[v1].push(v2)
        this.edges[v2].push(v1)
    }

    Graph.prototype.toString = function(){
        let result = ''
        this.vertexes.forEach(item => {
            result += item + '->' 
            result += this.edges[item].join(',')
            result += '\n'
        })

        return result
    }

    //初始化颜色为白色，表示没有被探测或访问，灰色表示为已探测未访问，黑色表示已探测已访问
    Graph.prototype.initColor = function(){
        var colors = [];
        this.vertexes.forEach(item => {
            colors[item] = 'white'
        })

        return colors;
    }

    //广度优先搜索算法
    Graph.prototype.bfs = function(initV,handler){
        var colors = this.initColor();
        //创建队列
        let queue = new Queue();
        //将顶点放入队列
        queue.enqueue(initV);

        while(!queue.isEmpty()){
            //从队列中取出顶点
            var v = queue.dequeuue();
            //获取和该顶点相连的另外顶点
            var vlist = this.edges[v];
            //设置该顶点为已探测
            colors[v] = 'grey';
            vlist.forEach(item  => {
                if(colors[item] == 'white'){
                    colors[item] = 'grey';
                    queue.enqueue(item)
                }
            })

            handler(v);
            //设置该顶点为已访问
            colors[v] = 'black'
        }
    }

    //深度优先搜索算法
    Graph.prototype.dfs = function(initV,handler){
        var colors = this.initColor();
        this.dfsVisit(initV,colors,handler)
    }

    Graph.prototype.dfsVisit = function(v,colors,handler){
        colors[v] = 'grey';
        handler(v);
        
        var vList = this.edges[v];
        vList.forEach(item => {
            if(colors[item] == 'white'){
                this.dfsVisit(item,colors,handler);
            }
        })

        colors[v] = 'black';
    }
    
}


var g = new Graph();

var myVertexes = ['A','B','C','D','E','F','G','H','I'];
myVertexes.forEach(item => {
    g.addVertex(item)
})

g.addEdge('A','B')
g.addEdge('A','C')
g.addEdge('A','D')
g.addEdge('C','D')
g.addEdge('C','G')
g.addEdge('D','G')
g.addEdge('D','H')
g.addEdge('B','E')
g.addEdge('B','F')
g.addEdge('E','I')
console.log(g.dfs(myVertexes[0],function(v){
    console.log(v)
}))