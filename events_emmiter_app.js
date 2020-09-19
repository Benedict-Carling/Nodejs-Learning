const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial',(num1,num2)=>{
    console.log(num1+num2);
});

eventEmitter.emit('tutorial',1,2);

class Person extends EventEmitter{
    constructor(name){
        super();
        this._name = name;
    }
    get name(){
        return this._name
    }
}

let lorena = new Person('Lorena');
let ben = new Person('Ben');

ben.on('name',()=>{
    console.log('my name is '+ ben.name);
})

lorena.on('name',()=>{
    console.log('my name is '+ lorena.name);
})

ben.emit('name');
lorena.emit('name');