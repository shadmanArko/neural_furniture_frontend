 <template>
   
   <div>
     <h1>Almirah Collection</h1>
     <!-- Display your almirah collection content here -->
   </div>
   
   <div class="product-page">
     <div class="product-container">
       <img src="../assets/BedroomSet.png" alt="Picture" />
       <!-- Product details go here -->
     </div>
     <div class="product-description">
       <!-- Product description goes here -->
       <p>Description of Sofa</p>
     </div>
   </div>
   
  </template>
  
  <script>
  export default {
    name: 'AlmirahPage',
  };
  </script>
  
  <style scoped>
    .product-page {
      display: flex;
    }
  
    .product-container {
      flex: 1;
      width: 50%;
    }
    .product-container img {
      max-width: 100%; /* Ensure the image doesn't exceed the container width */
      height: auto; /* Maintain the aspect ratio */
      display: block; /* Remove any default inline spacing */
      margin: 0 auto; /* Center the image horizontally within the container */
    }
  
    .product-description {
      flex: 1;
    }
  
    /* For mobile view */
    @media (max-width: 768px) {
      .product-page {
        flex-direction: column;
      }
  
      .product-container {
        width: 100%;
      }
  
      .product-description {
        width: 100%;
      }
    }
  </style>
  