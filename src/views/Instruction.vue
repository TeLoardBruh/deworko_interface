<template>
  <div class="grid grid-cols-3 gap-4">
    <div class="col-span-1 bg-green-500 h-screen">
      <div
        class="flex h-screen justify-center items-center text-white font-extrabold text-4xl"
      >
        Instructions
      </div>
    </div>

    <div class="col-span-2">
      <div class="flex h-screen justify-center items-center">
        <div class="grid grid-cols-3 flex justify-center items-center">
          <div>
            <img src="../assets/vector_1.png" class />
            <div
              class="bg-gray-500 flex rounded-md font-extrabold text-white flex justify-center items-center m-10 p-10 text-4xl"
            >
              Allow camera access and wait for the webcam to load.
            </div>
          </div>
          <div>
            <img src="../assets/vector_2.png" />
            <div
              class="bg-gray-500 flex rounded-md font-extrabold text-white flex justify-center items-center m-10 p-10 text-4xl"
            >
              Make your moves in the same way as the stick figure.
            </div>
          </div>
          <div>
            <img src="../assets/vector_3.png" />
            <div
              class="bg-gray-500 flex rounded-md font-extrabold text-white flex justify-center items-center m-10 p-10 text-4xl"
            >
              Your real-time feedback will disply as circle in the screen.
              Enjoy!
            </div>
          </div>

          <div
            class="flex rounded-md font-extrabold text-green-500 flex justify-start items-center text-3xl"
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
          <div></div>
          <div
            class="flex rounded-md font-extrabold text-green-500 flex justify-start items-center text-3xl"
          >
            <router-link :to="'/' + $route.params.page"
              >Let’s get start</router-link
            >
            <router-link :to="'/' + $route.params.page">
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
                  d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div
      class="absolute inset-x-0 bottom-0 flex justify-center items-center text-green-600"
    >
      @Copyright ~ 2021. By rax
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
