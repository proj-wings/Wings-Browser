const preprocess = require("svelte-preprocess");

module.exports = {
  preprocess: preprocess({
    scss: {
      prependData: `
        @use "src/styles/_mixin.scss" as *;
        @use "src/styles/function/_flex.scss" as *;
      `,
    },
  }),
};