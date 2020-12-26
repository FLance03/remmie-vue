<template>
  <div>
    <gen-nav v-if="page == 0" v-bind:type="accountType" v-bind:pages="pages" v-bind:icons="icons" v-on:navigate="changePage($event)">
      <dashboard></dashboard>
    </gen-nav>
    <gen-nav v-else-if="page == 1" v-bind:type="accountType" v-bind:pages="pages" v-bind:icons="icons" v-on:navigate="changePage($event)">
      <announcement-board></announcement-board>
    </gen-nav>
    <gen-nav v-else-if="page == 2" v-bind:type="accountType" v-bind:pages="pages" v-bind:icons="icons" v-on:navigate="changePage($event)">
      <accounts></accounts>
    </gen-nav>
  </div>
</template>

<script>
import generalnavigation from './GeneralNavigation';
import dashboard from './Dashboard';
import announcementBoard from './AnnouncementBoard';
import accounts from './Accounts';

export default {
  data(){
    return {
      page: 0,
      accountType: 'ADMIN',
      pages: ['Dashboard','Announcement Board','Accounts', 'Logout'],
      icons: ['lnr lnr-chart-bars','lnr lnr-calendar-full','lnr lnr-users', 'lnr lnr-exit'],
    };
  },
  components: {
    'gen-nav': generalnavigation,
    'dashboard': dashboard,
    'announcement-board': announcementBoard,
    'accounts': accounts,
  },
  methods: {
    changePage: function(page) {
      if (page == 3){
        this.$store.dispatch('destroySession');
        this.$router.push({ name: 'Login'})
      }
      this.page = page;
    },
  }
}
</script>

<style>

</style>