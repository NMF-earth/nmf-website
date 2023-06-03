/**
 *@param {string} path
 *@return {string}
 */
 const phoneMockup = (path) => {
    return `
      <div class="flex-1 justify-center">
        <figure class="mx-auto max-w-full w-60 h-auto">
            <div class="p-1.5 bg-gray-800 rounded-3xl
                    shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(45_55_75_/_20%),_0_2rem_4rem_-2rem_rgb(45_55_75_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(45_55_75_/_20%)]
                    dark:bg-gray-600
                    dark:shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(0_0_0_/_20%),_0_2rem_4rem_-2rem_rgb(0_0_0_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(0_0_0_/_20%)]">
                <img
                    class="max-w-full h-auto rounded-[1.25rem]"
                    src=${path}
                />
            </div>
        </figure>
      </div>
      `;
  };
  
  module.exports = phoneMockup;
  