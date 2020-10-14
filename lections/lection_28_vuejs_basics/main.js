// var app = new Vue({
//   el: '#app', // element
//   data: {
//     message: 'Hello world',
//     value: 0,
//     point: 3,
//     list: [1,23],
//     someValue: null,
//     info: {
//       someValue: null
//     }
//   }
// });

// setTimeout(() => {
//   app.someValue = 999;
//   // Vue.set(app.info, 'someValue', 600);
//   app.info.someValue = 600;

//   console.log(app);
// }, 1500)

// // ---------------------------------------

// var app2 = new Vue({
//   el: '#app-2',
//   data: {
//     className: 'active',
//     counter: 23,
//     divClassOpt: {
//       name1: true,
//       name2: true,
//       active: false,
//       hover: false,
//     },
//     listOfClasses: ['n1', 'n2']
//   }
// });

// setTimeout(() => {
//   app2.className = 'active';
// }, 1500)

// res = appearence  + 'font-size:' + value*3 + 'px';

// setInterval(() => {
//  app2.value = Math.floor(Math.random() * 60)
// }, 1000)

// // // ---------------------------------------

// var app3 = new Vue({
//   el: '#app-3',
//   data: {
//     seen: true,
//     info: 'Hello Info!'
//   }
// })

// setTimeout(() => {
//   app3.seen = true;
// }, 2000)


// // // ---------------------------------------

// var app4 = new Vue({
//   el: '#app-4',
//   data: {
//     arr: [
//       1, 8, 9, 6
//     ],
//     item: [1, 2],
//     list: [
//       {
//         title: 'jasnf'
//       },
//       {
//         text: ''
//       },
//       {
//         text: 'Создать что-нибудь классное'
//       },
//       {
//         text: 'Создать что-нибудь классное'
//       },
//       {
//         text: 'Создать что-нибудь классное'
//       }
//     ],
//     info: {
//       x: 10,
//       y: 20,
//       z: 50
//     }
//   },
//   methods: {
//     getMetList() {
//       console.log('START');
//       return this.list.filter(item => item.text);
//     }
//   },
//   computed: {
//     getMetListComputed() {
//       console.log('START computed');
//       return this.list.filter(item => item.text);
//     }
//   }
// })


// // // ---------------------------------------

var app5 = new Vue({
  el: '#app-5',
  data: {
    title: '<h1>Super title</h1>',
    text: '!',
    paragraph: {
      active: false,
    },
    list: [
      "name 1",
      "name 8",
      "name 7",
      "name 2",
      "name 3",
      "name 4",
    ],
    limit: 10,
    isDisabledRange: false
  },
  methods: {
    onInput(event) {
      if (this.limit < this.list.length) {
        this.list.length = this.limit;
      }
      // console.log(event)
      // this.limit = event.target.value;
    },
    onRemove(key) {
      this.list.splice(key, 1);
    },
    onButtonClick() {
      console.log('button CLICK');
      this.text += ' !'
    },
    onMouseover() {
      this.paragraph.active = true;
    },
    onMouseOut() {
      this.paragraph.active = false;
    },
    onContextMenu() {
      console.log('CONTEXTMENU', arguments)
    },
    onContainerClick() {
      console.log('CONTAINER CLICK');
    }
  }
})

setInterval(() => {
  if (app5.list.length >= app5.limit) {
    return;
  }
  app5.list.push(`name - ${Math.floor(Math.random()*30)}`);
}, 500);
