module.exports = function (eleventyConfig) {
  // Copia los archivos estáticos (como CSS y JavaScript) a la carpeta de salida
  eleventyConfig.addPassthroughCopy("src/static");
  // Return your Object options:
  return {
    dir: {
      input: "src",
      output: "docs",
    },
  };
};
