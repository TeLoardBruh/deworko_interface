<template>
  <div class="bg-home h-screen">
    <section class="ml-10 grid grid-cols-6 gap-4 lg:grid-cols-6">
      <div
        class="col-start-1 col-end-4 border-solid h-16 flex-1 rounded-md border-4 border-green-500 border-opacity-100 font-extrabold flex justify-center items-center"
      >
        <router-link to="/" class="text-white">DeWroko</router-link>
      </div>
      <div v-if="isAuthenticated">
        <div class="ml-5 mr-5">
          <button
            v-on:click="logout"
            class="border-solid h-16 p-5 flex-1 rounded-md border-4 border-green-500 border-opacity-100 font-extrabold flex justify-center items-center text-white"
          >
            Logout
          </button>
        </div>
      </div>
      <div v-else class="flex">
        <!-- <div class=""> -->
        <div class="ml-5 mr-5">
          <router-link
            to="/login"
            class="border-solid h-16 p-5 flex-1 rounded-md border-4 border-green-500 border-opacity-100 font-extrabold flex justify-center items-center text-white"
            >Login</router-link
          >
        </div>
        <div class="ml-5 mr-5">
          <router-link
            to="/Register"
            class="border-solid h-16 p-5 flex-1 rounded-md border-4 border-green-500 border-opacity-100 font-extrabold flex justify-center items-center text-white"
            >Register</router-link
          >
        </div>
        <!-- </div> -->
      </div>
    </section>
    <section class="flex justify-center items-center h-2/6">
      <div class="font-extrabold">
        <div class="text-white border-b-4 text-4xl border-green-500">
          Welcome to DeWorko
        </div>
        <div class="text-white border-b-4 text-4xl border-green-500 pl-10">
          your AI personal trainer
        </div>
      </div>
    </section>

    <section>
      <div class="m-10 grid grid-cols-2 gap-2 lg:grid-cols-3">
        <router-link to="/instruction/learn">
          <div
            class="border-solid h-16 bg-gray-500 flex-1 rounded-md border-4 border-green-500 border-opacity-100 font-extrabold text-green-500 flex justify-center items-center"
          >
            Learn
          </div>
        </router-link>
        <div></div>

        <div v-if="isAuthenticated == true">
          <router-link to="todo">
            <div
              class="border-solid bg-gray-500 h-16 flex-1 rounded-md border-4 border-green-500 border-opacity-100 font-extrabold text-green-500 flex justify-center items-center"
            >
              Todo
            </div>
          </router-link>
        </div>
        
        <div v-if="isAuthenticated == true">
          <router-link to="/instruction/train">
            <div
              class="border-solid h-16 bg-gray-500 flex-1 rounded-md border-4 border-green-500 border-opacity-100 font-extrabold text-green-500 flex justify-center items-center"
            >
              Train
            </div>
          </router-link>
        </div>
        
        <div></div>
        <div v-if="isAuthenticated == true">
          <router-link :to="'report'+ids">
            <div
              class="border-solid bg-gray-500 h-16 flex-1 rounded-md border-4 border-green-500 border-opacity-100 font-extrabold text-green-500 flex justify-center items-center"
            >
              Report
            </div>
          </router-link>
        </div>
        
        

        <router-link to="/about">
          <div
            class="border-solid h-16 bg-gray-500 flex-1 rounded-md border-4 border-green-500 border-opacity-100 font-extrabold text-green-500 flex justify-center items-center"
          >
            About Us
          </div>
        </router-link>
      </div>
    </section>
    <section>
      <div
        class="absolute inset-x-0 bottom-0 flex justify-center items-center text-green-600"
      >
        @Copyright ~ 2021. rax
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "Home",
  data() {
    return {
      isAuthenticated: false,
      ids: ''
    };
  },
  components: {
    // HelloWorld
  },
  updated() {
    // this.guardMyroute();
  },
  mounted() {
    this.guardMyroute();
    // console.log("in moute" + this.isAuthenticated);
  },
  methods: {
    guardMyroute() {
      // eslint-disable-next-line no-unused-vars

      //this is just an example. You will have to find a better or
      // centralised way to handle you localstorage data handling
      let ids = localStorage.getItem("ids");
      this.ids = ids;
      // console.log(this.ids)
      if (localStorage.getItem("authE")) {
        this.isAuthenticated = true;
        // console.log("in true case" + this.isAuthenticated);
      } else {
        this.isAuthenticated = false;
        // console.log("in false case" + this.isAuthenticated);
      }
    },
    logout() {
      window.localStorage.removeItem("authE");
      window.location.reload();
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
