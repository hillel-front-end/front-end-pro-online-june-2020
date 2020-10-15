
Vue.component('buttons-list', {
  // props: ["originalList"],
  props: {
    originalList: Array
  },
  data(){
    return {
      localList: [...this.originalList],
      number: 100,
      relatedNumber: 0
    }
  },
  methods: {
    onButtonClone(item, key) {
      this.localList.splice(key, 0, item);
    },
    update() {
      this.$forceUpdate()
    },
    onIncrease() {
      this.number++;
      // this.list = data;
      // this.spinner = true;
      // this.$nextTick(() => {
      //   this.spinner = false;
      // })
    },
    onRelatedIncrease(){
      this.relatedNumber++;
    }
  },
  computed: {
    list() {
      return this.$props.originalList;
    }
  },
  watch: {
    originalList(newList) {
      this.localList = newList;
    }
  },
  beforeCreate() {
    console.log('beforeCreate');
    // debugger;
  },
  created() {
    console.log('created');
    // debugger;
    // fetch('/products').then(resp => resp.json()).then(data => this.list = data)
  },
  beforeMount() {
    console.log('beforeMount');
    // debugger;
  },
  mounted() {
    console.log('mounted');
    // debugger;
  },
  beforeUpdate() {
    console.log('beforeUpdate');
    this.number *= 10;
    this.relatedNumber++;
    // debugger;
  },
  updated() {
    console.log('update');
    // debugger;
  },
  template: `
  <div>
    <span @click="onIncrease">Number: {{ number }}</span> related: {{ relatedNumber }}
    <br />
    <button v-for="(item, index) in localList" :key="index" @click="onButtonClone(item, index)">
    {{ item  }}
    </button>
  </div>
  `,
});


Vue.component('items-remove-action', {
  // props: ["originalList"],
  props: {
    originalList: Array
  },
  data(){
    return {
      localList: [...this.originalList]
    }
  },
  methods: {
    onItemListRemove(key) {
      this.localList.splice(key, 1);
      this.onSend();
    },
    onSend() {
      // call something on parent
      this.$emit('listupdate', this.localList);
    }
  },
  computed: {
    // list() {
    //   return this.$props.originalList;
    // }
  },
  template: `
  <div>
    <ul>
      <li v-for="(item, key) in localList" @click="onItemListRemove(key)">
          {{ item }}
      </li>
    </ul>
    <button @click="onSend">Send updated data to origin</button>  
  </div>
  `,
});


var app = new Vue({
  el: '#app',
  data: {
    list: [1, 2, 3, 4, 5, 6]
  },
  methods: {
    onListUpdate(newList) {
      if(!newList) return;

      this.list = newList;
    }
  }
});

// setTimeout(() => {
//   app.$mount('#app');
// }, 2000)





























// function

function sum(a, b, c) {
  let x = 10;
  let y = 20;

  return a + b + c;
}

// fn call
sum(5, 9, 12);

// // component

// Vue.component('sum', {
//   props: ["a", "b", "c"],
//   data: {
//     x: 10,
//     y: 20
//   },
//   template: `a + b + c`
// });

// component call

// <sum :a="5" :b="9" :c="12"></sum>


// var obj = {
//   x: 10
// }

// function log(data) {
//   var copyData = {...data};
//   copyData.akjfsnlsakf = 100;
//   console.log('inner', copyData)
// }


// log(obj)

// console.log(obj)