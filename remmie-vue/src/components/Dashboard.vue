<template>
  <div>
    <div id="container-fluid">
      <div id="row">
        <div id="col-mb-5">
          <div id="card">            
            <GChart 
              v-show="checkLength()"
              type="ColumnChart"
              :data="barData"
              :options="chartOptionsBar"
            />
          </div>
        </div>
        
      </div>
      <div id="row">
        <div id="col-mb-5">
          <div id="card">
            <booking-information></booking-information>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>



<script>

import bookinginformation from "./BookingInformation"
import axios from "axios"
import { GChart } from 'vue-google-charts'

var month = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export default {
  data() {
    return {
      wholeData: [],
      reservationData: [],
      donutData: [],
      total: [],
      barData: [
        ['Month', 'Sales'],
      ],
      chartOptionsBar: {
          title: 'Total Sales for the last 6 months',
          height: 400,
      },
    };
  },
  computed: {},
  methods: {
    getTotal(wholeData){
      wholeData.forEach(element => {
        this.total+=element["price"]*element["quantity"];
      });
      console.log(this.total);
    },
    returnMonth(date){
      console.log
      return date.getMonth();
    },
    pushArray(arr1, arr2){
      arr1.push(arr2);
    },
    checkLength(){
      return this.total.length > 0 ? true : false;
    }
  },
  beforeMount() {
    const urlline = "http://localhost:3000/read/lineitems";
    const urlreservation = "http://localhost:3000/read/bookinginformation";
    console.log(this.$store.state);
    axios
      .get(urlline, {
        headers: {
          'Authorization': this.$store.state.token,
          'Usertype': this.$store.state.usertype,
          'Loggedin': this.$store.state.isUserLoggedIn,
        }
      })
      .then((response) => {
        for (let i = 0; i < response.data.length; i++) {
          let data = response.data[i];
          this.wholeData.push(data);
          let date = new Date(data["date_created"]);
          if(this.total[date.getMonth()]==null){
            this.total[date.getMonth()] = data["price"]*data["quantity"]
          } else {
            this.total[date.getMonth()] += data["price"]*data["quantity"];
          }
        }
        // july to december
        for(let i=6; i<12; i++){
          this.pushArray(this.barData, [month[i], this.total[i]]);
        }
        console.log(this.total.length)
      }).catch((e) => console.log(e));
    axios
      .get(urlreservation, {
        headers: {
          'Authorization': this.$store.state.token,
          'Usertype': this.$store.state.usertype,
          'Loggedin': this.$store.state.isUserLoggedIn,
        }
      })
      .then((response) => {
        var i, count;
        for (count = 0, i = 0; i < response.data.length; i++, count++) {
          this.reservationData.push(response.data[i]);
        }
      })
      .catch((e) => console.log(e));
  },
  components: {
    'booking-information': bookinginformation,
    GChart 
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
