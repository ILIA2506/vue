<template>
   <div>
       <h2>Название задачи: {{$route.query.taskname}}</h2>
       <h2>Описание задачи: {{$route.query.discriptionName}}</h2>
       <h2>Время выполнения задачи в часах: {{$route.query.hoursname}}</h2>
       <h2>Исполнитель: {{$route.query.responsiblePerson}}</h2>
   </div>
</template>

<script>
export default {
  name: 'HelloWorld',
    data(){
        return {
        }
    },
    computed: {
    },
    methods: {
}
}
</script>

<style>

</style>
