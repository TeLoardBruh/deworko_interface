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

    <section class="ml-10">
      <div class="m-10 grid grid-cols-2 lg:grid-cols-3">
        <div></div>
        <div></div>
        <div class=""></div>
        <div
          class="font-extrabold text-green-500 flex justify-center items-center item-center"
        >
          <div class="p-5">
            <p
              class="border-solid bg-green-500 rounded-md font-extrabold flex justify-center items-center w-auto item-center text-white text-3xl p-5"
            >
              Report
            </p>
            <div v-if="works.length == 0">
              <div class="text-white text-center">
                NO DATA
              </div>
            </div>
            <div v-else>
              <div class="text-white">
                <!-- {{ works }} -->
                <div class="">
                  <div
                    class="shadow overflow-hidden rounded border-b border-gray-200"
                  >
                    <table class="min-w-full bg-white">
                      <thead class="bg-gray-800 text-white">
                        <tr>
                          <th
                            class="text-center py-3 px-4 uppercase font-semibold text-sm"
                          >
                            Date
                          </th>
                          <th
                            class="w-1/3 text-center py-3 px-4 uppercase font-semibold text-sm"
                          >
                            Squat
                          </th>
                          <th
                            class="w-1/3 text-center py-3 px-4 uppercase font-semibold text-sm"
                          >
                            Jumping jack
                          </th>
                          <th
                            class="text-center py-3 px-4 uppercase font-semibold text-sm"
                          >
                            Single leg stand
                          </th>
                          <th
                            class="text-center py-3 px-4 uppercase font-semibold text-sm"
                          >
                            High knees
                          </th>
                          <th
                            class="text-center py-3 px-4 uppercase font-semibold text-sm"
                          >
                            Lunge
                          </th>
                          <th
                            class="text-center py-3 px-4 uppercase font-semibold text-sm"
                          >
                            Lateral shuffles
                          </th>
                        </tr>
                      </thead>
                      <tbody
                        class="text-gray-700"
                        v-for="item in works"
                        :key="item.id"
                      >
                        <tr>
                          <td class="text-left py-3 px-4">
                            {{
                              item.createdAt
                                .split("T")[0]
                                .replace("-", ":")
                                .replace("-", ":")
                            }}
                          </td>
                          <td class="w-1/3 text-center py-3 px-4">
                            {{ item.sqaut }}
                          </td>
                          <td class="w-1/3 text-center py-3 px-4">
                            {{ item.jack }}
                          </td>
                          <td class="w-1/3 text-center py-3 px-4">
                            {{ item.high_knees }}
                          </td>
                          <td class="w-1/3 text-center py-3 px-4">
                            {{
                              item.single_leg_stand_r + item.single_leg_stand_l
                            }}
                          </td>
                          <td class="w-1/3 text-center py-3 px-4">
                            {{ item.jumping_lunge_r + item.jumping_lunge_l }}
                          </td>
                          <td class="w-1/3 text-center py-3 px-4">
                            {{ item.lateral_shuffles }}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div action class="flex flex-col"></div>
          </div>
        </div>
        <div></div>
        <div class="">
          <div class="text-center flex justify-center item-center">
            <p
              class="border-solid bg-green-500 rounded-md font-extrabold flex justify-center items-center w-auto item-center text-white p-5 text-3xl"
            >
              Goals
            </p>
            <router-link to="/todo">
              <button
                class="border-solid h-auto p-5 font-extrabold text-2xl rounded-md border-4 border-green-500 border-opacity-100 font-bold flex justify-center items-center text-white ml-5 hover:bg-green-500 dark:hover:bg-green-500 hover:border-transparent | transition-colors duration-500"
              >
                Create new goal
              </button>
            </router-link>
          </div>
          <div v-if="goals.length == 0">
            <div class="text-white text-center font-extrabold">
              NO DATA
            </div>
          </div>

          <div v-for="item in goals" :key="item.id">
            <div
              class="bg-gray-100 border-red-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-red-400 dark:hover:bg-red-600 hover:border-transparent | transition-colors duration-500 mt-10"
              v-if="item.done == false"
            >
              <input
                type="checkbox"
                class="form-checkbox h-8 w-8 m-2"
                v-model="item.done"
                v-on:click="updateReport(item.id)"
              />
              <div class="flex flex-col justify-center">
                <p class="text-gray-900 dark:text-gray-300 font-semibold">
                  {{ item.title }} : {{ item.content }}
                </p>
                <p
                  class="text-black dark:text-gray-100 text-justify font-semibold"
                >
                  {{ item.createdAt.split("T")[0] }}
                </p>
              </div>
            </div>
            <div
              class="bg-gray-100 border-green-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-green-400 dark:hover:bg-green-600 hover:border-transparent | transition-colors duration-500 mt-10"
              v-else
            >
              <input
                type="checkbox"
                class="form-checkbox h-8 w-8 m-2"
                v-model="item.done"
                v-on:click="updateReport(item.id)"
              />
              <div class="flex flex-col justify-center">
                <p class="text-gray-900 dark:text-gray-300 font-semibold">
                  {{ item.title }} : {{ item.content }}
                </p>
                <p
                  class="text-black dark:text-gray-100 text-justify font-semibold"
                >
                  {{ item.createdAt.split("T")[0] }}
                </p>
              </div>
            </div>
          </div>
        </div>
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
      works: [],
      goals: [],
      toggle: true,
      email: "",
    };
  },

  mounted() {
    let id = window.localStorage.getItem("ids");
    axios
      .get(`https://deworko-database.herokuapp.com/userPost/${id}`)
      .then((res) => {
        //   console.log(res);
        let userWork = res.data;
        this.works = userWork;
      });
    axios
      .get(`https://deworko-database.herokuapp.com/post/${id}`)
      .then((res) => {
        //   console.log(res);
        let userWork = res.data;
        this.goals = userWork;
      });
  },
  methods: {
    login() {
      axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
      axios
        .post("https://deworko-database.herokuapp.com/login", {
          email: this.email,
        })
        .then((res) => {
          // console.log(res);
          let email = res.data.email;
          // console.log(email);
          window.localStorage.setItem("authE", email);
          window.location.href = "/";
        });
    },
    updateReport(id) {
      // let id = window.localStorage.getItem("ids");
      let done;
      // console.log(this.goals);
      for (let i = 0; i < this.goals.length; i++) {
        let dbDone = this.goals[i].done;
        done = dbDone;
        // console.log(done);
      }
      axios
        .put(`https://deworko-database.herokuapp.com/updatereport/${id}`, {
          done: !done,
        })
        .then(() => {
          console.log("suc");

          // window.location.href = "/";
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
