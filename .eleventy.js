const { DateTime } = require("luxon");
const fs = require("fs");
const markdownIt = require("markdown-it");
const pageHeading = require("./src/_includes/shortcodes/pageHeading");
const waveDivider = require("./src/_includes/shortcodes/waveDivider.js");
const accordion = require("./src/_includes/shortcodes/accordion.js");
const phoneMockup = require("./src/_includes/shortcodes/phoneMockup.js");
const badge = require("./src/_includes/shortcodes/badge");

const lazyImagesPlugin = require("eleventy-plugin-lazyimages");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const isPostPublished = (post) => !post.data.draft;

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("src/assets/css/style.css");
  eleventyConfig.addPassthroughCopy("src/assets/images");
  eleventyConfig.addPassthroughCopy("src/assets/favicon");
  eleventyConfig.addPassthroughCopy({ "src/robots.txt": "/robots.txt" });
  eleventyConfig.addPlugin(lazyImagesPlugin);
  eleventyConfig.addPlugin(pluginSyntaxHighlight);

  eleventyConfig.addPassthroughCopy({
    "./node_modules/alpinejs/dist/cdn.js": "./js/alpine.js",
  });

  const md = new markdownIt({
    html: true,
    breaks: true,
    linkify: true,
  });

  eleventyConfig.addPairedShortcode("markdown", (content) => {
    return md.render(content);
  });

  let getSvgContent = function (file) {
    let relativeFilePath = `./src/assets/svg/${file}.svg`;
    let data = fs.readFileSync(relativeFilePath, function (err, contents) {
      if (err) return err;
      return contents;
    });

    return data.toString("utf8");
  };

  eleventyConfig.addShortcode("svg", getSvgContent);
  eleventyConfig.addShortcode("pageHeading", pageHeading);
  eleventyConfig.addShortcode("badge", badge);
  eleventyConfig.addShortcode("waveDivider", waveDivider);
  eleventyConfig.addShortcode("accordion", accordion);
  eleventyConfig.addShortcode("phoneMockup", phoneMockup);

  eleventyConfig.addCollection("page", function (collections) {
    return collections.getFilteredByTag("page").sort(function (a, b) {
      return a.data.order - b.data.order;
    });
  });

  eleventyConfig.addCollection("posts", (collection) => {
    return collection.getFilteredByGlob("./src/posts/*.md").filter(isPostPublished);
  });

  eleventyConfig.addShortcode("currentDate", (date = DateTime.now()) => {
    return date;
  });

  eleventyConfig.addFilter("dateFormating", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  return {
    dir: {
      input: "src",
      data: "_data",
      includes: "_includes",
      layouts: "_layouts",
    },
  };
};
