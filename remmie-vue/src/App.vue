<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
    mounted() {
      let main = document.createElement('script')
      main.setAttribute('src', 'js/main.js')
      document.head.appendChild(main)
      let jquery = document.createElement('script')
      jquery.setAttribute('src', 'vendor/jquery/jquery.min.js')
      document.head.appendChild(jquery)
      let bootstrap = document.createElement('script')
      bootstrap.setAttribute('src', 'vendor/bootstrap/js/bootstrap.bundle.min.js')
      document.head.appendChild(bootstrap)
      let browser = document.createElement('script')
      browser.setAttribute('src', 'assets/js/browser.min.js')
      document.head.appendChild(browser)
      let breakpoints = document.createElement('script')
      breakpoints.setAttribute('src', 'assets/js/breakpoints.min.js')
      document.head.appendChild(breakpoints)
      let transition = document.createElement('script')
      transition.setAttribute('src', 'assets/js/transition.js')
      document.head.appendChild(transition)
      let owl = document.createElement('script')
      owl.setAttribute('src', 'assets/js/owl-carousel.js')
      document.head.appendChild(owl)
      let custom = document.createElement('script')
      custom.setAttribute('src', 'assets/js/custom.js')
      document.head.appendChild(custom)
      let jquery2 = document.createElement('script')
      jquery2.setAttribute('src', 'vendor/jquery/jquery-3.2.1.min.js')
      document.head.appendChild(jquery2)
      let animsition = document.createElement('script')
      animsition.setAttribute('src', 'vendor/animsition/js/animsition.min.js')
      document.head.appendChild(animsition)
      let popper = document.createElement('script')
      popper.setAttribute('src', 'vendor/bootstrap/js/popper.js')
      document.head.appendChild(popper)
      let bootstrap2 = document.createElement('script')
      bootstrap2.setAttribute('src', 'vendor/bootstrap/js/bootstrap.min.js')
      document.head.appendChild(bootstrap2)
      let select2 = document.createElement('script')
      select2.setAttribute('src', 'vendor/select2/select2.min.js')
      document.head.appendChild(select2)
      let moment = document.createElement('script')
      moment.setAttribute('src', 'vendor/daterangepicker/moment.min.js')
      document.head.appendChild(moment)
      let daterangepicker = document.createElement('script')
      daterangepicker.setAttribute('src', 'vendor/daterangepicker/daterangepicker.js')
      document.head.appendChild(daterangepicker)
      let countdowntime = document.createElement('script')
      countdowntime.setAttribute('src', 'vendor/countdowntime/countdowntime.js')
      document.head.appendChild(countdowntime)
    },
};
</script>

<style>
</style>
