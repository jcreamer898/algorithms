enum PromiseState {
    Pending = 0,
    Resolved = 1,
    Rejected = 2,
}

type PromiseResolver<T> = (value: T) => PromiseResolver<T> | void; 
type PromiseExecutor<T> = (resolver: PromiseResolver<T>, rejector: PromiseResolver<Error| any>) => void;

class CustomPromise<T = any> {
    state: PromiseState;

    resolveFns: PromiseResolver<T>[] = [];
    rejectFns = [];

    constructor(promiseFn: PromiseExecutor<T>) {
        this.state = PromiseState.Pending;
        
        const resolver = this.createResolve();
        const rejector = this.createRejector();

        try {
            promiseFn(resolver, rejector);
        } catch(e) {
            rejector(e);
        }

        
        return this;
    }

    then(thenFn, catchFn) {
        if (typeof thenFn === "undefined") {
            thenFn = (value) => {
                return value;
            };
        }

        if (typeof catchFn === "undefined") {
            catchFn = (reason) => {
                return CustomPromise.reject(reason);
            };
        }

        return new CustomPromise((resolve, reject) => {
            this.resolveFns.push(() => {
                (result) => {
                    try {
                        // Get result after the promise is successed.
                        let x = thenFn(result);
                        
                        // If x is an instance of a promise, continue to call the `.then` method
                        if(x instanceof CustomPromise) {
                            x.then(resolve, reject)
                            return;
                        }
                        
                        resolve(x);
                    } catch(err) {
                        reject(err)
                    }
                }
            });

            this.rejectFns.push((reason) => {
                try {
                    let x = catchFn(reason);
                    
                    if(x instanceof CustomPromise) {
                        x.then(resolve, reject)
                        return;
                    }
                    
                    resolve(x);
                } catch(err) {
                    reject(err)
                }
            });
        });
    }

    catch(fn) {
        this.rejectFns.push(fn);
        return this;
    }

    private createResolve<T>(): PromiseResolver<T> {
        return (value: T) => {
            this.resolveFns.forEach(() => {

            });
        }
    }

    private createRejector() {
        return (err: Error | any) => {

        }
    }

    static reject(reason) {
        return new CustomPromise((resolve, reject) => {
            reject(reason);
        })
    }
}

new CustomPromise((resolve, reject) => {
    require('fs').readFile('utf.txt', (err, text) => {
        if (err) {
            reject(err);
            return;
        }
        
        resolve(text);
    });
});