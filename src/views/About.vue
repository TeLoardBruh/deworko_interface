<template>
  <div class="grid grid-cols-3 gap-4 relative">
    <div class="col-span-1 bg-green-500 h-screen relattive fixed w-80">
      <div
        class="flex h-screen justify-center items-center text-white font-extrabold text-4xl"
      >About Us</div>
      <div
        class="flex-1 rounded-md font-extrabold text-white flex justify-start items-center text-3xl absolute inset-x-0 bottom-0"
      >
        <router-link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-16 w-16"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
            />
          </svg>
        </router-link>
        <router-link to="/">Back</router-link>
      </div>
    </div>

    <div class="col-span-3 ml-80">
      <div
        class="bg-gray-500 flex-1 rounded-md font-extrabold text-white flex justify-center items-center m-10 p-10 text-2xl"
      >Hello, my name is Reak. I am from paragon international university. My major is in the computer science field. Welcome, to my final year project page.</div>
      <div
        class="bg-gray-500 flex-1 rounded-md font-extrabold text-white flex justify-center items-center m-10 p-10 text-2xl"
      >This a virtual workout platform that helps athletes to perform their exercises more efficiently. With the help of technology is possible to create this platform. This can work as your workout assistance that suggests your movement and adjust your movement so that you can archive your goal in the workout faster.</div>
      <div
        class="bg-gray-500 flex-1 rounded-md font-extrabold text-white flex justify-center items-center m-10 p-10 text-2xl"
      >In this project I am going to use VueJs as frontend framework with tailwind CSS, nodejs as server side rendering and for data modeling is tensorflow js (posnet)</div>
      <div
        class="flex-1 rounded-md font-extrabold text-green-500 flex justify-start items-center text-3xl"
      ></div>
    </div>

    <div
      class="absolute inset-x-0 bottom-0 flex justify-center items-center text-green-600"
    >@Copyright ~ 2021. By rax</div>
  </div>
</template>
