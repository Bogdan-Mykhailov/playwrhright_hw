import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import prettierPlugin from "eslint-plugin-prettier";

export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      "object-curly-spacing": ["error", "always"],
      "no-console": "error",
      "eol-last": ["error", "always"],
      indent: ["error", 2],
    },
  },
];
