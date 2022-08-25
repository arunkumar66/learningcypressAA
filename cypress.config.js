const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "env": {
      "cleanturl": "https://register.rediff.com/register/register.php?FormName=user_details"
    },
    setupNodeEvents(on, config) {


      // implement node event listeners here
    },
  },
});
