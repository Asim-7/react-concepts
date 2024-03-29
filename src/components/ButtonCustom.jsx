import React from "react";

function ButtonCustom({ text }) {
  return (
    <>
      {text ? (
        <button
          type="button"
          class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          {text}
        </button>
      ) : (
        <h1>No text provided</h1>
      )}
    </>
  );
}

export default ButtonCustom;
