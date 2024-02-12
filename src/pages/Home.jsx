import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div class="inline-flex rounded-md shadow-sm" role="group">
      <Link to={"/counter"}>
        <button
          type="button"
          class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          Counter
        </button>
      </Link>

      <Link to={"/form"}>
        <button
          type="button"
          class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          Form
        </button>
      </Link>

      <button
        type="button"
        class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
      >
        Messages
      </button>
    </div>
  );
}

export default Home;
