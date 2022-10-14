// const { defineConfig } = require('cypress')

// module.exports = defineConfig({
//   reporter: 'cypress-multi-reporters',
//   reporterOptions: {
//     reporterEnabled: 'mochawesome',
//     mochawesomeReporterOptions: {
//       reportDir: 'cypress/reports/mocha',
//       quite: true,
//       overwrite: false,
//       html: false,
//       json: true,
//     },
//   }
//   ,
//   e2e: {
//     // We've imported your old cypress plugins here.
//     // You may want to clean this up later by importing these.
//     setupNodeEvents(on, config) {
//       return require('./cypress/plugins/index.js')(on, config)
//     },
//   },
// })

({
  "reporter": "cypress-multi-reporters",
  "reporterOptions": {
      "reporterEnabled": "mochawesome",
      "mochawesomeReporterOptions": {
          "reportDir": "cypress/reports/mocha",
          "quite": true,
          "overwrite": false,
          "html": false,
          "json": true
      }
  }
})