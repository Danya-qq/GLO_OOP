class First {
    constructor(){}
    hello(){
        console.log('Привет! Я имя родителя!');
        
    }
}

class Second extends First {
    constructor(){
        super()
    }
    hello(){
        super.hello()
        console.log('А я наследуемый метод');   
    }
  

}

console.dir(Second);

let a = new First;
a.hello();
let b = new Second;
b.hello();





