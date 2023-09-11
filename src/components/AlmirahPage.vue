 <template>
   
   <div>
     <h1>Almirah Collection</h1>
     <!-- Display your almirah collection content here -->
   </div>

   <!-- Product card grid -->
   <div class="product-card-grid">
     <div class="product-card" v-for="(product, index) in products" :key="index">
       <img :src="product.imageUrl" :alt="product.name" />
       <p>{{ product.name }}</p>
     </div>
   </div>

   <!-- Product with description on right -->
<!--   <div class="product-page">-->
<!--     <div class="product-container">-->
<!--       <img src="../assets/BedroomSet.png" alt="Picture" />-->
<!--       &lt;!&ndash; Product details go here &ndash;&gt;-->
<!--     </div>-->
<!--     <div class="product-description">-->
<!--       &lt;!&ndash; Product description goes here &ndash;&gt;-->
<!--       <p>Description of Sofa</p>-->
<!--     </div>-->
<!--   </div>-->
   
  </template>
  
  <script>
  export default {
    name: 'AlmirahPage',
    data() {
      return {
        products: [
          { name: 'Product 1', imageUrl: require('../assets/BedroomSet.png') },
          { name: 'Product 2', imageUrl: require('../assets/BedroomSet.png') },
          { name: 'Product 3', imageUrl: require('../assets/BedroomSet.png') },
          { name: 'Product 4', imageUrl: require('../assets/BedroomSet.png') },
          { name: 'Product 5', imageUrl: require('../assets/BedroomSet.png') },
          { name: 'Product 6', imageUrl: require('../assets/BedroomSet.png') },
          { name: 'Product 7', imageUrl: require('../assets/BedroomSet.png') },
          { name: 'Product 8', imageUrl: require('../assets/BedroomSet.png') },
          { name: 'Product 9', imageUrl: require('../assets/BedroomSet.png') },
          // Add more products here
        ],
      };
    },
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


    .product-card-grid {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    .product-card {
      flex: 0 1 calc(33.333% - 20px); /* Three cards per row with spacing */
      margin: 10px;
      text-align: center;
    }

    .product-card img {
      max-width: 100%;
      height: auto;
    }

    /* For mobile view */
    @media (max-width: 768px) {
      .product-card {
        flex: 0 1 calc(100% - 20px); /* One card per row with spacing */
      }
    }
  </style>
  