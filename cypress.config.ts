const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 10000,
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
    },
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "reports",
      overwrite: false,
      html: true,
      json: true,
    },
    baseUrl: "https://www.saucedemo.com/",
  },
});
