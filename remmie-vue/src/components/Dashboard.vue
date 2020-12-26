<template>
  <div>
    <div id="container-fluid">
      <div id="row">
        <div id="col-mb-5">
          <div id="card">            
            <GChart
              type="ColumnChart"
              :data="chartData"
              :options="chartOptions"
            />
          </div>
        </div>
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

export default {
  data() {
    return {
      wholeData: [],
      total: [],
      chartData: [
        ['Month', 'Sales'],
      ],
      chartOptions: {
        chart: {
          title: 'Company Performance',
          subtitle: 'Sales for the last 3 months',
        }
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
    }
  },
  beforeMount() {
    const url = "http://localhost:3000/read/lineitems";
    axios
      .get(url)
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
        let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
        for (let i=0 ; i<12 ; i++){
          if (this.total[i] != undefined){
            this.pushArray(this.chartData, [months[i], this.total[i]]);
          }
        }
        // this.pushArray(this.chartData, ['November', this.total[10]]);
        // this.pushArray(this.chartData, ['December', this.total[11]]);
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
