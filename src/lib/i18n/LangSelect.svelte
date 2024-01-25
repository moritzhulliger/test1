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
      margin: 10px;
      padding-bottom: 5px;
      letter-spacing: .2rem;
      cursor: pointer;
      color: white;
    }
  
    .lang-option:hover {
        border-bottom: 1px solid white;
    }
  </style>
  
  {#if showOverlay}
    <div class="overlay" on:click={closeOverlay}>
      <div class="lang-options" on:click={(e) => e.stopPropagation()}>
        <div use:reveal={{ transition: "slide", delay: 200 }} >
          <div class="lang-option" on:click={() => changeLanguage("de")}>Deutsch</div>
        </div>
        <div use:reveal={{ transition: "slide", delay: 200 }} >
          <div class="lang-option" on:click={() => changeLanguage("vn")}>Tiếng Việt</div>
        </div>
        <div use:reveal={{ transition: "slide", delay: 200 }} >
          <div class="lang-option" on:click={() => changeLanguage("fr")}>Francais</div>
        </div>
        <div use:reveal={{ transition: "slide", delay: 200 }} >
          <div class="lang-option" on:click={() => changeLanguage("en")}>English</div>
        </div>
      </div>
    </div>
  {/if}
    