<template>
  <div>
    <h2>Product Details</h2>
    <div class="product-detail" v-if="selectedProduct">
      <img :src="selectedProduct.imageUrl" :alt="selectedProduct.name" />
      <h3>{{ selectedProduct.name }}</h3>
      <!-- Display other product details here -->
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
  },
  data() {
    return {
      products: [
        { id: 1, name: 'Product 1', imageUrl: require('../assets/BedroomSet.png') },
        { id: 2, name: 'Product 2', imageUrl: require('../assets/BedroomSet.png') },
        { id: 3, name: 'Product 3', imageUrl: require('../assets/BedroomSet.png') },
        // Add more products here
      ],
    };
  },
};
</script>
