<template>
  <info-table
    v-on:changePage="changePage($event)"
    v-bind:pageNumbers="pageNumbers"
    v-bind:page="currentPage"
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
      tableHead: [
        "Guest Name",
        "Additional Information",
        "Room",
        "Status",
        "Actions",
      ],
      tableData: [],
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
  },

  beforeMount() {
    const url = "http://localhost:3000/read/roomcleaning";
    axios
      .get(url)
      .then((response) => {
        var i, count;
        for (count = 0, i = 0; i < response.data.length; i++, count++) {
          this.wholeData.push([]);
          this.wholeData[count].push(response.data[i]["userName"]);
          this.wholeData[count].push(response.data[i]["info"]);
          this.wholeData[count].push(response.data[i]["room"]);
          this.wholeData[count].push(response.data[i]["status"]);
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