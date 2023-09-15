<template>
  <div>
    <h2>Product Details</h2>
    <div class="product-detail" v-if="selectedProduct">
      <!-- <img :src="selectedProduct.imageUrl" :alt="selectedProduct.name" class="product-image" /> -->
      <div class="product-images">
        <div class="big-image">
          <img :src="selectedImage" :alt="selectedProduct.name" class="product-image" />
        </div>
        <div class="small-images">
          <img
            v-for="(image, index) in selectedProduct.smallImages"
            :key="index"
            :src="image"
            :alt="selectedProduct.name"
            @click="changeImage(image)"
            class="small-image"
          />
        </div>
      </div>
      <h3>{{ selectedProduct.name }}</h3>
      <p>{{ selectedProduct.details }}</p>
      <!-- Display other product details here -->

      <!-- Buy button with WhatsApp link -->
      <a :href="whatsappLink" target="_blank" class="whatsapp-button">
        <i class="fa fa-whatsapp whatsapp-icon"></i> Buy on WhatsApp
      </a>
   
    </div>
    
    
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductDetails',
  props: ['id'],
  computed: {
    selectedProduct() {
      // Find the product with the matching id from the static products array
      return this.products.find(product => product.id === Number(this.id));
    },
    // Generate the WhatsApp link with a pre-filled message
    whatsappLink() {
      const phoneNumber = '+8801533628404'; // Replace with your WhatsApp phone number
      const message = `I want to buy ${this.selectedProduct.name}.`; // Customize the message
      return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    },
  },
  data() {
    return {
      products: [
        { 
          id: 1, 
          name: 'Product 1', 
          imageUrl: require('../assets/BedroomSet.png'), 
          details: 'This is Almirah. Made with Oak Wood' ,
          smallImages: [
            require('../assets/BedroomSet.png'),
            require('../assets/Sofa.jpeg'),
            require('../assets/BedroomSet.png'),
            require('../assets/Sofa.jpeg'),
            // Add more small images here
          ],
        },
        { id: 2, name: 'Product 2', imageUrl: require('../assets/BedroomSet.png'), details: 'This is Almirah. Made with Oak Wood and with nice color' },
        { id: 3, name: 'Product 3', imageUrl: require('../assets/BedroomSet.png'), details: 'This is Almirah. Made with Oak Wood and with nice finishing' },
        // Add more products here
      ],
      selectedImage: '', // Store the URL of the selected image
    };
  },

  
  methods: {
    changeImage(imageUrl) {
      // Update the selectedImage to the clicked small image
      this.selectedImage = imageUrl;
    },
  },
  created() {
    // Set the initially selected image to the first small image
    if (this.selectedProduct && this.selectedProduct.smallImages.length > 0) {
      this.selectedImage = this.selectedProduct.smallImages[0];
    }
  },
};
</script>

<style scoped>
.product-images {
  display: flex;
  flex-direction: column; /* Display small images below the big image */
  align-items: center; /* Center the content horizontally */
}

.big-image {
  max-width: 100%;
  margin-bottom: 10px; /* Ensure the big image doesn't exceed the container width */
}

.small-images {
  display: flex; /* Display small images in a row */
  align-items: center; /* Center the small images vertically */
  justify-content: center; /* Center the small images horizontally */
  flex-wrap: wrap; /* Allow small images to wrap to the next row if necessary */
}

.small-image {
  max-width: 100px; /* Adjust the max-width to your preference for small images */
  cursor: pointer;
  margin: 0 10px 10px 0; /* Add margin to separate small images */
}

.product-image {
  max-width: 100%; /* Ensure the image doesn't exceed the container width */
  max-height: 80vh; /* Limit the image height to 80% of the viewport height */
  display: block;
  margin: 0 auto;
}

/* Style for WhatsApp button */
.whatsapp-button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #25d366; /* WhatsApp green color */
  color: #ffffff;
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
  transition: background-color 0.3s ease;

  /* Center icon and text */
  display: flex;
  align-items: center;
}

/* Style for WhatsApp icon */
.whatsapp-icon {
  margin-right: 10px;
  font-size:30px
}

/* Hover style for WhatsApp button */
.whatsapp-button:hover {
  background-color: #128c7e; /* Darker shade of WhatsApp green on hover */
}
</style>
