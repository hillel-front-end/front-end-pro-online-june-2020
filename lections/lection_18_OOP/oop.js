class Parent {
    constructor(name, surname) {
        this.parentKey = 'value';
        this.name = name;
        this.surname = surname;
    }

    run() {
        console.log('run')
    }
}

class Child extends Parent {
    /*
    constructor(...args){
        super(...args);
    }
    */
   // super =======> Parent.constructor
    constructor(name, friends, sur) {
        if (!sur) {
            sur = 'DefaultSurname'
        }
        super(name, sur);
        this.childKey = 'someValue';
        this.friends = friends;
    }
}

let child = new Child('ExampleName', ['1', '2', '3'], 'SurnameExample');

// console.log(child)
// child.run();













// not usable
// class Vehicle {
//     constructor(speed, seats) {
//         this.speed = speed;
//         this.seats = seats;
//     }

//     drive(){}
// }

// class Car extends Vehicle {
//     constructor(speed, engine, seats, wheels) {
//         super(speed, seats);

//         this.engine = engine;
//         this.wheels = wheels;
//     }
//     climatization(){}
// }

// class Mercedes extends Car {
//     constructor(model, speed, engine, seats, wheels) {
//         super(speed, engine, seats, wheels);

//         this.model = model;
//     }

//     mbFeature(){}
// }

// let instance = new Mercedes('E350', 210, null, 5, 4);

// console.log(instance);

// ------------------------------



class Vehicle {
    constructor(speed, seats) {
        this.speed = speed;
        this.seats = seats;
    }

    drive(){}
}

class Car extends Vehicle {
    constructor(speed, engine, seats, wheels) {
        super(speed, seats);

        if(engine) {
            this.engine = engine;
        }
        this.wheels = wheels;
    }
    climatization(){}
}

class Mercedes extends Car {
    constructor(model, configs) {
        // const speed = configs.speed || DEFAULT_SPEED;
        // const engine = configs.engine; // undefined
        // const seats = configs.seats || DEFAULT_SEATHS;
        // const wheels = configs.wheels || DEFAULT_WHEELS;

        // const cnfgs = Object.assign({}, Mercedes.getDefaultConfigs(), configs);
        const { speed, engine, seats, wheels } = Object.assign({}, Mercedes.getDefaultConfigs(), configs);
        // console.log(cnfgs)
        super(speed, engine, seats, wheels);
        this.model = model;
    }

    mbFeature(){}

    static getDefaultConfigs() {
        const DEFAULT_SPEED = 200;
        const DEFAULT_ENGINE= 'default';
        const DEFAULT_SEATHS = 5;
        const DEFAULT_WHEELS = 4;

        return {
            speed: DEFAULT_SPEED,
            seats: DEFAULT_SEATHS,
            wheels: DEFAULT_WHEELS,
            roof: true,
        };
    }
}

let instance = new Mercedes('E350', {
    speed: 210,
    engine: 'm272',
});

// -------------------------------------------------


// Destructuring

const data = {
    value: 10,
    x: 20,
    address: {
        city: 'City #10',
        street: 'Street #29'
    },
};

let value = 'super value';

let {
    example = '68075o-4',
    value: valueFromObject, 
    x, 
    address: { 
        city, 
        street 
    }  
} = data;

// console.log(example);
// console.log(valueFromObject);
// console.log(x);
// console.log(city);
// console.log(street);


// let valueFromObject = data.value;
// let x = data.x;
// let city = data.address.city;
// let street = data.address.street;


// ----------------------------------------------



class Customers {
    constructor(list, target) {
        this.source = list;
        this.target = target;
    }

    render(target) {
        if ((!target && !this.target) || !this.source) {
            return console.warn('no target or source')
        }
        this.#priorityTarget = target || this.target;
        this.#setTargetEvent(this.#priorityTarget);
        
        this.#priorityTarget.innerHTML += `${this.source.map((item, pos) => `<td data-pos="${pos}">${item}</td>`).join('')}`;
    }


    #priorityTarget = null;

    // private
    #setTargetEvent(target) { 
        target.addEventListener('click', event => {
            event.target.remove();

            const index = parseInt(event.target.dataset.pos);
            this.source.splice(index, 1);
        })
    }
}

let list = new Customers(['Name 1', 'Name 2', 'Name 3', 'Name 4', 'Name 5']);

window.addEventListener('load', () => {
    list.render(document.querySelector('#table-row'));
})