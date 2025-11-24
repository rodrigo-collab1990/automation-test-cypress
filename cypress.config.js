const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    supportFile: 'cypress/support/e2e.js',  // deve ficar aqui
    experimentalStudio: true,               // deve ficar aqui
    experimentalSourceRewriting: true,      // deve ficar aqui

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

