<script>
    import Theday from "$lib/Theday.svelte";
    export const titel = "Thuy-Duc \n & Moritz";
    export const imageUrl = "src/lib/images/main1.jpg";
</script>

<div class="container">
    <img src={imageUrl} class="image" />
    <div class="text">{titel}</div>
  </div>
  <Theday />


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
      top: 15%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      font-size: 7em;
      font-weight: 100;
    }
  </style>
  
