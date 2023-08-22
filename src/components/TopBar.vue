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
      <video autoplay loop muted>
        <source src="../assets/file_example_MP4_640_3MG.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>

       <!-- Picture Panel -->
    <div class="picture-panel">
      <img src="../assets/BedroomSet.png" alt="Picture" />
    </div>

    <!-- Second Picture Panel (side by side) -->
    <div class="second-picture-panel">
      <div class="picture">
        <img src="../assets/Sofa.jpeg" alt="Picture 1" />
      </div>
      <div class="picture">
        <img src="../assets/Sofa.jpeg" alt="Picture 2" />
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
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-color: #000000;
}

.video-panel video {
  width: 100%;
  height: auto;
}

/* Picture Panels */
.picture-panel {
    text-align: center;
  width: 100%; /* Ensure the picture panel takes up the full width */
  padding: 10px;
  box-sizing: border-box;
}

.picture-panel img {
  width: 100%;
  height: auto;
}

.second-picture-panel {
  display: flex;
  width: 100%;
  flex-wrap: wrap; /* Allow pictures to wrap to the next line if necessary */
  justify-content: space-between;
  align-items: flex-start; /* Align pictures at the top of the container */
  padding: 0px;
}

.second-picture-panel .picture {
  flex-basis: calc(50% - 10px); /* Adjust for spacing */
  margin: 5px;
  box-sizing: border-box; /* Include padding and border in the element's total width */
  overflow: hidden; /* Hide any overflowing content */
}

.second-picture-panel img {
  width: 100%; /* Ensure the image fits within its container */
  height: auto;
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
  