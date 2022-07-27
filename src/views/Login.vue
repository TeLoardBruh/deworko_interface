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
            <p class="text-white text-center text-3xl">Login</p>
            <div action class="flex flex-col">
              <input
                type="text"
                name
                id
                placeholder="Email........"
                class="m-5 bg-gray-200 p-5"
                v-model="email"
              />
              <div class="grid grid-cols-2">
                <div></div>
                
                <input
                  type="button"
                  v-bind:disabled="isDisabled"
                  v-on:click="login"
                  value="Login"
                  class="border-solid rounded-md border-4 border-black-500 border-opacity-100 font-extrabold text-black flex justify-center items-center m-5 p-2 cursor-pointer"
                />
                <!-- <div
                  class="border-solid bg-gray-500 rounded-md border-4 border-green-500 border-opacity-100 font-extrabold text-green-500 flex justify-center items-center m-5 p-2"
                  v-on:click="login"
                  v-bind:disabled="isDisabled"
                >
                  <button>Login</button>
                </div> -->
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
      email: "",
    };
  },
  computed: {
    isDisabled() {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return !re.test(this.email);
    },
  },
  methods: {
    login() {
      axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
      axios
        .post("https://deworko-db.herokuapp.com/login", {
          email: this.email,
        })
        .then((res) => {
          // console.log(res);
          let email = res.data.email;
          let ids = res.data.id;
          // console.log(email);
          window.localStorage.setItem("authE", email);
          window.localStorage.setItem("ids", ids);
          window.location.href = "/";
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
