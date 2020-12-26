<template>
    <div>
        <admin-view v-if="usertype == 'admin'"></admin-view>
        <staff-view v-else-if="usertype =='staff'"></staff-view>
        <login-view v-else></login-view>
    </div>
</template>

<script>
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
      usertype: '',
    };
  },
  mounted() {
    this.usertype = this.$store.state.usertype;
    var vm = this;
    Vue.nextTick(function(){
      headers();
    }.bind(vm));
  },
  beforeMount(){
    if (this.$store.state.isUserLoggedIn == false){
      this.$router.replace({ name: 'Login'});
    }
  }
}
</script>

<style>

</style>