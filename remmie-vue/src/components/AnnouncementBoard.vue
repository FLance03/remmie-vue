<template>
<div>
  <modal v-on:createAnnouncement="addItem"></modal>
  <div id="container-fluid">
    <div id="row">
      <div id="col-md-12" v-for="(data, index) in wholeData" v-bind:key="index">
        <div id="card">
          <h1>{{data.title}}</h1>
          <div class="row">
            <div class="col" id="ann-text">
              <p>{{data.description}}</p>
              <p>Start Time: {{format_date(data.start_time)}}</p>
              <p>End Time: {{format_date(data.end_time)}}</p>
            </div>
            <div class="col">
              <img :src="getImage(data.image)">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from "axios";
import modal from "./ModalAnn";
import moment from "moment";

export default {
  data() {
    return {
      wholeData: [],
    };
  },
  components: {
    "modal": modal, 
  },
  computed: {},
  methods: {
    addItem: function () {
      console.log('aaaaaaaaaaaaaaaaaaa');
    this.wholeData = [];
    const url = "http://localhost:3000/read/announcements";
    axios
      .get(url, {
        headers: {
          'Authorization': this.$store.state.token,
          'Usertype': this.$store.state.usertype,
          'Loggedin': this.$store.state.isUserLoggedIn,
        }
      })
      .then((response) => {
        var i;
        for (i = 0; i < response.data.length; i++) {
          this.wholeData.push(response.data[i]);
        }
      })
      .catch((e) => console.log(e));
    },
    getImage(imagepath){
      return "assets/images/"+imagepath;
    },
    format_date(value){
      if(value) {
        return moment(String(value)).format("dddd, MMMM Do YYYY, h:mm:ss a");
      }
    },
  },
  beforeMount() {
    const url = "http://localhost:3000/read/announcements";
    axios
      .get(url, {
        headers: {
          'Authorization': this.$store.state.token,
          'Usertype': this.$store.state.usertype,
          'Loggedin': this.$store.state.isUserLoggedIn,
        }
      })
      .then((response) => {
        for (let i = 0; i < response.data.length; i++) {
          this.wholeData.push(response.data[i]);
        }
      })
      .catch((e) => console.log(e));
  },
};
</script>

<style>

</style>