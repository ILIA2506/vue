<template>
    <div>
        <h2>Название задачи</h2>
        <input type="text" v-model="taskname">
        <button @click="next()" :disabled="isDisabled">Далее</button>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
    data(){
        return {
            a: 'text',
            disabled: true,
            taskname:''
        }
    },
    computed: {
        isDisabled(){
            let status = this.taskname.length > 0 ? false : true
            return status
        }
    },
    methods: {
        next() {
            this.$router.push(
                {
                    path: './step2',
                    query: {taskname:this.taskname}
                }
            )
        }
    }
}
</script>

<style>

</style>
