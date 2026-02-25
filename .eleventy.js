module.exports = function (eleventyConfig) {
  // Passthrough copy
  eleventyConfig.addPassthroughCopy("src/style.css");
  eleventyConfig.addPassthroughCopy({ "current": "current" });

  // News collection sorted by date descending
  eleventyConfig.addCollection("news", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/news/*.md").sort((a, b) => b.date - a.date);
  });

  // Head filter (take first n items)
  eleventyConfig.addFilter("head", function (array, n) {
    return (array || []).slice(0, n);
  });

  // German date filter
  eleventyConfig.addFilter("germanDate", function (date) {
    const months = [
      "Januar", "Februar", "März", "April", "Mai", "Juni",
      "Juli", "August", "September", "Oktober", "November", "Dezember"
    ];
    const d = new Date(date);
    return `${d.getDate()}. ${months[d.getMonth()]} ${d.getFullYear()}`;
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
