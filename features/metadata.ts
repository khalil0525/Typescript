import 'reflect-metadata'
@printMetadata
class Plane  {
    color:string =  'red';
    @markFunction('hi there')
    
    fly(): void {
        console.log("vrrrrrr")
    }
}


function markFunction(secretInfo: string){
    return function(target: Plane, key: string){
        Reflect.defineMetadata('secret', secretInfo, target, key)
    }
}

function validateBody(secretInfo: string){
    return function(target: Plane, key: string){
        Reflect.defineMetadata('secret', secretInfo, target, key)
    }
}

function printMetadata(target: typeof Plane){
    for(let key in target.prototype){
       const secret =  Reflect.getMetadata('secret', target.prototype, key)
       console.log(secret)
     
    }
}

function controller(target: typeof Plane){
    for(let key in target.prototype){
       const path =  Reflect.getMetadata('secret', target.prototype, key)
       const middleware = Reflect.getMetadata('middleware', target.priority)
       console.log(secret)
       router.get(path, target.prototype[key])
    }
}
// Reflect.defineMetadata('note','hi there', plane)
// Reflect.defineMetadata('height',10, plane)
// Reflect.defineMetadata('note', 'hi there', plane, 'color')

// const note = Reflect.getMetadata('note', plane)
// const note = Reflect.getMetadata('note', plane, 'color')
// const height = Reflect.getMetadata('height', plane,)
// console.log(note)
// console.log(height)

