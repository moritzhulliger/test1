<script>
    import { setLang } from "./i18n";
  
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
      background: rgba(0, 0, 0, 0.5); /* Semi-transparent black background for the overlay */
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
      backdrop-filter: blur(5px); /* Apply a blur effect to the background */
    }
  
    .lang-options {
      display: flex;
      flex-direction: column;
      text-align: center;
    }
  
    .lang-option {
      font-family: 'Playfair Display', serif;
      font-size: clamp(1rem, 4vw, 4rem);

      padding: 10px;
      cursor: pointer;
      color: white;
    }
  
    .lang-option:hover {
        transform: scale(1.1)
    }
  </style>
  
  {#if showOverlay}
    <div class="overlay" on:click={toggleOverlay}>
      <div class="lang-options" on:click={(e) => e.stopPropagation()}>
        <div class="lang-option" on:click={() => changeLanguage("de")}>Deutsch</div>
        <div class="lang-option" on:click={() => changeLanguage("vn")}>Tiếng Việt</div>
        <div class="lang-option" on:click={() => changeLanguage("fr")}>Francais</div>
        <div class="lang-option" on:click={() => changeLanguage("en")}>English</div>
      </div>
    </div>
  {/if}
    