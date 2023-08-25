<script setup>
// import { useRouter } from 'vue-router';
// const router = useRouter();
// const navigateToAlmirah = () => {
//   router.push('/almirah');
// };

</script>

<template>
    <div>
      <!-- Emergency Top Bar -->
      <div class="emergency-top-bar">
        <p>Emergency Topic Bar</p>
      </div>
  
      <!-- E-Commerce Top Bar -->
      <div class="ecommerce-top-bar">
      <div class="center-content">
        <router-link to="/">
          <div class="logo">
            <img src="../assets/logo.png" alt="Logo" />
          </div>
        </router-link>
        <div class="buttons">
          <router-link to="/almirah">Almirah</router-link>
          <router-link to="/bed">Bed</router-link>
          <router-link to="/diningtable">Dining Table</router-link>
          <router-link to="/dressingtable">Dressing Table</router-link>
          <router-link to="/shoerack">Shoe Rack</router-link>
          <router-link to="/showcase">Showcase</router-link>
          <router-link to="/sofa">Sofa</router-link>
        </div>
      </div>
      </div>
    </div>
  </template>
  

  
<style scoped>
/* Emergency Top Bar */
.emergency-top-bar {
  background-color: #003366;
  color: white;
  text-align: center;
  padding: 2px 0; /* Adjust the padding to make the top bar slimmer */
  line-height: .01; /* Adjust line-height to align content vertically */
  margin: 0; /* Reset margin */
  font-size: 08px; /* Adjust font size */
}

/* E-Commerce Top Bar */
.ecommerce-top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000000;
  padding: 10px;
}

.buttons a {
  font-family: 'Your Chosen Font', sans-serif; /* Replace with your chosen font */
  font-size: 16px;
  color: white;
  text-decoration: none;
  margin-right: 20px; /* Add some spacing between links */
}

.buttons a:hover {
  opacity: 0.7; /* Add a slight opacity on hover */
}

.logo img {
  max-height: 20px;
  margin-right: 20px;
}  

/* Center Content */
.center-content {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
</style>
  