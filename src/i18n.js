import { addMessages, init, navigatorLocale } from "precompile-intl-runtime";
import en from "../messages/en.json";
// import es from "../messages/es.json";
// import gl from "../messages/gl.json";

addMessages('en', en);
addMessages('en-GB', en);
addMessages('en-US', en);
// addMessages('es', es);
// addMessages('gl', gl);

init({
  fallbackLocale: "en",
  initialLocale: navigatorLocale(),
  formats: {
    date: {
      "abbr-full": { weekday: "long", month: "short", day: "numeric" }
    },
    time: {
      hour: { hour: "numeric" }
    }
  }
});