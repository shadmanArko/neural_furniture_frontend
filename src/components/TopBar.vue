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
          <button>Button 1</button>
          <button>Button 2</button>
        </div>
      </div>
      <!-- Video Panel -->
    <div class="video-panel">
      <video controls>
        <source src="/path-to-your-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>

       <!-- Picture Panel -->
    <div class="picture-panel">
      <img src="/path-to-your-picture.png" alt="Picture" />
    </div>

    <!-- Second Picture Panel (side by side) -->
    <div class="second-picture-panel">
      <div class="picture">
        <img src="/path-to-your-picture1.png" alt="Picture 1" />
      </div>
      <div class="picture">
        <img src="/path-to-your-picture2.png" alt="Picture 2" />
      </div>
    </div>


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
  
  <script setup>
  // You can import any required modules here
  </script>
  
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

/* Video Panel */
.video-panel {
  text-align: center;
  padding: 20px;
}

.video-panel video {
  max-width: 100%;
  height: auto;
}

/* Picture Panels */
.picture-panel {
  text-align: center;
  padding: 20px;
}

.picture-panel img {
  max-width: 100%;
  height: auto;
}

.second-picture-panel {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
}

.second-picture-panel .picture {
  flex-basis: calc(50% - 10px);
  margin: 5px;
}

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
  