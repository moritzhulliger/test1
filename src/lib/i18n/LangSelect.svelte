<script>
// @ts-nocheck

    import { setLang } from "./i18n";
    import { reveal } from 'svelte-reveal';

    let showOverlay = false;
  
    const closeOverlay = () => {
      showOverlay = false;
    };

    const openOverlay = () => {
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
    }
  
    .lang-options {
      display: flex;
      flex-direction: column;
      text-align: center;
    }
  
    .lang-option {
      font-family: 'Playfair Display', serif;
      font-size: clamp(.25rem, 1vw, 1rem);
      font-weight: 100;
      letter-spacing: .2rem;
      cursor: pointer;
      color: rgb(0, 0, 0);
      transition: all 1s ease-in-out;

      &:hover {
        color: rgba(0, 0, 0, 0.774);
      }
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
    
    .lang-reveal {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background-image: url('./../images/lang-sel.svg');
      width: 35px;
      height: 35px;
      color: white;
      cursor: pointer;
      background-size: contain;
    }
  </style>
  

  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="lang-reveal" on:click={openOverlay}>
    {#if showOverlay}
    <div class="lang-select">
      <div class="lang-options" >
        <div class="lala" use:reveal={{ transition: "slide", delay: 1500 }}>
          <a class="lang-option" on:click={(e) => e.stopPropagation()} on:click={() => changeLanguage("de")}>Deutsch</a>
        </div>
        <div  class="lala" use:reveal={{ transition: "slide", delay: 1000 }}>
          <a class="lang-option" id="style-2" data-replace="Tiếng Việt" on:click={(e) => e.stopPropagation()} on:click={() => changeLanguage("vn")}><span>Tiếng Việt</span></a>
        </div>
        <div class="lala" use:reveal={{ transition: "slide", delay: 500 }}>
          <a class="lang-option" on:click={(e) => e.stopPropagation()} on:click={() => changeLanguage("fr")}>Francais</a>
        </div>
        <div class="lala"  use:reveal={{ transition: "slide", delay: 0 }}>
          <a class="lang-option" on:click={(e) => e.stopPropagation()} on:click={() => changeLanguage("en")}>English</a>
        </div>
      </div>
    </div>
  {/if}
  </div>
    