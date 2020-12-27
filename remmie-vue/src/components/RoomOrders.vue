<template>
  <info-table
    v-on:changePage="changePage($event)"
    v-on:confirm="updateStatus($event)"
    v-bind:pageNumbers="pageNumbers"
    v-bind:page="currentPage"
    v-bind:infoPerPage="infoPerPage"
    v-bind:heads="tableHead"
    v-bind:infos="tableData"
    v-bind:service="service"
  ></info-table>
</template>

<script>
import axios from "axios";
import table from "./NonReservationTable";
import pagination from "../assets/custom/Pagination.js";

export default {
  data() {
    return {
      currentPage: 1,
      infoPerPage: 5,
      tableHead: ["Guest Name", "Orders", "Room", "Status", "Actions"],
      tableData: [],
      id: [],
      wholeData: [],
      pageNumbers: [],
      service: true,
    };
  },

  components: {
    "info-table": table,
  },

  methods: {
    changePage: function (page) {
      if (
        page >= 1 &&
        page <= Math.ceil(this.wholeData.length / this.infoPerPage)
      ) {
        this.currentPage = page;
        this.tableData = [];
        this.updateInfo();
      }
    },
    updateInfo: function () {
      var i, count;
      this.pageNumbers = pagination(
        this.currentPage,
        Math.ceil(this.wholeData.length / this.infoPerPage),
        2
      );
      for (
        count = 0, i = (this.currentPage - 1) * this.infoPerPage;
        i < this.wholeData.length && count < this.infoPerPage;
        i++, count++
      ) {
        this.tableData.push([]);
        this.tableData[count].push(this.wholeData[i][0]);
        this.tableData[count].push(this.wholeData[i][1]);
        this.tableData[count].push(this.wholeData[i][2]);
        this.tableData[count].push(this.wholeData[i][3]);
      }
    },

    updateStatus: function (index) {
      let body = {
        id: this.id[index],
      };
      const url = "http://localhost:3000/update/roomorder_status";
      axios
        .post(url, body, {
          headers: {
            'Authorization': this.$store.state.token,
            'Usertype': this.$store.state.usertype,
            'Loggedin': this.$store.state.isUserLoggedIn,
          }
        })
        .then((res) => {
          if (res.data) {
            console.log("Room Order Status Updated");
            //Updates the currently stored wholedata with the newly inserted data. :) - daniel
            this.tableData = [];
            this.wholeData = [];
            this.id = [];
            const url = "http://localhost:3000/read/roomorders";
            axios.get(url).then((response) => {
              var i, count;
              for (count=0,i=0 ; i<response.data.length ; i++,count++){
                this.wholeData.push([]);
                this.wholeData[count].push(response.data[i]['username']);
                this.wholeData[count].push(response.data[i]['orders']);
                this.wholeData[count].push(response.data[i]['room']);
                this.wholeData[count].push(response.data[i]['status']);
                this.id.push([]);
                this.id[count].push(response.data[i]["id"]);
              }
              this.updateInfo()
            }).catch( e => console.log(e));
          } else {
            console.log("Status Update Error.");
          }
        })
        .catch((e) => console.log(e));
    },
  },

  beforeMount() {
    const url = "http://localhost:3000/read/roomorders";
    axios
      .get(url, {
        headers: {
            'Authorization': this.$store.state.token,
            'Usertype': this.$store.state.usertype,
            'Loggedin': this.$store.state.isUserLoggedIn,
        }
      })
      .then((response) => {
        var i, count;
        for (count = 0, i = 0; i < response.data.length; i++, count++) {
          this.wholeData.push([]);
          this.wholeData[count].push(response.data[i]["username"]);
          this.wholeData[count].push(response.data[i]["orders"]);
          this.wholeData[count].push(response.data[i]["room"]);
          this.wholeData[count].push(response.data[i]["status"]);
          this.id.push([]);
          this.id[count].push(response.data[i]["id"]);
        }
        this.updateInfo();
      })
      .catch((e) => console.log(e));
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>