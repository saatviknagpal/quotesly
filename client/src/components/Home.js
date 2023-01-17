import React from "react";

export default function Home() {
  return (
    <>
      <div className="relative flex flex-col min-h-screen overflow-hidden text-center pt-20 space-y-5">
        <figure class="max-w-screen-md mx-auto text-center bg-gray-200 p-4 rounded-xl">
          <svg
            aria-hidden="true"
            class="w-12 h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
            viewBox="0 0 24 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
              fill="currentColor"
            />
          </svg>
          <blockquote>
            <p class="text-2xl italic font-medium text-gray-900 ">
              "Flowbite is just awesome. It contains tons of predesigned
              components and pages starting from login screen to complex
              dashboard. Perfect choice for your next SaaS application."
            </p>
          </blockquote>
          <figcaption class="flex items-center justify-center mt-6 space-x-3">
            <img
              class="w-6 h-6 rounded-full"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
              alt="profile"
            />
            <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
              <cite class="pr-3 font-medium text-gray-900 ">Micheal Gough</cite>
            </div>
          </figcaption>
        </figure>
      </div>
    </>
  );
}
