<template>
  <admin-view v-if="usertype == 'admin'"></admin-view>
  <staff-view v-else></staff-view>
</template>

<script>
import axios from 'axios';
import Admin from './components/Admin.vue';
import Staff from './components/Staff.vue';

export default {
  components: {
    'admin-view': Admin,
    'staff-view': Staff,
  },
  data() {
    return {
      usertype: '',
    };
  },
  computed: {
  },
  beforeMount() {
    const url = "http://localhost:3000/read/usertype";
    
    axios.get(url).then(response => this.usertype = response.data);
    
  },
}
</script>

<style>
</style>
