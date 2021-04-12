<template>
  <div class="grid grid-cols-3 gap-4">
    <div class="col-span-1 bg-green-500 h-screen">
      <div
        class="flex h-screen justify-center items-center text-white font-extrabold text-4xl"
      >Train</div>
    </div>

    <div class="col-span-2">
      <div
        class="bg-gray-500 flex-1 rounded-md font-extrabold text-white flex justify-center items-center m-10 p-10 text-2xl"
      >Song</div>

      <div class="flex justify-between">
        <div
          class="bg-gray-500 flex-1 rounded-md font-extrabold text-white flex justify-center items-center m-10 p-10 text-2xl"
        >Video</div>
        <div
          class="bg-gray-500 flex-1 rounded-md font-extrabold text-white flex justify-center items-center m-10 p-10 text-2xl"
        >Train model</div>
      </div>

      <div
        class="flex-1 rounded-md font-extrabold text-green-500 flex justify-start items-center text-3xl"
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

    <div
      class="absolute inset-x-0 bottom-0 flex justify-center items-center text-green-600"
    >@Copyright ~ 2021. By rax</div>
  </div>
</template>
