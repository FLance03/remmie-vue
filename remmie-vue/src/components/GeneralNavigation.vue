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
            <li v-for="(page, index) in pages" v-bind:key="index" v-on:click="NavClick(index)">
              <div class="row">
                <a style="padding-left: 20px"> <i v-bind:class="icons[index]"></i> {{page}}</a>
              </div>
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
    props: ["pages","type", "icons"],
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
      NavClick: function(index) {
        this.$emit('navigate',index);
      }
    },
}
</script>


<style>
</style>