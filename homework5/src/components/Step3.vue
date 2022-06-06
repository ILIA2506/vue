<template>
    <div>
        <h2>Время выполнения задачи в часах</h2>
        <input type="number" min="0" max="100" v-model="hoursname">
        <button @click="next()" :disabled="isDisabled">Далее</button>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
    data(){
        return {
            hoursname: null
        }
    },
    computed: {
        isDisabled() {
            if(this.hoursname > 0 && this.hoursname <= 100) {
                return false;
            } else {
                return true;
            }
        },
        query() {
            return this.$route.query    
        }
    },
    methods: {
        next() {
            this.$router.push(
                {
                    path: './step4',
                    query: {
                        ...this.query,
                        hoursname:this.hoursname
                        }
                }
            )
        }
    }
}
</script>

<style>

</style>
