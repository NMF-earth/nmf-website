/**
 *@param {string} title
 *@param {string} subtitle
 *@return {string}
 */
const pageHeading = (title, subtitle) => {
  return `
    <h1 class='text-3xl md:text-4xl font-bold mt-0 sm:mt-2 md:mt-4'>${title}</h1>
    <h2 class='text-2xl md:text-4xl color-primary font-semibold mt-1 sm:mt-2 mb-8 md:mb-16'>${subtitle}</h2>
    `;
};

module.exports = pageHeading;
