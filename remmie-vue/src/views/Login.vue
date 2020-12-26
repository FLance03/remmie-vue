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
            <form class="login100-form validate-form flex-sb flex-w" v-on:submit.prevent="Authenticate()">
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
                <input class="input100" type="email" name="email" v-model="email" required="required">
                <span class="focus-input100"></span>
              </div>
              
              <span class="txt1 p-b-2">
                Password
              </span>
              <div class="wrap-input100 validate-input m-b-12" data-validate = "Password is required">
                <input class="input100" type="password" name="pass" v-model="password" required="required">
                <span class="focus-input100"></span>
              </div>
              
              <div class="flex-sb-m w-full p-b-48">
                <div style="color:red" v-show="wrongPassword">
                   Incorrect credentials
                </div>
              </div>

              <div class="container-login100-form-btn p-b-32">
                <input type="submit" class="login100-form-btn" value="Login">
                 
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
            wrongPassword: false,
        };
    },
    methods: {
        Authenticate: function() {
            const url = "http://localhost:3000/authenticate";
            axios({
                method: 'POST',
                url: url,
                data: {
                    email: this.email,
                    password: this.password,
                },
                headers: {
                  'Authorization': this.$store.state.token,
                  'Usertype': this.$store.state.usertype,
                  'Loggedin': this.$store.state.isUserLoggedIn,
                }
            }).then( (response) => {
                if (response.data != false){
                  this.$store.dispatch('setToken', response.data.token);
                  this.$store.dispatch('setUsertype', response.data.type);
                  this.$router.replace({ name: 'Table'});
                }else {
                  this.wrongPassword = true;
                }
            }).catch( e => console.log(e));
        }
    },
    // beforeMount() {
    //     if(this.$store.state.isUserLoggedIn){
    //       this.$router.replace({ name: 'Table'});
    //     }
    // }
}
</script>

<style>

</style>