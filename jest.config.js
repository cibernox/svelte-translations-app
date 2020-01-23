module.exports = {
  bail: false,
  moduleFileExtensions: ["js", "svelte", "json"],
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.svelte$": "svelte-jester"
  },
  verbose: true,
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  testEnvironment: "jest-environment-jsdom-fifteen",
  transformIgnorePatterns: [
    "node_modules/(?!(svelte-routing)/)"
  ]
};
