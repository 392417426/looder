Function.prototype.bind = function(obj){
    let _this = this;
    let args = Array.from(arguments).slice(1);
    let fn = function(){
        let args2 = Array.from(arguments)
        _this.apply(obj,args.concat(args2))
    }

    fn.prototype = Object.create(this.prototype)

    return fn
}

const a = function(a,b,c){
    console.log(a,b,c)
}


a.bind(null,'a')

a();
