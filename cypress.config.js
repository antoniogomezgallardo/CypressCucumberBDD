const { defineConfig } = require("cypress");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprocessor,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", preprocessor(config));

  // MochaAwesome reporter
  //require('cypress-mochawesome-reporter/plugin')(on)
  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  //reporter: 'cypress-mochawesome-reporter', 
  //--------> also need to paste this in package.json inside devDependencies:"cypress-mochawesome-reporter": "^3.8.2"

  video: true,
  e2e: {
    specPattern: "cypress/e2e/features/*.feature",
    setupNodeEvents,
  },
  env: {
    baseUrl: "https://automationexercise.com/"
      }
});
