<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>


export default {
   mounted() {
      let jquery = document.createElement('script')
      jquery.setAttribute('src', 'vendor/jquery/jquery.min.js')
      jquery.async = false
      jquery.defer  = true
      document.head.appendChild(jquery)
      let jquery2 = document.createElement('script')
      jquery2.setAttribute('src', 'vendor/jquery/jquery-3.2.1.min.js')
      jquery2.async = false
      jquery2.defer  = true
      document.head.appendChild(jquery2)
      let bootstrap = document.createElement('script')
      bootstrap.setAttribute('src', 'vendor/bootstrap/js/bootstrap.bundle.min.js')
      bootstrap.async = false
      bootstrap.defer  = true
      document.head.appendChild(bootstrap)
      let browser = document.createElement('script')
      browser.setAttribute('src', 'assets/js/browser.min.js')
      browser.async = false
      browser.defer  = true
      document.head.appendChild(browser)
      let breakpoints = document.createElement('script')
      breakpoints.setAttribute('src', 'assets/js/breakpoints.min.js')
      breakpoints.async = false
      breakpoints.defer  = true
      document.head.appendChild(breakpoints)
      let transition = document.createElement('script')
      transition.setAttribute('src', 'assets/js/transition.js')
      transition.async = false
      transition.defer  = true
      document.head.appendChild(transition)
      let owl = document.createElement('script')
      owl.setAttribute('src', 'assets/js/owl-carousel.js')
      owl.async = false
      owl.defer  = true
      document.head.appendChild(owl)
      let animsition = document.createElement('script')
      animsition.setAttribute('src', 'vendor/animsition/js/animsition.min.js')
      animsition.async = false
      animsition.defer  = true
      document.head.appendChild(animsition)
      let popper = document.createElement('script')
      popper.setAttribute('src', 'vendor/bootstrap/js/popper.js')
      popper.async = false
      popper.defer  = true
      document.head.appendChild(popper)
      let bootstrap2 = document.createElement('script')
      bootstrap2.setAttribute('src', 'vendor/bootstrap/js/bootstrap.min.js')
      bootstrap2.async = false
      bootstrap2.defer  = true
      document.head.appendChild(bootstrap2)
      let select2 = document.createElement('script')
      select2.setAttribute('src', 'vendor/select2/select2.min.js')
      select2.async = false
      select2.defer  = true
      document.head.appendChild(select2)
      let moment = document.createElement('script')
      moment.setAttribute('src', 'vendor/daterangepicker/moment.min.js')
      moment.async = false
      moment.defer  = true
      document.head.appendChild(moment)
      let daterangepicker = document.createElement('script')
      daterangepicker.setAttribute('src', 'vendor/daterangepicker/daterangepicker.js')
      daterangepicker.async = false
      daterangepicker.defer  = true
      document.head.appendChild(daterangepicker)
      let countdowntime = document.createElement('script')
      countdowntime.setAttribute('src', 'vendor/countdowntime/countdowntime.js')
      countdowntime.async = false
      countdowntime.defer  = true
      document.head.appendChild(countdowntime)
      let main = document.createElement('script')
      main.setAttribute('src', 'js/main.js')
      main.async = false
      main.defer  = true
      document.head.appendChild(main)
      let custom = document.createElement('script')
      custom.async = false
      custom.defer  = true
      custom.setAttribute('src', 'assets/js/custom.js')
      document.head.appendChild(custom)
      let chartloader = document.createElement('script')
      chartloader.async = false
      chartloader.defer  = true
      chartloader.setAttribute('src', 'https://www.gstatic.com/charts/loader.js')
      document.head.appendChild(chartloader)
    },
};
</script>
