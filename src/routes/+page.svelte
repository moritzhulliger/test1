<script>
    import Intro from "$lib/Intro.svelte";
    import SpecialDays from "$lib/SpecialDays.svelte";
    import Snaps from "$lib/Snaps.svelte";
    import FamilyMoon from "$lib/Familymoon.svelte";

<<<<<<< HEAD
    export const map = "src/lib/images/shokunin_World_Map.svg"

    export const specialDays = [
      {
        image: "src/lib/images/days/IMG_2600.jpeg",
=======
    import imgUrl1 from "../lib/images/days/d1.jpg"
    import imgUrl2 from "../lib/images/days/d2.jpg"
    import imgUrl3 from "../lib/images/days/d3.jpg"
    import imgUrl4 from "../lib/images/days/d4.jpg"
    import imgUrl5 from "../lib/images/days/d5.jpg"

    export const titel = "Thuy-Duc \n ..tz";
    export const imageUrl = "src/lib/images/main1.jpg";
    export const ssr = false;
    export let data;

    export const specialDays = [
      {
        image: imgUrl1,
>>>>>>> e3e75ae5a471258672ca09d47c1479959372c8c7
        title: "01",
        text: "COCKTAIL, AVENUE APP - LINETTE"
      },
      {
        image: imgUrl2,
        title: "02",
        text: "Park Lunch, Eifeltower"
      },
      {
        image: imgUrl3,
        title: "03",
        text: "First, La Coupole"
      },
      {
        image: imgUrl4,
        title: "04",
        text: "Second, Hanoi 1988"
      },
      {
        image: imgUrl5,
        title: "05",
        text: "Caffé, LouLou"
      },
      {
        image: "src/lib/images/days/IMG_3472.jpg",
        title: "06",
        text: "Chin Chin, the Hoxton"
      },
      {
        image: "src/lib/images/days/IMG_3507.jpeg",
        title: "07",
        text: "Brunch, Saint Pearl"
      },
      {
        image: "src/lib/images/days/IMG_7148.jpeg",
        title: "08",
        text: "Cake, Central Park NYC"
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
      { 
        image: "src/lib/images/familymoon/IMG_6575.jpg",
        capture: "singapore"
      },
      { 
        image: "src/lib/images/familymoon/IMG_7763.jpg",
        capture: "singapore"
      },
      { 
        image: "src/lib/images/familymoon/IMG_7765.jpg",
        capture: "singapore"
      },
      { 
        image: "src/lib/images/familymoon/IMG_8234.jpg",
        capture: "singapore"
      },
      { 
        image: "src/lib/images/familymoon/IMG_8348.jpg",
        capture: "singapore"
      },
      { 
        image: "src/lib/images/familymoon/IMG_8737.jpg",
        capture: "singapore"
      },
      { 
        image: "src/lib/images/familymoon/IMG_8886.jpg",
        capture: "singapore"
      }
    ]

    console.log("daa", data);
</script>

<Intro/>

<div class="top-liner">
  <div class="left-line"></div>
  <div class="subtitle">OUR SPECIAL DAYS</div>
</div>
{#each data.data.listSpecialDayElements.items as item}
  <SpecialDays image={item.Image} title={item.Title} text={item.Description} />
{/each}
<div class="top-liner">
  <div class="left-line"></div>
  <div class="subtitle">THE FOuR OF US</div>
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
  <div>
    <img src={map} class="map" alt=""/>
  </div>
  <div class="imagebar-container">
    <div class="wrapper">    
      {#each destinations as {image, capture}}
        <FamilyMoon image={image} capture={capture} />
      {/each}
    </div>
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
            font-family: 'Barlow', sans-serif;
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
    .map {
      margin: 50px 0px;
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
    .imagebar-container {
      overflow-x: scroll;
    }
    .wrapper {
        display: flex;
        flex-direction: row;
        width: fit-content;
    }
    .revealUp {
      opacity: 0;
      visibility: hidden;
    }
  </style>
  
