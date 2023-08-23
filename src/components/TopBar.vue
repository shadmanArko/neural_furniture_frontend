<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

const navigateToSofa = () => {
  router.push('/sofa');
};

const navigateToBed = () => {
  router.push('/bed');
};
</script>

<template>
    <div>
      <!-- Emergency Top Bar -->
      <div class="emergency-top-bar">
        <p>Emergency Topic Bar</p>
      </div>
  
      <!-- E-Commerce Top Bar -->
      <div class="ecommerce-top-bar">
        <div class="logo">
          <img src="/path-to-your-logo.png" alt="Logo" />
        </div>
        <div class="buttons">
            <button @click="navigateToSofa">Button 1</button>
            <button @click="navigateToBed">Button 2</button>

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
  padding: 10px;
}

/* E-Commerce Top Bar */
.ecommerce-top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000000;
  padding: 10px;
}

.logo img {
  max-height: 50px;
}

.buttons .button {
  background-color: #ffd700;
  color: black;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
}





  
  </style>
  