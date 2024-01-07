<script>
    export const titel = "Thuy-Duc \n & Moritz";
    export const imageUrl = "src/lib/images/main1.jpg";
</script>

<div class="top-liner">
    <div class="left-line"></div>
    <div class="subtitle">SPECIAL EDITION</div>
    <div class="right-line"></div>
</div>
<h1>FOREVER</h1>
<div class="container">
    <img src={imageUrl} class="image" alt=""/>
</div>
<h2 class="ido">THUY-DUC & MORITZ SAID "I DO"</h2>





  <style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital@0;1&display=swap');

    h1 {
        text-align: center;
        font-family: 'Playfair Display', serif;
        font-size: 5.5rem;
        font-weight: 100;
        letter-spacing: 20px;
    }

    .ido {
        font-family: 'Playfair Display', serif;
        text-align: center;
    }

    .top-liner {
        display: flex;
        align-items: center;
        flex-direction: row;
        
        .left-line, .right-line {
        
            height: 0px;
            flex-grow: 2;
            border-top: 5px solid black;
        }

        .subtitle {
            margin: 15px 45px;
        }
    }
    .container {
      position: relative;
      padding: 15px;
      border: 1px solid black;
    }

    .the-days {
        position: relative;
    }
  
    .image {
        width: 100%;
        height: auto;

      object-fit: cover; /* Ensure the image covers the container */
    }
  
    .text {
        font-family: 'Playfair Display', serif;

      position: absolute;
      top: 15%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      font-size: 7em;
      font-weight: 100;
    }
  </style>
  
