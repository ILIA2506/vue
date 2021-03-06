'use strict'

// тут мы будем перечислять все данные... все-все-все: обработчики событий, переменные и тд.
// Мы указываем параметры инициализации компонента, свойства за значениями которых будет следить
// система реактивности vue, методы - обработчики событий и тд.

// Все компоненты vue - ОБЪЕКТЫ!
let rootComponentOption = {
// в компоненте data - метод, который возвращает объект
// свойства, перечисленный в объекте попадают в систему  реактивности vue
    data() {
        return{
            userInput: "",
            book: {
                title: "vue js",
                author: "js developer",
                otherAuthors: ["junior1", "junior2"],
                img: "https://picsum.photos/id/44/200/300"
            }        }
    }, 
    computed: {/* вычисляемые свойства */
        userOutput() { // метод, который возвращает значение этого свойства
            // this - ссылка на текущий компонент!
            // обращаться к свойствам из data нужно через this
            return this.userInput.length < 1 ? "Вы ничего не ввели" : this.userInput
    },
    userHtmlOutput() {
        let res = this.userInput.length < 1 ? "Вы ничего не ввели" : this.userInput
        return `<span>${res}</span>`;
    }    
}
};

// создание приложения vue 
// фабричный метод createApp создает экземпляр vue (new Vue)
let app = Vue.createApp(rootComponentOption);

// монтирование приложения в html
// метод mount возвращает ссылку на корневой компонент приложения, который и является
// связующим звеном между js и html (ViewModel)
let vm = app.mount("#application");