const app = new Vue({
  el: "#app",
  data: {
    list: [
      {
        id: 1,
        name: "《算法导论》",
        date: "2006-9",
        price: 85.0,
        count: 1,
      },
      {
        id: 2,
        name: "《UNIX编程艺术》",
        date: "2006-2",
        price: 59.0,
        count: 1,
      },
      {
        id: 3,
        name: "《编程珠玑》",
        date: "2008-10",
        price: 39.0,
        count: 1,
      },
      {
        id: 4,
        name: "《代码大全》",
        date: "2006-3",
        price: 128.0,
        count: 1,
      },
    ],
  },
  methods: {
    reduce(index) {
      this.list[index].count--;
    },
    add(index) {
      this.list[index].count++;
    },
    remove(index) {
      this.list.splice(index, 1);
    },
    showPrice(price) {
      return "¥" + price.toFixed(2);
    },
  },
  computed: {
    totalPrice() {
      let totalPrice = 0;
      this.list.forEach((item) => {
        totalPrice += item.price;
      });
      return this.showPrice(totalPrice);
    },
  },
});
