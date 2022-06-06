<template>
    <div>
        <h2>Выберите исполнителя</h2>
        <select v-model="selected">
            <option v-for="(person, index) in responsiblePersons" :key="index">{{ person }}</option>
        </select>
        <button @click="create()" :disabled="isDisabled">Создать</button>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
    data(){
        return {
            responsiblePersons: ['Илья Тимощенков', 'Александр Суханов', 'Александр Максимов'],
            selected:null
        }
    },
    computed: {
        isDisabled() {
            return false;
        },
        query() {
            return this.$route.query    
        }
    },
    methods: {
        create() {
            this.$router.push(
                {
                    path: './step5',
                    query: {
                        ...this.query,
                        responsiblePerson:this.selected 
                        }
                }
            )
        }
    }
}
</script>

<style>

</style>
