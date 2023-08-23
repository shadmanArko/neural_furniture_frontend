<template>
    <div>
        <!-- Footer -->
        <footer class="footer">
        <div class="contact-info">
            <p>Contact us: email@example.com</p>
            <p>Phone: +123456789</p>
        </div>
        <div class="copyright">
            <p>&copy; 2023 Your Company. All rights reserved.</p>
        </div>
        </footer>
    </div>
</template>

<script>
export default {
  name: 'BottomBar',
};
</script>

<style scoped>
    /* Footer */
.footer {
  background-color: #000000;
  color: #ffffff;
  padding: 20px;
  text-align: center;
}

.contact-info p,
.copyright p {
  margin: 5px 0;
}
</style>