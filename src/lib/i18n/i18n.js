import { derived, writable } from "svelte/store";
import translations from "./translations";

export const locale = writable("en");
export const locales = Object.keys(translations);

if (typeof navigator !== 'undefined') {
  navigator.languages.every(lang => {
    if(lang === 'en') {
      return false
    } else if(lang === 'de') {
      locale.set('de');
      return false;
    } else if(lang === 'fr') {
      locale.set('fr');
      return false;
    } else if(lang === 'vn') {
      locale.set('vn');
      return false;
    }
  })
}


/**
 * @param {string} locale
 * @param {string | number} key
 * @param {{ [x: string]: any; }} vars
 */
function translate(locale, key, vars) {
  // Let's throw some errors if we're trying to use keys/locales that don't exist.
  // We could improve this by using Typescript and/or fallback values.
  if (!key) throw new Error("no key provided to $t()");
  if (!locale) throw new Error(`no translation for key "${key}"`);

  // Grab the translation from the translations object.
  let text = translations[locale][key];

  if (!text) throw new Error(`no translation found for ${locale}.${key}`);

  // Replace any passed in variables in the translation string.
  Object.keys(vars).map((k) => {
    const regex = new RegExp(`{{${k}}}`, "g");
    text = text.replace(regex, vars[k]);
  });

  return text;
}

export const t = derived(locale, ($locale) => (/** @type {string | number} */ key, vars = {}) =>
  translate($locale, key, vars)
);


export const setLang = function(/** @type {string} */ lang) {
  if(lang === 'en') {
    return false
  } else if(lang === 'de') {
    locale.set('de');
    return false;
  } else if(lang === 'fr') {
    locale.set('fr');
    return false;
  } else if(lang === 'vn') {
    locale.set('vn');
    return false;
  }
}


