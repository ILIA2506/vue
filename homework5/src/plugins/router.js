import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue'
import Step2 from '../components/Step2.vue'
import Step3 from '../components/Step3.vue'
import Step4 from '../components/Step4.vue'
import Step5 from '../components/Step5.vue'


const routes=[
 {path:"/", component:Home},
 {path:"/step2", component:Step2},
 {path:"/step3", component:Step3},
 {path:"/step4", component:Step4},
 {path:"/step5", component:Step5}


];

export default createRouter({
 history: createWebHistory(),
 routes: routes
});