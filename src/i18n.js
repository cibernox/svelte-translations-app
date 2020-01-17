import { addMessages, init } from 'svelte-i18n'
import en from "../messages/en.json";
import es from "../messages/es.json";

addMessages('en', en);
addMessages('es', es);

init({
  fallbackLocale: "en",
  // initialLocale: { navigator: true },
  formats: {
    date: {
      "abbr-full": { weekday: "long", month: "short", day: "numeric" }
    },
    time: {
      hour: { hour: "numeric" }
    }
  }
});