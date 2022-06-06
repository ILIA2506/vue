<template>
    <div>
        <h2>Описание задачи</h2>
        <textarea v-model="discriptionName">Введите описание задачи</textarea>
        <button @click="next()" :disabled="isDisabled">Далее</button>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
    data(){
        return {
            discriptionName:''
        }
    },
    computed: {
        isDisabled(){
            let status = this.discriptionName.length > 0 ? false : true
            return status
        },
        query() {
            return this.$route.query    
        }
    },
    methods: {
        next() {
            this.$router.push(
                {
                    path: './step3',
                    query: {
                        ...this.query,
                        discriptionName:this.discriptionName
                        }

                }
            )
        }
    }
}
</script>

<style>

</style>
