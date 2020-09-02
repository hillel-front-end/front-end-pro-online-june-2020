class Parent {
    constructor(name) {
        this.name = name || '';

        var _value = 10;

        this.getValue = function() {
            return _value * 10;
        }
        this.__proto__.setValue = function(newValue){
            _value = newValue;
        }
    }

    getName() {
        console.log('get name ', Parent.getLimit());  

        let prefix = '_';


        return prefix + this.name;
    }

    run() {
        console.log('run');
    }

    static getLimit() {
        // console.log(this);
        return 1000 * this.getMod();
    }

    static getMod() {
        return 2;
    }
}

console.dir(Parent);

let parent = new Parent('Name');
parent.getName();
parent.run();

console.log(parent);


// --------------------------------------------
// ES Template strings

var value = 200;

function getName() {
    return 'Vasya' + ' Petrov';
}

// let str1 = 'hello ' + value + getName() + ' world';
// let str2 = "hello " + value + getName()  + " world";

// let str3 = `hello ${value}${getName()} world`;
// let str5 = `hello ${value + getName()}world`;
// let str6 = `hello ${value || ''}world`;

