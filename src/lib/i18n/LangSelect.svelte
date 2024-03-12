<script>
// @ts-nocheck

    import { setLang } from "./i18n";
    import { reveal } from 'svelte-reveal';

    let showOverlay = false;
  
    const closeOverlay = () => {
      showOverlay = false;
    };

    const openOverlay = () => {
      console.log("SHOW OVERLAY")
      showOverlay = true;
    };
  
    const changeLanguage = (/** @type {string} */ lang) => {
      setLang(lang);
      closeOverlay();
    };
  </script>
  
  <style>
    .lang-select {
      position: absolute;
      bottom: 100%;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;  
      z-index: 1000;

      width: 125px;
      background: white;
      border-radius: 7px;
      margin-bottom: 15px;
    }
  
    .lang-options {
      display: flex;
      flex-direction: column;
      text-align: center;
    }
  
    .lang-option {
      font-family: 'Barlow', sans-serif;
      font-size: clamp(1rem, 1.5vw, 1.5rem);
      font-weight: 100;
      letter-spacing: .2rem;
      cursor: pointer;
      transition: all 1s ease-in-out;
      color: black;    
    }
 

    a {
      text-decoration: none;
      color: #18272F;
      font-weight: 700;
      position: relative;
      margin-bottom: 57px;
      padding: 0 6px;
    }



    a:hover::before {
      bottom: 0;
      height: 100%;
      transition: all .2s ease;
    }

    .lala {
      padding-bottom: 5px;
    }

    .lala:hover {
      & a {
        font-weight: 300;
      }
    }
    
    .lang-container {
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 35px;
      height: 35px;


    }

    .lalaland {
      height: 100%;
      transition: all .3s ease-in-out;
      &:hover { 
        transform: scale(1.05); 
      }
    }

    .lang-reveal {
      position: absolute;
      mask-image: url('./../images/lang-sel.svg');
      width: 100%;
      height:100%;
      left: 10%;
      top: 10%;

      cursor: pointer;
      background-size: contain;
      background-color: white;
      z-index: 10000;
    }

    .background-circle {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;

      border-radius: 50%;
      width: 120%;
      height: 120%;
      background-color: black;
    }
  </style>
  

  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="lang-container" on:click={openOverlay}>
    <div class="lalaland">
      <div class="lang-reveal"></div>
      <div class="background-circle"></div>
    </div>
    {#if showOverlay}
      <div class="lang-select" use:reveal={{ transition: "slide", delay: 500   }}>
        <div class="lang-options" >
          <div class="lala">
            <a class="lang-option" on:click={(e) => e.stopPropagation()} on:click={() => changeLanguage("de")}>DE</a>
          </div>
          <div  class="lala">
            <a class="lang-option" id="style-2" data-replace="Tiếng Việt" on:click={(e) => e.stopPropagation()} on:click={() => changeLanguage("vn")}><span>VN</span></a>
          </div>
          <div class="lala">
            <a class="lang-option" on:click={(e) => e.stopPropagation()} on:click={() => changeLanguage("fr")}>FR</a>
          </div>
          <div class="lala">
            <a class="lang-option" on:click={(e) => e.stopPropagation()} on:click={() => changeLanguage("en")}>EN</a>
          </div>
        </div>
      </div>
    {/if}
  </div>


    