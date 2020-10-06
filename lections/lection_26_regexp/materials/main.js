console.log('lection_26');


var pattern = /RegExp/; // RegExp

// search
// str = `so23me9860 пsOMEивет  шаблон-1 привет шаблон-2 шаблон-3 как ждела шаблон шаблон-!`;
// console.log(str.search(/шаблон/g)); // 22
// console.log(str.indexOf("шаблон")); // 22

str = `Hello WorLd! 199WoRld World 97756 8world! 2019 world!asd helloWo 2013`;
// match
// var result = str.match(/world/);
// var result = str.match(/world/i);
// var result = str.match(/world/);
// console.log(result);

// //match /g - global
// result = str.match(/world/g);
// console.log(result);

// split

// console.log("10-23-1991".split('-'));
// console.log("10-23-1991".split(/-/));
// console.log("10-23_1991".split(/-|_/));
// console.log("18:35:24::234".split(/:/));



// replace
// console.log("10-23-1991".replace(/\d\d/, '**'));



/*
 - классы и спецсимволы
 - диапазоны и наборы
 - квантификаторы +, *, ? и {n}
 - Альтернация
*/

var str = "1988 год Как делаЇ? шаблон-12345678 Что .234 wor12ds? 7 Когда нет ничего в шаблон-18 лет. 1234567"
// var result = str.match(/\d\d\d\d/g);
// var result = str.match(/\d{2,4}/g);
// var result = str.match(/шаблон-\d{2,4}/g);

// str = 'Hello  23.445 world - 3.33333333, 5.7777777777777, Hello world 4.343434343434343434';
// str = `Привет Lorem Ipsum 12312 is simply dummy text of the printing and typesetting industry. 
// Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
// when an unknown printer took a galley of type and scrambled it to make a type specimen book.'`

// var result = str.match(/\w{1,}/gi);

// str =`alknaslkd hw wo
// uld        wold wuold  A1234 o \n das howoudasd as,dmas.,m asmd.,asm das./d /.as,d.? asd`
// var result = str.match(/\s/gi);
// console.log(str)
// console.log(result)


str = 'Hello world world; Hello - Hey how are you? test';
// var result = str.match(/\bworld\b/gi);
// var result = str.match(/^hello/gi);
// var result = str.match(/\btest$/gi);

// console.log(result)
// -----------------

// str = 'Hello world world; test-a test-b test-c test-66 test-2 test-u';

// var result = str.match(/test-[\dabcdef]/gi);    
// var result = str.match(/test-[\dabcdef]{1,2}/gi);
// var result = str.match(/test-[^26a]/gi);
// console.log(result)


/*
    {n}
    {n,m}
    {n,}
    {,m}

    + - {1,}
    * - {0,}
    ? - {0,1}
*/

// str = `<input type='text' class='border-r color-b' title='hover text' a='value'>`;
str = `<input>`;

// var result = str.match(/\w+='[\w\s-]+'/gi);
// var result = str.match(/<\w+[\w\s-'"_=]*>/gi);

// str = 'Привет мир! Привет свет! Привет фвыф! привет test! привет !'
// // var result = str.match(/Привет (мир|свет|сает)!/gi);
// var result = str.match(/Привет (test)?!/gi);
// console.log(result)

// str = 'Номер-13 #16 #-17 17-номер'
// var result = str.match(/номер-\d+|#\d+|#-\d+|\d+-номер/gi);
// console.log(result)


// str = 'Фраза 1 Фраза_1 Фраза1'
// var result = str.match(/фраза.\d/gi);
// console.log(result)




// -----------------
// . ? [ ] { } ^ \ / |
// \. \? \/ \| \\
// var str = `Hello ? . [ ] { } ^ / \\ | world`;
// console.log(result)

// var str = "http://localhost.com/test?name=super";
// var result = str.match(/http:\/\/localhost\.com\/test\?name=super/gi);
// console.log(result);

/*
        \b - [ \t?!.,;-]
        \d - [0-9]
        \D - [^0-9]
        \w - [0-9a-zA-Z_]
        \W - [^0-9a-zA-Z_]
        \s - [ \f\n\r\t\v]
        \S - [^ \f\n\r\t\v]
*/

var str = "sychov.saveliy@gmail.com";
var result = str.match(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi);
var result = str.match(/[A-Z0-9._%+-]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,8}[A-Z]{2,63}$/gi);
var result = str.match(/.*gi/);
console.log(result);

