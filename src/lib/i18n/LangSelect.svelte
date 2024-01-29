<script>
// @ts-nocheck

    import { setLang } from "./i18n";
    import { reveal } from 'svelte-reveal';

    let showOverlay = true;
  
    const closeOverlay = () => {
      showOverlay = false;
    };
  
    const changeLanguage = (/** @type {string} */ lang) => {
      setLang(lang);
      closeOverlay();
    };
  </script>
  
  <style>
    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5); 
      display: flex;
      justify-content: center;
      align-items: center;  
      z-index: 1000;
      backdrop-filter: blur(25px); 
    }
  
    .lang-options {
      display: flex;
      flex-direction: column;
      text-align: center;
    }
  
    .lang-option {
      font-family: 'Playfair Display', serif;
      font-size: clamp(.5rem, 2vw, 2rem);
      font-weight: 100;
      letter-spacing: .2rem;
      cursor: pointer;
      color: white;
    }
 

    a {
      text-decoration: none;
      color: #18272F;
      font-weight: 700;
      position: relative;
      margin-bottom: 57px;
      padding: 0 6px;
    }

    a::before {
      content: '';
      background-color: hsla(0, 14%, 91%, 0.75);
      position: absolute;
      left: 0;
      bottom: 3px;
      width: 100%;
      height: 0px;
      z-index: -1;
      transition: all .3s ease-in-out;
    }

    a:hover::before {
      bottom: 0;
      height: 100%;
    }

    .lala {
      padding-bottom: 15px;
    }
  </style>
  
  {#if showOverlay}
    <div class="overlay">
      <div class="lang-options" on:click={(e) => e.stopPropagation()}>
        <div class="lala" use:reveal={{ transition: "slide", delay: 200 }} >
          <a class="lang-option" on:click={() => changeLanguage("de")}>Deutsch</a>
        </div>
        <div  class="lala" use:reveal={{ transition: "slide", delay: 200 }} >
          <a class="lang-option" id="style-2" data-replace="Tiếng Việt" on:click={() => changeLanguage("vn")}><span>Tiếng Việt</span></a>
        </div>
        <div class="lala" use:reveal={{ transition: "slide", delay: 200 }} >
          <a class="lang-option" on:click={() => changeLanguage("fr")}>Francais</a>
        </div>
        <div class="lala" use:reveal={{ transition: "slide", delay: 200 }} >
          <a class="lang-option" on:click={() => changeLanguage("en")}>English</a>
        </div>
      </div>
    </div>
  {/if}
    