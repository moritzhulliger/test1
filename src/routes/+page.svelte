<script>
    import { dragscroll } from '@svelte-put/dragscroll';
    import { onMount } from 'svelte';
    import { browser } from '$app/environment';

    import Intro from "$lib/Intro.svelte";
    import LangSelect from "$lib/i18n/LangSelect.svelte"
    import SpecialDays from "$lib/SpecialDays.svelte";
    import Snaps from "$lib/Snaps.svelte";
    import FamilyMoon from "$lib/Familymoon.svelte";
    import Rsvp from '$lib/Rsvp.svelte';

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


    let withRSVP = false;
    if (browser) {
      const searchParams = new URLSearchParams(window.location.search);
      console.log("searchParams", searchParams.get('rsvp') )
      if(searchParams.get('rsvp') === 'letmersvpplease') {
        console.log("lalala");
        withRSVP = true;
      }
    }

    let openRSVP = false;


</script>
<LangSelect />
<Intro introData={data.intro.data.listIntros.items[0] }/>
{#if withRSVP}
<div class="container rsvp-container">
  <button class="rsvp-button" on:click={() => openRSVP = true}>RSVP</button>
</div>
{/if}
{#if openRSVP}
<Rsvp />
{/if}
<div class="top-liner">
  <div class="left-line"></div>
  <div class="subheading">OUR SPECIAL DAYS</div>
</div>
<div class="special-days-container">
  {#each data.allSpecialDayElements.data.listSpecialDayElements.items as item}
  <SpecialDays image={item.Image} title={item.Title} text={item.Description} />
{/each}
</div>

<div class="top-liner">
  <div class="left-line"></div>
  <div class="subheading">THE FOuR OF US</div>
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
  <div class="subheading">travel the world</div>
</div>
<div class="familymoon ">
  <h1>Family moon</h1>
  <div class="map-container container">
    <div class="row">
      <div class="map">
        <img src={map} alt=""/>
        <div class="pin">
          <div class="marker nyc"></div>
          <div class="marker hanoi"></div>
          <div class="marker bali"></div>
          <div class="marker singapore"></div>
          <div class="marker paris"></div>
          <div class="marker london"></div>
          <div class="marker iceland"></div>
          <div class="marker danang"></div>
          <div class="marker hcmc"></div>          
          <div class="marker paris"></div>
          <div class="marker london"></div>
          <div class="marker iceland"></div>
          <div class="marker danang"></div>
          <div class="marker hcmc"></div>
        </div>
      </div>
    </div>
  </div>
  <div use:dragscroll class="imagebar-container">
    <div  class="wrapper">    
      {#each data.moons.data.listFamilymoons.items as {image, destination}}
        <FamilyMoon image={image} capture={destination} />
      {/each}
    </div>
  </div>

</div>


  <style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital@0;1&display=swap');

    .rsvp-button {
      border: 2px solid #000000; 
      padding: 10px 30px; 
      background-color: transparent; /* Transparent background */
      color: #000000; /* Text color */
      font-size: 16px; /* Adjust font size as needed */
      cursor: pointer; /* Cursor style */
      outline: none; 
      margin-top: 75px;
      z-index: 900;
    }

    .rsvp-container {
      display: flex;
      justify-content: center;
    }

    .loader {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    
    .tap {
      position: absolute;
      top: -100px; left: 16px;
      width: 20px;
      height: 100px;
      background: #FBD78D;
      animation: 2s wave ease infinite;
    }

    .glass {
      overflow: hidden;
      position: absolute;
      width: 50px;
      height: 130px;
      border: 2px solid #FFF;
      border-bottom-left-radius: 30px;
      border-bottom-right-radius: 30px;
    }

    .stand:before {
      content: '';
      position: absolute;
      top: 132px; left: 25px;
      width: 3px;
      height: 110px;
      background: #FFF;
    }

    .stand:after {
      content: '';
      position: absolute;
      top: 241px; left: 6px;
      width: 40px;
      height: 2px;
      background: #FFF;
    }

    .champagne {
      position: absolute;
      width: 50px;
      background: #FBD78D;

      transition: height .5s ease, top .5s ease;
    }

    .bubbles {
      position: absolute;
      top: -3px;
      width: 5px;
      height: 5px;
      border-radius: 100%;
      border: 1px solid #FFF;
    }

    .bubbles.two {
      top: 0;
      left: 10px;
      
    }

    .bubbles.three {
      top: 5px;
      left: 20px;
      
    }

    .bubbles.four {
      top: 0;
      left: 30px;
      
    }

    .bubbles.five {
      top: 85px;
      left: 40px;
      animation: 10s move ease infinite;
      opacity: 0.7;
    }

    .bubbles.six {
      top: 5px;
      left: 40px;
    }

    @keyframes move {
      100% { top: -10px; opacity: 0; }
    }

    body {
      background-color: #d2c9bc;
    } 

    h1 {
        text-align: center;
        font-family: 'Playfair Display', serif;
        font-size: clamp(3rem, 10vw, 5.5rem);
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

        .subheading {
            font-family: 'Barlow', sans-serif;
            letter-spacing: clamp(0cap,0.3em,1cap);
            margin-left: 75px;
        }
    }

    .the-days {
        position: relative;
    }
    .map-container{
      position: relative;
    }
    .map {
      position: relative;
      width: 100%;
      margin: 80px 0px;
    }
    .map img{
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    .pin{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .nyc{
      left: 27%;
      top: 27%;
    }
    .hanoi{
      left: 83%;
      top: 46%;
    }
    .bali{
      left: 87%;
      top: 69%;
    }
    .singapore{
      left: 82%;
      top: 57%;
    }

    .london {
      left: 47%;
      top: 22%;
    }

    .iceland {
      left: 42%;
      top: 18%;
    }

    .danang {
      left: 85%;
      top: 51%;
    }

    .hcmc {
      left: 84%;
      top: 55%;
    }

    .paris {
      left: 48%;
      top: 26%;
    }

    .marker {
      transform: perspective(40px) rotateX(20deg) rotateZ(-45deg);
      transform-origin: 50% 50%;
      border-radius: 80% 40% 80% 0;
      padding: 0 3px 3px 0;
      width: 1.3em;
      height: 1.3em;
      background: #000000;
      position: absolute;

      margin: -2.2em 0 0 -1.3em;
      -webkit-box-shadow: -1px 1px 4px rgba(0, 0, 0, .5);
      -moz-box-shadow: -1px 1px 4px rgba(0, 0, 0, .5);
      box-shadow: -1px 1px 4px rgba(0, 0, 0, .5);
    }

    .marker:after {
      content: '';
      width: 0.7em;
      height: 0.7em;
      margin: 0.8em 0em 0em 1em;
      background: #ffffff;
      position: absolute;
      top: -25%;
      left: -68%;
      border-radius: 80% 40% 80% 0;
        -moz-box-shadow: 0 0 5px rgba(0, 0, 0, .5);
        -webkit-box-shadow: 0 0 5px rgba(0, 0, 0, .5);
        box-shadow: 0 0 5px rgba(0, 0, 0, .5);
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
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */

      &::-webkit-scrollbar {
      display: none; /* Webkit: Hide scrollbar */
    }
    }
    .wrapper {
        display: flex;
        flex-direction: row;
        width: fit-content;
        margin-left: -75px;
    }
    .revealUp {
      opacity: 0;
      visibility: hidden;
    }

    .special-days-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-right: 15px;
    }
  </style>
  
