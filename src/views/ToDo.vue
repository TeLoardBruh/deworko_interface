<template>
  <div class="bg-home h-screen">
    <section class="ml-10 grid grid-cols-2 gap-2 lg:grid-cols-3">
      <nav>
        <div
          class="border-solid h-16 flex-1 rounded-md border-4 border-green-500 border-opacity-100 font-extrabold flex justify-center items-center"
        >
          <router-link to="/" class="text-white">DeWroko</router-link>
        </div>
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
            <p class="text-white text-center">ToDo</p>
            <div class="flex flex-col">
              <select
                v-model="selected"
                class="border border-gray-300 rounded-full text-gray-600 h-10 mt-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
              >
                <option disabled value="">Choose a moves</option>
                <option value="sqaut">Sqaut</option>
                <option value="jack">Jumping Jack</option>
                <option value="single_leg">Single leg stand</option>
                <option value="high_knees">High knees</option>
                <option value="jumping_lunge">Lunge</option>
                <option value="lateral_shuffles">Lateral shuffles</option>
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
                  class="border-solid bg-gray-500 rounded-md border-4 border-green-500 border-opacity-100 font-extrabold text-green-500 flex justify-center items-center m-5 p-2"
                >
                  <button v-on:click="create">Create</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
        <div></div>
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
  methods: {
    create() {
      let selected = this.selected;
      let number = this.number;
      let email = localStorage.getItem("authE");
      // console.log(selected, number);
      axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
      axios
        .post("http://localhost:3000/post", {
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
