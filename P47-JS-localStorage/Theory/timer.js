class Timer{
    constructor(count, onUpdateCount, onStop){
        this.count = count;
        this.iDinterval = null;
        this.onUpdateCount = onUpdateCount;
        this.onStop = onStop;
    }

    start(){
        //const that = this;

        this.iDinterval = setInterval(()=>{    
            if(this.count > 0){
                this.count--;
                this.onUpdateCount(this.count)
            }else{
                this.stop()  //clearInterval(this.iDinterval)
            }
            console.log(this.count)
        }, 1000)
        
    }
    stop(){
        console.log(this)
        clearInterval(this.iDinterval);
        this.onStop(this.count)
    }
}

//const timer = new Timer(5);

