<template>
    <div>
        <admin-view v-if="usertype == 'admin'"></admin-view>
        <staff-view v-else-if="usertype =='staff'"></staff-view>
        <login-view v-else></login-view>
    </div>
</template>

<script>
import axios from 'axios';
import Vue from 'vue';
import Admin from '../components/Admin.vue';
import Staff from '../components/Staff.vue';
import Login from '../views/Login.vue';
import headers from "../assets/custom/Headers.js";

export default {
  components: {
    'admin-view': Admin,
    'staff-view': Staff,
    'login-view': Login,
  },
  data() {
    return {
      usertype: 'staff',
    };
  },
  mounted() {
    const url = "http://localhost:3000/read/usertype";
    const vm = this;
    axios.get(url).then( (response) => {
      if (response.data == false){
          this.$router.replace({ name: 'Login'});
      }else {
          this.usertype = response.data;
      }
      Vue.nextTick(function(){
        headers();
      }.bind(vm));
    }).catch( e => console.log(e));
  },
}
</script>

<style>

</style>