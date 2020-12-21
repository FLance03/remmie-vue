<template>
  <div id="container-fluid">
    <div id="row">
      <div id="col-md-12" v-for="(data, index) in wholeData" v-bind:key="index">
        <div id="card">
          <h1>{{data.title}}</h1>
          <div class="row">
            <div class="col" id="ann-text">
              <p>{{data.description}}</p>
              <p>Start Time: {{formatdate(data.start_time)}}</p>
              <p>Start Time: {{formatdate(data.end_time)}}</p>
            </div>
            <div class="col">
              <img :src="getImage(data.image)">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      wholeData: [],
    };
  },
  computed: {},
  methods: {
    getImage(imagepath){
      return "assets/images/"+imagepath;
    },
    formatdate(date){
      return  date.replace(/T/, ' '). replace(/\..+/, '');
    }
  },
  beforeMount() {
    const url = "http://localhost:3000/read/announcements";
    axios
      .get(url)
      .then((response) => {
        for (let i = 0; i < response.data.length; i++) {
          this.wholeData.push(response.data[i]);
          console.log(this.wholeData[i]["image"]);
        }
      })
      .catch((e) => console.log(e));
  },
};
</script>

<style>

</style>