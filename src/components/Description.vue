<template>
  <div>
    <div>{{ this.keytag }}</div>
    <div>{{ this.name }}</div>
    <br />
    <select v-model="selected">
      <option disabled value="-">Please select one</option>
      <option>-</option>
      <option v-for="item in this.name" :key="item">
          {{ item }}
      </option>
      <!-- <option>A</option>
      <option>B</option>
      <option>C</option> -->
    </select>
    <span>Selected: {{ selected }}</span>
    <div v-if="this.selected != '-'">
      select != -
      <!-- {{this.keytag.data[this.taglist[`${selected}`].i].coordinates[this.taglist.selected.j]}} -->
      <!-- {{taglist[selected].j}} -->
      <p v-if="this.selected != '-'" style="white-space: pre-line"></p>
      <br />
      <!-- <textarea v-model="value" rows="3" max-rows="5"></form-textarea> -->
      <textarea v-model="description" placeholder="add multiple lines" oninput ="updateValue()" rows="3"></textarea>
    </div>
    <div>{{this.name}}</div>
    <div>{{this.desLocation}}</div>
  </div>
</template>

<script>
import Vue from "vue/dist/vue.esm";
import VueAxios from "vue-axios";
import axios from "axios";
Vue.use(VueAxios, axios);
export default {
  name: "Button",
  data: () => {
    return {
      keytag: [],
      id: null,
      animaldata: [],
      selected: "-",
      name:"-",
      description:"-",
      desLocation:[],
    };
  },

  methods: {
    initData() {
      let _this=this
      _this.tagName()
    },
    tagName(){
      var a=[]
      var b=[]
      for (let i = 0; i < this.keytag.data.length; i++) {
        // console.log(i)
        for (let j = 0; j < this.keytag.data[i].coordinator.length; j++) {
          var keyname = this.keytag.data[i].coordinator[j].title;
          a.push(keyname)
          b.push({title:keyname, i:i,j:j})
          }
      }
      this.name = a
      this.desLocation =b
      // console.log(this.name)
      return a
    },
    updateValue(){
      console.log('run findkey')
      for (let i = 0; i < this.desLocation.length; i++) {
        if (this.desLocation[i].title == this.selected) {
          var a = this.desLocation[i].i
          var b = this.desLocation[i].j
          this.keytag.data[a].coordinator[b].description = this.description
        }
      }
    },
    computed:{
    listenerFunction() {
      return {
        ...this.$listener,
        input: this.updateValue
      }
      },
    }





  },
  created() {
    this.id = this.$route.params.animalID;
    this.keytag = this.$route.params.Data;
    this.initData()
    // if (this.animaldata.length == 1) {
    //   this.$router.replace("/modify-data");
    // }
  },
};
</script>
<style scoped>
button.primary {
  background: blue;
  color: white;
}
button.aaa {
  background: aqua;
  color: brown;
  position: relative;
  left: var(--x);
  /* top: 200px; */
}
</style>