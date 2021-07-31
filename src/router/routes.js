import Vue from "vue/dist/vue.esm";
import Router from 'vue-router';
import CreateBox from '@/components/CreateBox';
import AnimalList from '@/components/AnimalList';
import Description from '@/components/Description';


Vue.use(Router)
const routes = [
  {name:'add-data',path:'/add-data', component:CreateBox, props: true},
  {path:'/modify-data', component:AnimalList, props: true},
  {name:'description',path:'/description', component:Description, props:true},
  {path:'/', redirect:'/modify-data' ,component:AnimalList, props: true},
];
// Router.replace({ path: '*', redirect: '/modify-data' })
export default routes;  