export default function(eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy({ "public": "/" });

  // Year filter
  eleventyConfig.addFilter("year", () => new Date().getFullYear());

  // Helper for baseUrl (if needed from templates)
  eleventyConfig.addShortcode("baseUrl", function(site) {
    return site?.baseUrl || "/";
  });

  // i18n: language collections (optional use)
  eleventyConfig.addCollection("pages_es", (api) =>
    api.getFilteredByGlob("src/es/*.md"));
  eleventyConfig.addCollection("pages_en", (api) =>
    api.getFilteredByGlob("src/en/*.md"));

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
}
