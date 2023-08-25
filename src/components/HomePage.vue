<template>
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
</template>

<script>
  export default {
    name: 'HomePage',
  };
  </script>

<style scoped>

/* Video Panel */
.video-panel {
  text-align: center;
  width: 100%;
  padding: 0px;
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
  padding: 0px;
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
  flex-basis: calc(50% ); /* Adjust for spacing */
  margin: 0px;
  box-sizing: border-box; /* Include padding and border in the element's total width */
  overflow: hidden; /* Hide any overflowing content */
}

.second-picture-panel img {
  width: 100%; /* Ensure the image fits within its container */
  height: auto;
}
</style>