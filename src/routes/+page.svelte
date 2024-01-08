<script>
    import Intro from "$lib/Intro.svelte";
    import SpecialDays from "$lib/SpecialDays.svelte";
    import Snaps from "$lib/Snaps.svelte";
    import FamilyMoon from "$lib/Familymoon.svelte";

    export const map = "src/lib/images/shokunin_World_Map.svg"

    export const ssr = false;
    export let data;

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

<Intro introData={data.intro.data.listIntros.items[0] }/>

<div class="top-liner">
  <div class="left-line"></div>
  <div class="subtitle">OUR SPECIAL DAYS</div>
</div>
<div class="special-days-container">
  {#each data.allSpecialDayElements.data.listSpecialDayElements.items as item}
  <SpecialDays image={item.Image} title={item.Title} text={item.Description} />
{/each}
</div>

<div class="top-liner">
  <div class="left-line"></div>
  <div class="subtitle">THE FOuR OF US</div>
</div>
<div class="snaps container">
  <h1>SNAP!</h1>
  <div class="row">
    {#each data.allSnaps.data.listSnaps.items as snap}
    <div class="col-6 snap-wrapper">
      <Snaps snap={snap.snap} />
    </div>
    {/each}
  </div>
</div>
<div class="top-liner">
  <div class="left-line"></div>
  <div class="subtitle">travel the world</div>
</div>
<div class="familymoon container">
  <h1>Family moon</h1>
  <div class="map-container row">
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

      h1 {
        margin-bottom: 5.5rem;
      }
    }

    .snap-wrapper {
      padding-bottom: 40px;

      @include media-breakpoint-up(lg) {
        padding-bottom: 140px;
      }
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

    .the-days {
        position: relative;
    }
    .map {
      margin: 80px 0px;
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

    .special-days-container {
      display: flex;
      justify-content: center;
    }
  </style>
  
