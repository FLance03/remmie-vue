<template>
    <div>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700" rel="stylesheet">

    <title>Remmie</title>

    <!-- Bootstrap core CSS -->
    <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!--
    Ramayana CSS Template
    https://templatemo.com/tm-529-ramayana
    -->

    <!-- Additional CSS Files -->


    <div id="wrapper">
    <!-- Main -->
    <div id="main">
      <div class="inner">

        <!-- Header -->
        <header id="header">
          <div class="logo">
              <h1></h1>
            <a href="#">Remmie</a>
          </div>
        </header>

        <slot></slot>

      </div>
    </div>

    <!-- Sidebar -->
    <div id="sidebar">
      <div class="inner">
        <!-- Menu -->

        <nav id="menu">
          <div>
            <p>{{type}} NAVIGATION</p>
          </div>
          <ul>
            <li v-on:click="zeroth">
                <a href="#">{{pages[0]}}</a>
            </li>
            <li v-on:click="first">
                <a href="#">{{pages[1]}}</a>
            </li>
            <li v-on:click="second">
                <a href="#">{{pages[2]}}</a>
            </li>
            <li v-on:click="third">
                <a href="#">{{pages[3]}}</a>
            </li>
          </ul>
        </nav>
        <!-- Footer -->
        <footer id="footer">
          <p class="copyright">Copyright &copy; 2020 Chua, Go, Lim </p>
        </footer>
      </div>
    </div>


  </div>

</div>
</template>
<script>
import axios from 'axios';

export default {
    props: ["pages","type"],
    components: {
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
    methods: {
        zeroth: function() {
            this.$emit('navigate',0);
        },
        first: function() {
            this.$emit('navigate',1);
        },
        second: function() {
            this.$emit('navigate',2);
        },
        third: function() {
            // this.$emit('navigate',3);
        },
    },
    mounted() {
        let browserjs = document.createElement('script');
        let breakpoints = document.createElement('script');
        let transitionjs = document.createElement('script');
        let owljs = document.createElement('script');
        let customjs = document.createElement('script');
        let jquery = document.createElement('script');
        let bootstrap = document.createElement('script');

        jquery.setAttribute('src', '../vendor/jquery/jquery.min.js');
        bootstrap.setAttribute('src', '../vendor/bootstrap/js/bootstrap.bundle.min.js');
        browserjs.setAttribute('src', '../assets/js/browser.min.js');
        breakpoints.setAttribute('src', '../assets/js/breakpoints.min.js');
        transitionjs.setAttribute('src', '../assets/js/transition.js');
        owljs.setAttribute('src', '../assets/js/owl-carousel.js');
        customjs.setAttribute('src', '../assets/js/custom.js');

        document.head.appendChild(jquery);
        document.head.appendChild(bootstrap);
        document.head.appendChild(browserjs);
        document.head.appendChild(breakpoints);
        document.head.appendChild(transitionjs);
        document.head.appendChild(owljs);
        document.head.appendChild(customjs);
    }
}
</script>


<style>
</style>