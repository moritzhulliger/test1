<script>
// @ts-nocheck
import { reveal } from 'svelte-reveal';

import { t, locale, locales } from "./i18n/i18n";


    /**
     * @type {{ any; }}
     */
     export let introData;

</script>

<div class="top-liner">
    <div class="left-line"></div>
    <div class="subtitle">SPECIAL EDITION</div>
    <div class="right-line"></div>
</div>
<h1 use:reveal={{ transition: "slide", delay: 200 }}>{introData.titel}</h1>
<div class="subheading" use:reveal={{ transition: "slide", delay: 500 }}>live the life you love</div>
<div class="container" use:reveal={{ transition: "fade", threshold: 0.1, delay: 700 }}>
    <div class="container-image">
        <img src={introData.imageUrl} class="image" alt=""/>  
    </div>
</div>

<h2 class="ido" use:reveal={{ transition: "slide", delay: 800 }}>THUY-DUC & MORITZ SAID "I DO"</h2>

<div class="container" use:reveal={{ transition: "fade", delay: 900, threshold: .5 }}>
    <div class="box">
        <div class="bottom-line text-box bold">We've eloped</div>
        <div class="text-box">
          
          <div class="greeting">{$t("intro.welcome.title")}</div>
          <div>
            {$t('intro.welcome.text')}
          </div>
          <div class="greeting">{$t('intro.welcome.text')}</div>
        </div>
      </div>
</div>
  <style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital@0;1&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@100;300;500&display=swap');


    h1 {
        text-align: center;
        font-family: 'Playfair Display', serif;
        font-size: clamp(2.5rem, 8vw, 8rem);
        font-weight: 100;
        letter-spacing: clamp(1rem,1.5rem, 2rem);
        margin: 0 15px 10px;
    }

    h2 {
      font-size: clamp(1rem, 3vw, 1.5rem);
    }

    .subheading {
      text-align: center;
      text-transform: capitalize;
      font-family: 'Playfair Display', serif;
      letter-spacing: 0.3rem;
      margin-bottom: 40px;
    }

    .ido {
        font-family: 'Playfair Display', serif;
        letter-spacing: clamp(0.1cap,1vw,0.2cap);
        text-align: center;
        margin: 45px 0px;
    }

    .top-liner {
        display: flex;
        align-items: center;
        flex-direction: row;
        
        .left-line, .right-line {
        
            height: 0px;
            flex-grow: 2;
            border-top: 2px solid black;
        }

        .subtitle {
            font-family: 'Barlow', sans-serif;
            letter-spacing: 1cap;

            @include media-breakpoint-up(lg) { 
              margin: 25px 45px;
            }
            margin: 25px 15px;
        }
    }
    .container-image {
      position: relative;
      padding: 15px;
      border: 2px solid black;
      max-width: 800px;
    }

    .container {
        display: flex;
        justify-content: center;
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
    .box{
      max-width: 830px;
      border: 2px solid black; 
    }
    .bottom-line
    {
      border-bottom: 2px solid black;
    }
    .text-box{
      font-family: 'Barlow', sans-serif;
      font-weight: 300;
      text-align: justify;
      line-height: 1.3;
      letter-spacing: 0.1rem;
      padding: 30px;
    }
    .bold{
      font-weight: 500;
    }
    .greeting{
      margin: 5px 0px;
    }

    // for typical mobile devices
    @media only screen and (min-width: 320px) and (max-width: 479px) {
      //CSS Code
      h1 {

      }
    }

    // For mobile (landscape)
    @media only screen and (min-width: 480px) and (max-width: 767px) {
    //CSS Code
    }

    // For tablet
    @media only screen and (min-width: 768px) and (max-width: 979px) {
    //CSS Code
    }

    // For small desktop
    @media only screen and (min-width: 980px) and (max-width: 1023px) {
    //CSS Code
    }

    // For typical desktop
    @media only screen and (min-width: 1024px) and (max-width: 1199px) {
    //CSS Code
    }
  </style>
  
