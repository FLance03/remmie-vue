<template>
  <div class="default-table">
    <table>
      <thead>
        <tr>
          <th v-for="head in heads" v-bind:key="head">
            {{ head }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(record, index) in infos" v-bind:key="index">
          <td v-for="(info, index) in record" v-bind:key="index">{{ info }}</td>

          <td v-if="service == true" class="table-data-padding-top">
            <div class="border-rounded-button-container" >
              <div v-if="record[2]=='PENDING' || record[3]=='PENDING'" class="border-rounded-button" v-on:click="confirm(index)">
                <a href="#">Confirm</a>
              </div>
              <div v-else class="border-rounded-button-confirmed" >
                <button disabled href="#">Confirmed</button>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <ul class="table-pagination">
      <li v-on:click="pageNumberClick(page - 1)"><a>Previous</a></li>
      <li
        v-for="pageNumber in pageNumbers"
        v-bind:key="pageNumber.value"
        v-bind:class="page == pageNumber.page ? 'active' : ''"
        v-on:click="pageNumberClick(pageNumber.value)"
      >
        <a>
          {{ pageNumber.page }}
        </a>
      </li>
      <li v-on:click="pageNumberClick(page + 1)"><a>Next</a></li>
    </ul>
  </div>
</template>


<script>
export default {
  props: ["page", "heads", "infos", "pageNumbers", "service", "infoPerPage"],
  components: {},
  methods: {
    pageNumberClick: function (page) {
      this.$emit("changePage", page);
    },
    confirm: function (index) {
      index = (this.page - 1) * this.infoPerPage + index;
      this.$emit("confirm", index);
    },
  },
};
</script>


<style scoped>
  .table-data-padding-top {
    padding-top: 50px;
  }
</style>