// Singleton pattern 
// https://www.codewars.com/kata/singleton-pattern/train/javascript

const Singleton = function(){
  const instance = Singleton.instance;
  if (instance) return instance;
  Singleton.instance = this;
};


// [JEDI LEVEL] Simple Web Framework #1: Create a basic router
// https://www.codewars.com/kata/588a00ad70720f2cd9000005/train/javascript

class Router {
    
    constructor() {
        this.routes = new Map();
    }  
        
    bind(url, method, action) {
        this.routes.set(url + ":" + method, action);
    }
    
    runRequest(url, method) {
        if (!this.routes.has(url + ":" + method)) {
            return "Error 404: Not Found";
        }
        return this.routes.get(url + ":" + method)();
    }
    
}
