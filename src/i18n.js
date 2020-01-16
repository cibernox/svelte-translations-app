import { addMessages, init } from 'svelte-i18n'
import en from "../messages/en.json";

addMessages('en', en);

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