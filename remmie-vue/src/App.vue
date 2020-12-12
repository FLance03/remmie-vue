<template>
  <admin-view v-if="usertype == 'admin'"></admin-view>
  <staff-view v-else-if="usertype =='staff'"></staff-view>
  <login-view v-else></login-view>
</template>

<script>
import axios from 'axios';
import Admin from './components/Admin.vue';
import Staff from './components/Staff.vue';
import Login from './components/Login.vue';

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
  beforeMount() {
    const url = "http://localhost:3000/read/usertype";
    
    axios.get(url).then(response => this.usertype = response.data);
    
  },
}
</script>

<style>
</style>
