'use strict'

const arrImage = {
    template:
    `
    <div v-for="(arr,index) in array" >
        <h3>{{ arr.title }}</h3>
        {{index}}
        <img :src="arr.img" :alt="arr.imgName">
        <button @click="deleteButton(index)" > Удалить изображение </button>
    </div>
    `,
    props: {array: Object},

};

let app = Vue.createApp ({
    data() {
        return {
            array: [{
                title: "Название картинки1",
                img: "https://picsum.photos/300/300",
                imgName: "картинка1"
            },
            {
                title: "Название картинки2",
                img: "https://picsum.photos/300/300",
                imgName: "картинка2"
            },{
                title: "Название картинки3",
                img: "https://picsum.photos/300/300",
                imgName: "картинка3"
            },{
                title: "Название картинки4",
                img: "https://picsum.photos/300/300",
                imgName: "картинка4"
            }]
        };
    },
    methods: {
        deleteButton(index) {
            this.array.splice(index, 1);
        }
    }
});

app.component("arr-image", arrImage);

app.mount("#hw444");