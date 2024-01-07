<script>
    import Intro from "$lib/Intro.svelte";
    import SpecialDays from "$lib/SpecialDays.svelte";
    import Snaps from "$lib/Snaps.svelte";
    import FamilyMoon from "$lib/FamilyMoon.svelte";

    import imgUrl1 from "./src/lib/images/days/d1.jpg"
    import imgUrl2 from "./src/lib/images/days/d2.jpg"
    import imgUrl3 from "./src/lib/images/days/d3.jpg"
    import imgUrl4 from "./src/lib/images/days/d4.jpg"
    import imgUrl5 from "./src/lib/images/days/d5.jpg"

    export const titel = "Thuy-Duc \n & Moritz";
    export const imageUrl = "src/lib/images/main1.jpg";

    export const specialDays = [
      {
        image: imgUrl1,
        title: "01",
        text: "COCKTAIL, AVENUE APP - LINETTE"
      },
      {
        image: imgUrl2,
        title: "02",
        text: "COCKTAIL, AVENUE APP - LINETTE"
      },
      {
        image: imgUrl3,
        title: "03",
        text: "COCKTAIL, AVENUE APP - LINETTE"
      },
      {
        image: imgUrl4,
        title: "04",
        text: "COCKTAIL, AVENUE APP - LINETTE"
      }
      ,
      {
        image: imgUrl5,
        title: "05",
        text: "COCKTAIL, AVENUE APP - LINETTE"
      }
    ]

    export const snaps = [
      "src/lib/images/days/d2.jpg",
      "src/lib/images/days/d6.jpg",
      "src/lib/images/days/d2.jpg",
      "src/lib/images/days/d1.jpg",
      "src/lib/images/days/d2.jpg"
    ]

    export const destinations = [
      "src/lib/images/familymoon/IMG_6575.jpg",
      "src/lib/images/familymoon/IMG_7763.jpg",
      "src/lib/images/familymoon/IMG_7765.jpg",
      "src/lib/images/familymoon/IMG_8234.jpg",
      "src/lib/images/familymoon/IMG_8348.jpg",
      "src/lib/images/familymoon/IMG_8737.jpg",
      "src/lib/images/familymoon/IMG_8886.jpg"
    ]
</script>

<Intro/>

<div class="top-liner">
  <div class="left-line"></div>
  <div class="subtitle">OUR SPECIAL DAYS</div>
</div>
{#each specialDays as {image, title, text}}
  <SpecialDays image={image} title={title} text={text} />
{/each}
<div class="top-liner">
  <div class="left-line"></div>
  <div class="subtitle">THE FOR OF US</div>
</div>
<div class="snaps">
  <h1>SNAP!</h1>
  {#each snaps as snap}
    <Snaps snap={snap} />
  {/each}
</div>
<div class="top-liner">
  <div class="left-line"></div>
  <div class="subtitle">travel the world</div>
</div>
<div class="familymoon">
  <h1>Family moon</h1>
  <div class="wrapper">    
    {#each destinations as dest}
      <FamilyMoon dest={dest} />
    {/each}
  </div>
</div>




  <style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital@0;1&display=swap');

    body {
      background-color: #d2c9bc;
    } 

    h1 {
        text-align: center;
        font-family: 'Playfair Display', serif;
        font-size: 5.5rem;
        font-weight: 100;
        letter-spacing: 20px;
        text-transform: uppercase;
    }

    .snaps {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .top-liner {
        margin: 85px 0 65px;
        display: flex;
        flex-direction: row;
        align-items: center;
        text-transform: uppercase;

        .left-line {
        
            height: 0px;
            flex-grow: 2;
            border-top: 3px solid black;
        }

        .subtitle {
            letter-spacing: 1cap;
            margin-left: 75px;
        }
    }

    .container {
      position: relative;
      width: 100%;
      height: 0;
      padding-bottom: 80%; /* 4:5 aspect ratio (5/4 * 100%) */
    }

    .the-days {
        position: relative;
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
        font-family: 'Playfair Display', serif;

      position: absolute;
      top: 15%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      font-size: 7em;
      font-weight: 100;
    }
    .wrapper {
        display: flex;
        flex-direction: row;
    }
  </style>
  
