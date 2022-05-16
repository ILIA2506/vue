let articles =  [
    {
       title: "Нейросеть может читать текст быстрее человека",
    },
    {
       title: "Пять сервисов, которые помогут написать статью за 5 минут",
    },
    {
       title: "Названы основные правила движения поездов",
    },
    {
       title: "Самая посещаемая достопримечательность мира",
    },
    {
       title: "Появился новый термин для обозначения радиоволн",
    },
    {
       title: "В России появится новый вид бумаги",
    }
 ];

 Vue.createApp({
    data() {
        return {
            articles, 
            inputName: ""
        }
    },
    computed: {
        nameTitle() {
            // function F(elem) {
            //     if (elem.title.includes(this.inputName)) {
            //         return true
            //     } else {
            //         return false
            //     }
            // }
            return this.articles.filter(elem => elem.title.includes(this.inputName))
        }
    }



}).mount("#homework3");