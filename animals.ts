class Animal {
    name: string;
    age: number;
    sound: string;
  
    constructor(name: string, age: number, sound: string) {
      this.name = name;
      this.age = age;
      this.sound = sound;
    }
  
    makeSound(): void {
      console.log(`${this.name} says ${this.sound}`);
    }
  }
  
  class Mammal extends Animal {
    constructor(name: string, age: number, sound: string) {
      super(name, age, sound);
    }
  
    
  }
  
  class Bird extends Animal {
    constructor(name: string, age: number, sound: string) {
      super(name, age, sound);
    }
  
    
  }
  
  class Fish extends Animal {
    constructor(name: string, age: number, sound: string) {
      super(name, age, sound);
    }
  
    
  }
  
  
  const elephant = new Mammal('Ellie', 10, 'trumpet');
  elephant.makeSound();
  
  
  const penguin = new Bird('Penny', 5, 'squawk');
  penguin.makeSound();
  
  
  const shark = new Fish('Sam', 3, 'chomp');
  shark.makeSound();