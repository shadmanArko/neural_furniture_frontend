<template>
  <div id="app">
    <TopBar />
    <router-view></router-view>
    <!-- Rest of your content goes here -->
  </div>
</template>

<script>
import TopBar from './components/TopBar.vue';

export default {
  name: 'App',
  components: {
    TopBar,
  },
};
</script>
