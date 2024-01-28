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
 

    a {
    overflow: hidden;
    position: relative;
    display: inline-block;
  }

a::before,
a::after {
 content: '';
  position: absolute;
  width: 100%;
  left: 0;
}
a::before {
  background-color: #fff;
  height: 2px;
  bottom: 0;
  transform-origin: 100% 50%;
  transform: scaleX(0);
  transition: transform .3s cubic-bezier(0.76, 0, 0.24, 1);
}



a:hover::after {
  transform: translate3d(0, 0, 0);
}

a span {
  display: inline-block;
  transition: transform .3s cubic-bezier(0.76, 0, 0.24, 1);
}

a:hover span {
  transform: translate3d(-200%, 0, 0);
}


a {
  text-decoration: none;
  color: #18272F;
  font-weight: 700;
  vertical-align: top;
}
  </style>
  
  {#if showOverlay}
    <div class="overlay">
      <div class="lang-options" on:click={(e) => e.stopPropagation()}>
        <div use:reveal={{ transition: "slide", delay: 200 }} >
          <a class="lang-option" on:click={() => changeLanguage("de")}>Deutsch</a>
        </div>
        <div use:reveal={{ transition: "slide", delay: 200 }} >
          <a class="lang-option" id="style-2" data-replace="Tiếng Việt" on:click={() => changeLanguage("vn")}><span>Tiếng Việt</span></a>
        </div>
        <div use:reveal={{ transition: "slide", delay: 200 }} >
          <a class="lang-option" on:click={() => changeLanguage("fr")}>Francais</a>
        </div>
        <div use:reveal={{ transition: "slide", delay: 200 }} >
          <a class="lang-option" on:click={() => changeLanguage("en")}>English</a>
        </div>
      </div>
    </div>
  {/if}
    