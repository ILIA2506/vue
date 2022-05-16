'use strict'

let goods = [
    {
       title: "Пианино",
       price: 3000,
       count: 0
    },
    {
       title: "Гитара",
       price: 1200,
       count: 40
    },
    {
       title: "Барабаны",
       price: 2700,
       count: 12
    },
    {
       title: "Флейта",
       price: 900,
       count: 50
    },
    {
       title: "Арфа",
       price: 3400,
       count: 5
    }
 ];


Vue.createApp({
        data() {
            return {
                goods
            }
        },
        computed: {
            function () {
                // return this.goods.count.sort((a, b) => a.count.localeCompare(b.count));
                // return.this.count
                // return g1.count - g2.count;
                   return this.goods.sort(sortedByCount);
            },
            }
    }).mount("#homework2");