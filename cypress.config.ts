apiUrl: "http://localhost:3003";

import { defineConfig } from "cypress";
import dotenv from "dotenv";

dotenv.config();

// Command to start Real World App: 1. first open WSL, 2. Run cd ~/work/cypress-realworld-app , 3. run: yarn dev

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: process.env.REAL_WORLD_APP_BASE_URL,
    defaultCommandTimeout: 10000, // wait up to 10s for commands like cy.get()
    pageLoadTimeout: 60000, // wait up to 60s for page loads
    requestTimeout: 15000, // wait up to 15s for API requests
    responseTimeout: 15000, // wait up to 15s for API responses
    retries: {
      runMode: 2, // retry failed tests 2 times when running cypress run
      openMode: 1, // retry failed tests 1 time in cypress open
    },
    scrollBehavior: "center", // optional: ensures cy.click scrolls to center
  },
  env: {
    REAL_WORLD_APP_HOME: process.env.REAL_WORLD_APP_HOME,
    REAL_WORLD_APP_BASE_URL: process.env.REAL_WORLD_APP_BASE_URL,
    REAL_WORLD_APP_SIGN_IN: process.env.REAL_WORLD_APP_SIGN_IN,
    DEFOULT_USERNAME: process.env.DEFOULT_USERNAME,
    DEFOULT_PASSWORD: process.env.DEFOULT_PASSWORD,
  },
});
