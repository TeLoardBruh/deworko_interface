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
            <p class="text-white text-center">Login</p>
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
                <div
                  class="border-solid bg-gray-500 rounded-md border-4 border-green-500 border-opacity-100 font-extrabold text-green-500 flex justify-center items-center m-5 p-2"
                >
                  <button v-on:click="login">Login</button>
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
  email: "",
  components: {
    // HelloWorld
  },
  methods: {
    login() {
      axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
      axios
        .post("http://localhost:3000/login", {
          email: this.email,
        })
        .then((res) => {
          // console.log(res);
          let email = res.data.email;
          let ids = res.data.id;
          // console.log(email);
          window.localStorage.setItem("authE",email);
          window.localStorage.setItem("ids",ids);
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
