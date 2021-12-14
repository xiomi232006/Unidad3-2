/*class Stack {
    //se define constructor
    constructor(){
        this.stack =[];
    }

    //se define metodo para agregar elementos a la apila
    push(element){
        this.stack.push(element);
        return this.stack;
    }
    //se define metodos para quitar elementos de la pila
    pop(){
        return this.stack.pop();
    }
    //retorna el ultimo valor ingresado a la píla,sin sacarlo de esta.
    peek(){
        return this.stack[this.stack.length -1];
    }
    //retorna el numero de elementos que contiene la pila
size(){
    return this.stack.length;
}
//muestra el contenido de a pila.
print(){
    console.log(this.stack);
   }
}

const stack =new Stack();
console.log(stack.size());
console.log(stack.push('John Cena'));//['John Cena']
console.log(stack.push('The Rock'));//['The Rock']
console.log(stack.size()); //2
stack.print(); //['John Cena' , 'The Rock]
console.log(stack.peek()); //'The Rock
console.log(stack.pop()); //'The Rock'
console.log(stack.peek()); //John Cena*/


/*
class Queue {
    //se define constructor
    constructor() {
        this.queue = [];
    }
 
    //se define metodo para agregar elementos a la cola
    enqueue(element){
        this.queue.push(element);
        return this.queue;
    }
    //se define metodo para quitar elemntos a la cola
    dequeue() {
        return this.queue.shift();
    }
    //se define metodo para ver el primer elemento de la cola
    peek(){
        return this.queue[0];
    }
    //se defiune metodo para ver la cantidad de elemetos de la cola
    size(){
        return this.queue.length;
    }
    //se define metodo para ver si la cola esta vacia
    isEmpty(){
        return this.queue.length ===0;
    }
    //se define metodos para ver los elemntos de la cola
    print(){
        return this.queue;
      }
  }

  const queue = new Queue();
  console.log(queue.enqueue('The Rock'));
  console.log(queue.enqueue('John Cena'));
  console.log(queue.enqueue('Stone Cold Steve Austin'));
  console.log(queue.denqueue());
  console.log(queue.peek());
  console.log(queue.isEmpty());
  console.log(queue.print());*/


  let exampleArray =[20,"okay",1,2,""];
  console.log(exampleArray[1]);// okay
  console.log(exampleArray.length); //5

  exampleArray.push("otro elemento");
  console.log(exampleArray); //[20,"okay,1,2,","otro elemto"]

  exampleArray.pop();
  console.log(exampleArray); //[20,"okay",1,2,""]