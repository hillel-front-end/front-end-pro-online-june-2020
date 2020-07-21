var global_x = 'global_x';


function firstLevelOne(a, b) { 
    /*
        firstLevelOne.LexicalEnvironment = { 
            local_first: 'first_one', 
            additional: false,
            a: 1000,
            b: [1, 2, 3]
        };
        firstLevelOne.scope = [[Global]]
    */
    var local_first = 'first_one';
    let additional = false;
}

function firstLevelTwo() {
    /*
        firstLevelTwo.LexicalEnvironment = { 
            local_first: 'first_two',
            secondLevel: f
        };
        firstLevelTwo.scope = [[Global]]
    */
    var local_first = 'first_two';  
    var example_test_y = 60080;

    secondLevel();

    console.log('After changing', local_first);

    function secondLevel() {
        /*
            secondLevel.LexicalEnvironment = { 
                local_second: 'second_one'
            };
            secondLevel.scope = [[firstLevelTwo.LexicalEnvironment]];
        */
        var local_second = 'second_one';
       
        console.log(local_second, local_first, global_x); // разрешение переменных
        local_first = 'first_two_changed';

        // global_x - variable from Global scope
        // local_second - variable from current local scope
        // local_first - variable from closure with firstLevelTwo
        // debugger;


        /*
            if (secondLevel.LexicalEnvironment['local_second']) {
                return secondLevel.LexicalEnvironment['local_second'];
            } else {
                goto secondLevel.scope;
            }

        */
    }
}



// firstLevelOne(1000, [1, 2, 3]);
// global_x = 60;
// firstLevelTwo();


// -----------------------------------

var x = 'global x';
// f1();



function f1(){ // f1.LE = { x: 10 }, f2.scope = [[Global]]
    var x = 10;

    f2();
}

function f2(){ // f2.LE = {}, f2.scope = [[Global]]
    console.log(x);
}


// -----------------------------------


function factory(counter) {
    // let counter = 0;
    
    return function (){
        console.log('inner code', counter++);
        if (counter == 10) {
            counter = 0;
        }

        return counter;
    };
}

var step = factory(5);

// step();
// step();
// step();

// console.log(window.inner == step)


 // ---------------------------------


// hoisting
let example = 'example';
let local = 'global_local_example';

function f1(a, b){ 
                        // f1.LE = {a: 67, b: 'He', x: undefined, local: Temporary dead zone}
    var x = 1000;       // f1.LE = {a: 67, b: 'He', x: undefined, local: Temporary dead zone}
    let local = 'Local';// f1.LE = {a: 67, b: 'He', x: 1000, local: 'Local'}
    console.log(x + a)  // f1.LE = {a: 67, b: 'He', x: 1000, local: 'Local'}
    b = 'Exit';         // f1.LE = {a: 67, b: 'He', x: 1000, local: 'Local'}
    return a + b + x;   // f1.LE = {a: 67, b: 'Exit', x: 1000, local: 'Local'}
}

function f2(){}


var res = f1(67, 'He');
console.log(res);