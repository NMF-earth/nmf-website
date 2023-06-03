/**
 *@param {string} title
 *@param {string} subtitle
 *@return {string}
 */
const accordion = (title, subtitle) => {
  return `
    <details class="group py-1 text-lg">
      <summary class="flex cursor-pointer flex-row items-center justify-between py-1 font-semibold text-gray-800 marker:[font-size:0px]">
        ${title}
          <svg
              class="h-6 w-6 rotate-0 transform text-gray-400 group-open:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path>
          </svg>
      </summary>
      <p class="text-gray-500">${subtitle}</p>
    </details>
  `;
};

module.exports = accordion;
