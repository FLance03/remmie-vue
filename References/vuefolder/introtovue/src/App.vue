<template>
  <div>
      <app-header v-bind:passedtitle="title" v-on:changeTitle2="updateTitle($event)"></app-header>
      <h1>{{title}}</h1>
      <p>{{greeting}}</p>
      <app-footer v-bind:passedcopyright="copyright"></app-footer>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
export default {
    components: {
        'app-header': Header,
        'app-footer': Footer,
    },
    data: function() {
        return {
            title: "Title ni Siya",
            copyright: "Vue Copyright",
        };
    },
    computed: {
        greeting: function() {
            return "wassup my person";
        },
    },
    methods: {
        updateTitle: function(update) {
            this.title = update;
        },
    },
}
</script>

<style>

</style>