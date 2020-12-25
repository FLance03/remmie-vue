<template>
  <div>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
    <!--===============================================================================================-->	
      <link rel="icon" type="image/png" href="images/icons/favicon.ico"/>
    <!--===============================================================================================-->
      <link rel="stylesheet" type="text/css" href="vendor/bootstrap/css/bootstrap.min.css">
    <!--===============================================================================================-->
      <link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.7.0/css/font-awesome.min.css">
    <!--===============================================================================================-->
      <link rel="stylesheet" type="text/css" href="fonts/Linearicons-Free-v1.0.0/icon-font.min.css">
    <!--===============================================================================================-->
      <link rel="stylesheet" type="text/css" href="vendor/animate/animate.css">
    <!--===============================================================================================-->	
      <link rel="stylesheet" type="text/css" href="vendor/css-hamburgers/hamburgers.min.css">
    <!--===============================================================================================-->
      <link rel="stylesheet" type="text/css" href="vendor/animsition/css/animsition.min.css">
    <!--===============================================================================================-->
      <link rel="stylesheet" type="text/css" href="vendor/select2/select2.min.css">
    <!--===============================================================================================-->	
      <link rel="stylesheet" type="text/css" href="vendor/daterangepicker/daterangepicker.css">
    <!--===============================================================================================-->
      <link rel="stylesheet" type="text/css" href="css/util.css">
      <link rel="stylesheet" type="text/css" href="css/main.css">
    <!--===============================================================================================-->
    </head>
    <body>
      
      <div class="limiter">
        <div class="container-login100">
          <div class="wrap-login100 p-l-85 p-r-85 p-t-55 p-b-55">
            <form class="login100-form validate-form flex-sb flex-w">
              <span class="login100-form-title p-b-15">
                remmie
              </span>
              <span class="login100-form-subtext p-b-32">
                Your personal remote hotel butler
              </span>
              <span class="txt1 p-b-2">
                Email
              </span>
              <div class="wrap-input100 validate-input m-b-36" data-validate = "Email is required">
                <input class="input100" type="email" name="email" v-model="email">
                <span class="focus-input100"></span>
              </div>
              
              <span class="txt1 p-b-2">
                Password
              </span>
              <div class="wrap-input100 validate-input m-b-12" data-validate = "Password is required">
                <input class="input100" type="password" name="pass" v-model="password">
                <span class="focus-input100"></span>
              </div>
              
              <div class="flex-sb-m w-full p-b-48">
                <div>
                  <a href="#" class="txt3">
                    Forgot Password?
                  </a>
                </div>
              </div>

              <div class="container-login100-form-btn p-b-32">
                <button class="login100-form-btn" v-on:click="Authenticate()">
                  Login
                </button>
              </div>
            </form>
              <span class="login100-form-disclaimer">
                *this website is deemed specifically for admin use only, download our mobile application in the appstore today
              </span>
          </div>
        </div>
      </div>
      

      <div id="dropDownSelect1"></div>

    </body>
  </div>
</template>

<!--===============================================================================================-->
  <script src="vendor/jquery/jquery-3.2.1.min.js"></script>
<!--===============================================================================================-->
  <script src="vendor/animsition/js/animsition.min.js"></script>
<!--===============================================================================================-->
  <script src="vendor/bootstrap/js/popper.js"></script>
  <script src="vendor/bootstrap/js/bootstrap.min.js"></script>
<!--===============================================================================================-->
  <script src="vendor/select2/select2.min.js"></script>
<!--===============================================================================================-->
  <script src="vendor/daterangepicker/moment.min.js"></script>
  <script src="vendor/daterangepicker/daterangepicker.js"></script>
<!--===============================================================================================-->
  <script src="vendor/countdowntime/countdowntime.js"></script>
<!--===============================================================================================-->
  <script src="js/main.js"></script>

<script>
import axios from 'axios';

export default {
    data(){
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        Authenticate: function() {
          console.log(this.username);
            const url = "http://localhost:3000/authenticate";
            axios({
                method: 'POST',
                url: url,
                data: {
                    email: this.email,
                    password: this.password,
                }
            }).then( (response) => {
                // console.log(response.data)
                if (response.data == true){
                    this.$router.replace({ name: 'Table'});
                } else {
                    // refresh page or something
                }
            }).catch( e => console.log(e));
        }
    },
    beforeMount() {
        const url = "http://localhost:3000/isloggedin";

        axios.get(url).then((response) => {
            if (response.data == true){
                this.$router.replace({ name: 'Table'});
            }
        }).catch( e => console.log(e));
    }
}
</script>

<style>

</style>