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
import Login from '../components/Login.vue';

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
    var vm = this;
    axios.get(url).then( (response) => {
        if (response.data == false){
            this.$router.replace({ name: 'Login'});
        }else {
            this.usertype = response.data;
        }
        Vue.nextTick(function(){
          let jquery = document.createElement('script')
          jquery.setAttribute('src', 'vendor/jquery/jquery.min.js')
          jquery.async = true
          jquery.defer  = true
          document.head.appendChild(jquery)
          let jquery2 = document.createElement('script')
          jquery2.setAttribute('src', 'vendor/jquery/jquery-3.2.1.min.js')
          jquery2.async = true
          jquery2.defer  = true
          document.head.appendChild(jquery2)
          let bootstrap = document.createElement('script')
          bootstrap.setAttribute('src', 'vendor/bootstrap/js/bootstrap.bundle.min.js')
          bootstrap.async = true
          bootstrap.defer  = true
          document.head.appendChild(bootstrap)
          let browser = document.createElement('script')
          browser.setAttribute('src', 'assets/js/browser.min.js')
          browser.async = true
          browser.defer  = true
          document.head.appendChild(browser)
          let breakpoints = document.createElement('script')
          breakpoints.setAttribute('src', 'assets/js/breakpoints.min.js')
          breakpoints.async = true
          breakpoints.defer  = true
          document.head.appendChild(breakpoints)
          let transition = document.createElement('script')
          transition.setAttribute('src', 'assets/js/transition.js')
          transition.async = true
          transition.defer  = true
          document.head.appendChild(transition)
          let owl = document.createElement('script')
          owl.setAttribute('src', 'assets/js/owl-carousel.js')
          owl.async = true
          owl.defer  = true
          document.head.appendChild(owl)
          let animsition = document.createElement('script')
          animsition.setAttribute('src', 'vendor/animsition/js/animsition.min.js')
          animsition.async = true
          animsition.defer  = true
          document.head.appendChild(animsition)
          let popper = document.createElement('script')
          popper.setAttribute('src', 'vendor/bootstrap/js/popper.js')
          popper.async = true
          popper.defer  = true
          document.head.appendChild(popper)
          let bootstrap2 = document.createElement('script')
          bootstrap2.setAttribute('src', 'vendor/bootstrap/js/bootstrap.min.js')
          bootstrap2.async = true
          bootstrap2.defer  = true
          document.head.appendChild(bootstrap2)
          let select2 = document.createElement('script')
          select2.setAttribute('src', 'vendor/select2/select2.min.js')
          select2.async = true
          select2.defer  = true
          document.head.appendChild(select2)
          let moment = document.createElement('script')
          moment.setAttribute('src', 'vendor/daterangepicker/moment.min.js')
          moment.async = true
          moment.defer  = true
          document.head.appendChild(moment)
          let daterangepicker = document.createElement('script')
          daterangepicker.setAttribute('src', 'vendor/daterangepicker/daterangepicker.js')
          daterangepicker.async = true
          daterangepicker.defer  = true
          document.head.appendChild(daterangepicker)
          let countdowntime = document.createElement('script')
          countdowntime.setAttribute('src', 'vendor/countdowntime/countdowntime.js')
          countdowntime.async = true
          countdowntime.defer  = true
          document.head.appendChild(countdowntime)
          let main = document.createElement('script')
          main.setAttribute('src', 'js/main.js')
          main.async = true
          main.defer  = true
          document.head.appendChild(main)
          let custom = document.createElement('script')
          custom.async = true
          custom.defer  = true
          custom.setAttribute('src', 'assets/js/custom.js')
          document.head.appendChild(custom)
      }.bind(vm));
    }).catch( e => console.log(e));
  },
}
</script>

<style>

</style>