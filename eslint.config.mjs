import js from "@eslint/js";
import globals from "globals";

export default [
  { ignores: ["dist/**"] },
  js.configs.recommended,
  {
    files: ["src/js/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "script",
      globals: {
        ...globals.browser,
        Handlebars: "readonly",
      },
    },
    rules: {
      indent: ["error", 2],
      quotes: ["error", "single", { allowTemplateLiterals: true }],
      semi: ["error", "always"],
      "no-console": "off",
    },
  },
  {
    files: ["src/js/script.js"],
    languageOptions: {
      globals: {
        dataSource: "readonly",
        utils: "readonly",
      },
    },
  },
  {
    files: ["*.mjs", "scripts/**/*.mjs"],
    languageOptions: { globals: globals.node },
  },
];
