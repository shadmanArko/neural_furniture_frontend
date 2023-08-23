<template>
  <div id="app">
    <TopBar />
    <router-view></router-view>
    <BottomBar />
    <!-- Rest of your content goes here -->
  </div>
</template>

<script>
import TopBar from './components/TopBar.vue';
import BottomBar from './components/BottomBar.vue';

export default {
  name: 'App',
  components: {
    TopBar,
    BottomBar,
  },
};
</script>
