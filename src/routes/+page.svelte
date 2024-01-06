<script>
    export const altText = "Thuy-Duc \n & Moritz";
</script>
  
  <style>
    .container {
      position: relative;
      width: 100%;
      height: 0;
      padding-bottom: 80%; /* 4:5 aspect ratio (5/4 * 100%) */
    }
  
    .image {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover; /* Ensure the image covers the container */
    }
  
    .text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      text-align: center;
      font-size: 1.5em;
      font-weight: bold;
    }
  </style>
  
  <div class="container">
    <img src={imageUrl} alt={altText} class="image" />
    <div class="text">Your Centered Text</div>
  </div>