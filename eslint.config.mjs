import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // --------------------
  // Browser scripts
  // --------------------
  { 
    files: ["**/script.js"],
    plugins: { js }, 
    extends: ["js/recommended"], 
    languageOptions: { 
      globals: {
        ...globals.browser,
        add: "readonly",
        subtract: "readonly",
        multiply: "readonly",
        divide: "readonly",
        calculate: "readonly"
      },
      sourceType: "script"
    } 
  },

  // --------------------
  // Jest / Node test files
  // --------------------
  { 
    files: ["**/*.test.js"],
    languageOptions: {
      globals: {
        ...globals.jest,       // describe, test, expect, etc.
        require: "readonly",   // Node require
        module: "readonly",    // Node module
        __dirname: "readonly", // Node global
        __filename: "readonly"
      },
      sourceType: "script"
    }
  },

  // --------------------
  // Other JS files
  // --------------------
  { 
    files: ["**/*.js"], 
    languageOptions: { 
      sourceType: "script"
    } 
  },
]);
