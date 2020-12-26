<template>
  <div>
    <gen-nav v-if="page == 0" v-bind:type="accountType" v-bind:pages="pages" v-bind:icons="icons" v-on:navigate="changePage($event)">
      <bookings></bookings>
    </gen-nav>
    <gen-nav v-else-if="page == 1" v-bind:type="accountType" v-bind:pages="pages" v-bind:icons="icons" v-on:navigate="changePage($event)">
      <room-orders></room-orders>
    </gen-nav>
    <gen-nav v-else-if="page == 2" v-bind:type="accountType" v-bind:pages="pages" v-bind:icons="icons" v-on:navigate="changePage($event)">
      <room-cleaning></room-cleaning>
    </gen-nav>
  </div>
</template>

<script>
import generalnavigation from './GeneralNavigation';
import bookings from './Bookings';
import roomOrders from './RoomOrders';
import roomCleaning from './RoomCleaning';

export default {
  data(){
    return {
      page: 0,
      accountType: 'STAFF',
      pages: ['Bookings','Room Orders','Room Cleaning', 'Logout'],
      icons: ['lnr lnr-bookmark','lnr lnr-dinner','lnr lnr-trash', 'lnr lnr-exit'],
    };
  },
  components: {
    'gen-nav': generalnavigation,
    'bookings': bookings,
    'room-orders': roomOrders,
    'room-cleaning': roomCleaning,
  },
  methods: {
    changePage: function(page) {
      if (page == 3){
        this.$store.dispatch('destroySession')
        this.$router.push({ name: 'Login'})
      }
      this.page = page;
    },
  }
}
</script>

<style>

</style>