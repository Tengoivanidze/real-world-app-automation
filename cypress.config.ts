import { defineConfig } from "cypress";
import dotenv from 'dotenv'

dotenv.config()

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    REAL_WORLD_APP_BASE_URL: process.env.REAL_WORLD_APP_BASE_URL,
    TEST_USERNAME:  process.env.TEST_USERNAME,
    TEST_PASSWORD: process.env.TEST_PASSWORD ,
  },
});
