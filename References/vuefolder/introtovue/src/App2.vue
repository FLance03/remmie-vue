<template>
  <div>
      <!-- <loginform v-show="visible"></loginform>
      <registerform v-show="!visible"></registerform>
      <button v-on:click="visible=!visible">Show</button> -->

      <!-- <component v-bind:is="component"></component>
      <button v-on:click="component = 'loginform'">Show Login</button>
      <button v-on:click="component = 'registerform'">Show Registration</button> -->

      <content-form></content-form>
  </div>
</template>

<script>
// import LoginForm from './components/LoginForm.vue';
// import RegisterForm from './components/RegisterForm.vue';
// export default {
//     components: {
//         'loginform': LoginForm,
//         'registerform': RegisterForm,
//     },
//     data(){
//         return {
//             visible: true,
//         };
//     },
// }

// import LoginForm from './components/LoginForm.vue';
// import RegisterForm from './components/RegisterForm.vue';
// export default {
//     components: {
//         'loginform': LoginForm,
//         'registerform': RegisterForm,
//     },
//     data(){
//         return {
//             component: 'registerform',
//         };
//     },
// }
import contentform from './components/contentform.vue';
export default {
    components: {
        'content-form': contentform,
    },
    data(){
        return {
            component: 'registerform',
        };
    },
}
</script>

<style>

</style>