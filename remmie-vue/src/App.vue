<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>

import headers from "./assets/custom/Headers.js";

export default {
   mounted() {
      headers();
    },
};
</script>
