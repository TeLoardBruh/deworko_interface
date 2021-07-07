<template>
  <div class="bg-home h-screen">
    <section class="ml-10 grid grid-cols-2 gap-2 lg:grid-cols-3">
      <nav>
        <router-link to="/" class="text-white">
          <div
            class="border-solid h-16 flex-1 rounded-md border-4 border-green-500 border-opacity-100 font-extrabold flex justify-center items-center
          hover:bg-green-500 dark:hover:bg-green-500 hover:border-transparent | transition-colors duration-500"
          >
            DeWroko
          </div>
        </router-link>
      </nav>
    </section>

    <section>
      <div class="m-10 grid grid-cols-2 gap-2 lg:grid-cols-3">
        <div class="h-16 flex-1"></div>
        <div></div>
        <div class="h-16 flex-1"></div>
        <div class="h-16 flex-1"></div>
        <div
          class="border-solid h-auto bg-green-500 rounded-md font-extrabold text-green-500 flex justify-center items-center w-auto item-center"
        >
          <div class="p-5">
            <p class="text-white text-center text-3xl">ToDo</p>
            <div class="flex flex-col">
              <select
                v-model="selected"
                class="border border-gray-300 rounded-full text-gray-600 h-10 mt-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
              >
                <option disabled value="">Choose a moves</option>
                <option>Sqaut</option>
                <option>Jumping Jack</option>
                <option>Single leg stand</option>
                <option>High knees</option>
                <option>Lunge</option>
                <option>Lateral shuffles</option>
              </select>

              <input
                type="text"
                name
                id
                placeholder="Number of moves"
                v-model="number"
                class="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 mt-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
              />
              <div class="grid grid-cols-2">
                <div></div>
                <div
                >
                  <input
                    type="button"
                    v-bind:disabled="isDisabled"
                    v-on:click="create"
                    value="Create"
                    class="border-solid rounded-md border-4 border-black-500 border-opacity-100 font-extrabold text-black flex justify-center items-center m-5 p-2 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
        <div
          class="flex-1 rounded-md font-extrabold text-white flex justify-start items-center text-3xl absolute inset-x-0 bottom-0"
        >
          <a href="/">
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
          </a>
          <a href="/">Back</a>
        </div>
      </div>
    </section>
    <section>
      <div
        class="absolute inset-x-0 bottom-0 flex justify-center items-center text-green-600"
      >
        @Copyright ~ 2021. By rax
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import axios from "axios";
export default {
  name: "Home",
  components: {
    // HelloWorld
  },
  data() {
    return {
      selected: "",
      number: "",
    };
  },
  computed: {
    isDisabled() {
      return this.number.length == 0;
    },
  },
  methods: {
    create() {
      let selected = this.selected;
      let number = this.number;
      let email = localStorage.getItem("authE");
      // console.log(selected, number);
      axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
      axios
        .post("https://deworko-database.herokuapp.com/post", {
          title: selected,
          content: number,
          email: email,
        })
        .then(() => {
          //

          window.location.href = "/todo";
        });
    },
  },
};
</script>
<style>
.bg-home {
  background-image: url("../assets/pexels-photo-3112004.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100%;
}
</style>
