

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

      <!-- Hamburger Menu Button -->
      <button class="menu-button" @click="toggleMenu">
      <i class="fa fa-bars"></i>
    </button>

    <!-- Mobile Menu -->
    <div class="mobile-menu" :class="{ active: isMenuOpen }">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/almirah">About</router-link></li>
        <li><router-link to="/almirah">Services</router-link></li>
        <li><router-link to="/almirah">Portfolio</router-link></li>
        <li><router-link to="/almirah">Contact</router-link></li>
      </ul>
      <!-- Close Menu Button -->
      <button class="close-button" @click="closeMenu">
        <i class="fa fa-times"></i>
      </button>
    </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const isMenuOpen = ref(false);
  
  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };
  
  const closeMenu = () => {
    isMenuOpen.value = false;
  };
  </script>
  
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

/* Mobile Menu */
.mobile-menu {
  display: none;
  position: fixed;
  top: 0;
  right: -200px;
  width: 200px;
  height: 100vh;
  background: #ff0051;
  padding-top: 50px;
  z-index: 2;
  transition: right 0.5s;
}

/* Active class to slide in the menu */
.mobile-menu.active {
  transform: translateX(0);
}

/* Menu Button Styles */
.menu-button {
  display: none; /* Hide by default for larger screens */
  /* Add styles for your menu button icon */
}

/* Close Button Styles */
.close-button {
  /* Add styles for your close button icon */
}

/* Media Query for Mobile */
@media (max-width: 768px) {
  .buttons {
    display: none; /* Hide the regular navigation links */
  }

  /* Display the menu button for mobile */
  .menu-button {
    display: block;
    /* Add styles for your menu button icon */
  }
}

</style>
  