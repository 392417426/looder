const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

function runMicroTask(callback){
    if(process && process.nextTick){
        process.nextTick(callback)
    }else if(MutationObserver){
        const p = document.createElement('p');
        const observer = new MutationObserver(callback)
        
        observer.observe(p,{
            childList:true
        })

        p.innerHTML = 1;
    }else{
        setTimeout(callback,0);
    }
    
}

class myPromise{
    constructor(executor){
        this._state = PENDING;
        this._value = '';
        this._handlers = [];
        try{
            executor(this._resolve.bind(this),this._reject.bind(this))
        }catch(error){
            this._reject(error)
        }
        
    }

    _pushHandler(executor,state,resolve,reject){
        this._handlers.push({
            executor,
            state,
            resolve,
            reject
        })
    }

    _runHandlers(){
        if(this._state === PENDING) return;

        while(this._handlers[0]){
            this._runOneHandler(this._handlers[0])
            this._handlers.shift()
        }
    }

    _runOneHandler({executor,state,resolve,reject}){
        if(this._state !== state) return;

        if(typeof executor !== 'function'){
            this._state === FULFILLED ? resolve(this._value) : reject(this._value);
            return;
        }

        try{
            const result = executor(this._value);
            resolve(result)
        }catch(error){
            reject(error)
        }
    }

    then(onFulfilled,onRejected){
        return new myPromise((resolve,reject) => {
            this._pushHandler(onFulfilled,FULFILLED,resolve,reject);
            this._pushHandler(onRejected,REJECTED,resolve,reject);
            this._runHandlers();
        })
    }

    _changeState(state,data){
        if(this._state !== PENDING) return;
        this._state = state;
        this._value = data;
        this._runHandlers();
    }

    _resolve(data){
        this._changeState(FULFILLED,data)
    }

    _reject(reason){
        this._changeState(REJECTED,reason)
    }


}

let promise = new myPromise((resolve,reject) => {
    setTimeout(() => {
        resolve('asfsf')
    }, 100);
    
})

promise.then(function A1(res){
    console.log(res,1111)
},function A2() {

})

promise.then('aaaaa')


console.log(promise)