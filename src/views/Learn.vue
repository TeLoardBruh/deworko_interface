/* eslint-disable no-unused-vars */
<template>
  <div class="grid grid-cols-3 gap-4 overflow-hidden relative">
    <div class="col-span-1 bg-green-500 h-screen relattive fixed w-80">
      <div
        class="flex h-screen justify-center items-center text-white font-extrabold text-4xl"
      >
        <div class="flex flex-col justify-center items-center">
          <div class>Learn</div>
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
    <div
      :class="learningProc + ' ' + modalClass"
      style="background: rgba(0,0,0,.2);"
      id="modal-id"
    >
      <div
        class="w-full max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg bg-white"
      >
        <!--content-->
        <div class>
          <!--body-->
          <div class="text-center p-5 flex-auto justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4 -m-1 flex items-center text-blue-500 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-16 h-16 flex items-center text-green-500 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
            <h2 class="text-xl font-bold py-4">
              Hello ! Lets get you in shape in no time
            </h2>
            <p class="text-sm text-gray-500 px-8">
              Do you to move to training activities ? This process will include
              each move in 30 seconds interval
            </p>
          </div>
          <!--footer-->
          <div class="p-3 mt-2 text-center space-x-4 md:block">
            <a href="/learn">
              <button
                class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"
              >
                No
              </button>
            </a>
            <router-link to="/train">
              <button
                class="mb-2 md:mb-0 bg-green-500 border border-green-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-600"
              >
                Yes
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="col-span-3 ml-80">
      <!-- <div
        class="bg-gray-500 flex-1 rounded-md font-extrabold text-white flex justify-center items-center m-10 p-10 text-2xl"
      >Song</div>-->
      <div
        class="flex-1 rounded-md font-extrabold text-white flex justify-center items-center ml-10 mt-10 text-2xl"
        id="moveM"
      >
        <div class="bg-gray-500 p-10 mr-10 text-2xl rounded-md text-5xl">
          Your movement is {{ test }}
        </div>
        <div class="bg-gray-500 p-10 text-2xl rounded-md text-5xl">
          Your movement is {{ time }}
        </div>
      </div>

      <div class="flex justify-between items-center">
        <div class id="canvasDiv"></div>
        <!-- <div
          class="bg-gray-500 rounded-md font-extrabold text-white flex justify-center items-center m-10 p-10 text-2xl"
        >Train model</div>-->
        <div
          class="mt-10 bg-gray-500 p-10 text-4xl rounded-md text-white font-extrabold mr-2"
        >
          How to do {{ test }} :
          <br />
          {{ postImage.instruction }}
        </div>
        <div>
          <img :src="postImage.img1" />
        </div>
        <div>
          <img :src="postImage.img2" />
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
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-unused-vars
import * as p5 from "p5";
// // window.p5 = p5
// import "p5/lib/addons/p5.sound.min";
import "../p5.sound.js";
// eslint-disable-next-line no-unused-vars
import ml5 from "ml5";
export default {
  data() {
    return {
      test: "Sqaut",
      time: 5,
      postImage: [],
      learningProc: "hidden",
      modalClass:
        "min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none",
    };
  },
  mounted() {
    // eslint-disable-next-line no-unused-vars
    var self = this;
    // console.log(model);
    // console.log(self);
    const script = function(p5) {
      // console.log("elem");
      // console.log(self.test);
      // var speed = 2;
      // var posX = 0;
      // eslint-disable-next-line no-unused-vars

      // eslint-disable-next-line no-unused-vars
      var video;
      // eslint-disable-next-line no-unused-vars
      let poseNet;
      // eslint-disable-next-line no-unused-vars
      let pose;
      // eslint-disable-next-line no-unused-vars
      let skeleton;
      // eslint-disable-next-line no-unused-vars
      let brain;
      // eslint-disable-next-line no-unused-vars
      let poseLabel = "";
      // eslint-disable-next-line no-unused-vars
      // arrays of workouts movement
      let poseArray = [
        "sqaut",
        "jack",
        "single_leg_stand_r",
        "single_leg_stand_l",
        "high_knees",
        "jumping_lunge_r",
        "jumping_lunge_l",
        "lateral_shuffles",
      ];
      let postArrayDisplay = [
        "Sqaut",
        "Jumping Jacks",
        "Single leg stand (right leg)",
        "Single leg stand (left leg)",
        "High knees",
        "Lunge (right side)",
        "Lunge (left side)",
        "Lateral shuffles",
      ];
      let postImage = {
        0: {
          img1: "../assets/img/sqN.png",
          img2: "/assets/img/sqW.png",
          instruction:
            "Stand with feet just wider than hip-width apart and bend your hips down",
        },
        1: {
          img1: "../assets/img/jaN.png",
          img2: "../assets/img/jaW.png",
          instruction:
            "Stand with your feet together, and, your arms at your side in one jumping motion move your feet out to your sides.",
        },
        2: {
          img1: "../assets/img/jaN.png",
          img2: "../assets/img/stR.png",
          instruction:
            "Lift your right leg off the floor and bend it back at the knee",
        },
        3: {
          img1: "../assets/img/jaN.png",
          img2: "../assets/img/stL.png",
          instruction:
            "Lift your left leg off the floor and bend it back at the knee",
        },
        4: {
          img1: "../assets/img/hiR.png",
          img2: "../assets/img/hiL.png",
          instruction:
            "Normal stands, then bend your Knees up higher than hips positions.",
        },
        5: {
          img1: "../assets/img/lN.png",
          img2: "../assets/img/lr.png",
          instruction:
            "Normal stands (turn your right side around 45 degree facing the camera), then start to put your right foot forward and bend into 90 degree angle.",
        },
        6: {
          img1: "../assets/img/lN.png",
          img2: "../assets/img/ll.png",
          instruction:
            "Normal stands (turn your left side around 45 degree facing the camera), then start to put your left foot forward and bend into 90 degree angle",
        },
        7: {
          img1: "../assets/img/LateN.png",
          img2: "../assets/img/LateW.png",
          instruction:
            "Put your self in sqaut positions then move left and right",
        },
      };
      // self.postImage = postImage;

      let workoutMovement = 0;
      let poseCounter = 0;
      // body postiions
      // right
      // eslint-disable-next-line no-unused-vars
      let rightHipX = 0;
      // eslint-disable-next-line no-unused-vars
      let rightHipY = 0;
      // eslint-disable-next-line no-unused-vars
      let rightKneeX = 0;
      // eslint-disable-next-line no-unused-vars
      let rightKneeY = 0;
      // eslint-disable-next-line no-unused-vars
      let rightUnderKneeX = 0;
      // eslint-disable-next-line no-unused-vars
      let rightUnderKneeY = 0;

      // left
      // eslint-disable-next-line no-unused-vars
      let leftHipX = 0;
      // eslint-disable-next-line no-unused-vars
      let leftHipY = 0;
      // eslint-disable-next-line no-unused-vars
      let leftKneeX = 0;
      // eslint-disable-next-line no-unused-vars
      let leftKneeY = 0;
      // eslint-disable-next-line no-unused-vars
      let leftUnderKneeX = 0;
      // eslint-disable-next-line no-unused-vars
      let leftUnderKneeY = 0;
      // eslint-disable-next-line no-unused-vars
      let rightShoulderX = 0;
      // eslint-disable-next-line no-unused-vars
      let rightShoulderY = 0;

      // timer
      let timer = 5;
      // eslint-disable-next-line no-unused-vars
      let sec = 0;
      // eslint-disable-next-line no-unused-vars
      let counter = 0;
      // eslint-disable-next-line no-unused-vars
      let d_prev = 0;
      // eslint-disable-next-line no-unused-vars
      let pCount = 0;
      // eslint-disable-next-line no-unused-vars
      let count = 0;
      // eslint-disable-next-line no-unused-vars
      let state;
      // eslint-disable-next-line no-unused-vars
      let sumAve = 0;
      // eslint-disable-next-line no-unused-vars
      let moveArr = [];
      // eslint-disable-next-line no-unused-vars
      let doneLearn;
      // preload sound
      // eslint-disable-next-line no-unused-vars
      let c;
      // NOTE: Set up is here
      // eslint-disable-next-line no-unused-vars
      p5.setup = (setup) => {
        const myCanvas = p5.createCanvas(710, 710);
        // eslint-disable-next-line no-undef
        video = p5.createCapture(p5.VIDEO);
        video.size(p5.width, p5.height);
        myCanvas.parent("canvasDiv");
        // p5.frameRate(1);
        myCanvas.addClass(
          "flex-1 rounded-md font-extrabold text-white flex justify-center items-center text-2xl m-10"
        );

        video.hide();
        poseNet = ml5.poseNet(video, modelLoaded);
        poseNet.on("pose", gotPoses);
        // eslint-disable-next-line no-unused-vars

        // setInterval(checkPose, 1000);

        // p5.ellipse(p5.width / 2, p5.height / 2, 500, 500);
      };
      function checkMovement(m) {
        // console.log(elem);
        self.test = postArrayDisplay[m];
        // self.postImage = postImage[m];
        self.postImage = postImage[m];
      }
      // eslint-disable-next-line no-unused-vars
      function checkPose() {
        // self.test = poseArray[0];
        checkMovement(poseCounter);
        if (poseLabel.toLocaleLowerCase()) {
          workoutMovement++;
          timer--;
          self.time = timer;
          // console.log('outer : ', workoutMovement);
          console.log(workoutMovement);

          if (workoutMovement >= 30) {
            console.log("posecounter", poseCounter);

            // setTimeout(() => {
            poseCounter++;
            timer = 30;
            self.time = timer;
            workoutMovement = 0;
            checkMovement(poseCounter);
            // console.log(self.test);
            // }, 1000);
            console.log("workoutMovement", workoutMovement);
          }
        } else if (poseCounter >= poseArray.length) {
          poseCounter = 0;
          timer = 30;
          self.time = timer;
          checkMovement(poseCounter);
        }
      }

      function classifyPose() {
        if (pose) {
          let inputs = [];
          for (let i = 0; i < pose.keypoints.length; i++) {
            let x = pose.keypoints[i].position.x;
            let y = pose.keypoints[i].position.y;
            inputs.push(x);
            inputs.push(y);
          }
          brain.classify(inputs, gotResult);
        } else {
          setTimeout(classifyPose, 100);
        }
      }
      function gotResult(error, results) {
        if (results[0].confidence > 0.75) {
          poseLabel = results[0].label.toUpperCase();
        }
        //console.log(results[0].confidence);
        classifyPose();
      }
      // new version of logic workout
      function calPose() {
        // let v0 = createVector(rightShoulderX, rightShoulderY);

        // let v1 = createVector(rightHipX, rightHipY);
        // let angleBetween = v0.angleBetween(v1);
        // console.log(d);
        checkMovement(pCount);
        if (poseArray[pCount] == "sqaut") {
          let d = parseInt(
            p5.dist(rightHipX, rightHipY, rightKneeX, rightKneeY)
          );
          // console.log("in here");
          if (d < 95) {
            p5.stroke(0, 255, 0);
            p5.textSize(50);
            c = p5.color(51, 255, 94);
          } else {
            p5.stroke(255, 0, 0);
            c = p5.color(255, 51, 51);
          }

          p5.fill(c);
          p5.ellipse(100, 100, 100);
          // ellipse(rightShoulderX, rightShoulderY, 30);
          // text(angleBetween, rightShoulderX, rightShoulderY);
          // p5.textSize(50);
          // p5.text(d, rightHipX, rightHipY);
          // if a squat is detected (when someone sits down, and up), increase the counter by 1
          if (d < 95 && d_prev >= 100) {
            count++;
            timer--;
            self.time = timer;
            moveArr.push(d);
            console.log(count);
            // console.log("d_prev" + d_prev);

            // mySound.play();
          }

          // if the counter reaches at 5, display "You did it" otherwise "keep going!"
          p5.textSize(50);
          p5.fill(255);
          if (count >= 5) {
            // text("You did it!", 100, 100);
            count = 0;
            pCount++;
            timer = 5;
            self.time = timer;

            // ave();

            console.log("suc");
          } else {
            // text("Keep going!", 100, 100)
          }
          d_prev = d;

          // console.log(counter);
          // console.log(d);
        } else if (poseArray[pCount] == "jack") {
          let d = parseInt(
            p5.dist(
              rightUnderKneeX,
              rightUnderKneeY,
              leftUnderKneeX,
              leftUnderKneeY
            )
          );
          if (d >= 100) {
            p5.stroke(0, 255, 0);
            c = p5.color(51, 255, 94);
          } else {
            p5.stroke(255, 0, 0);
            c = p5.color(255, 51, 51);
          }

          p5.fill(c);
          p5.ellipse(100, 100, 100);

          // p5.textSize(50);
          // p5.text(d, rightHipX, rightHipY);
          // if a squat is detected (when someone sits down, and up), increase the counter by 1
          if (d >= 100 && p5.frameCount % 60 == 0) {
            timer--;
            self.time = timer;
            count++;
            console.log(count);
            // console.log("d_prev" + d_prev);

            // mySound.play();
          }
          // if the counter reaches at 5, display "You did it" otherwise "keep going!"
          p5.textSize(50);
          p5.fill(255);
          if (count >= 5) {
            count = 0;
            // text("You did it!", 100, 100);
            pCount++;
            timer = 5;
            self.time = timer;
            console.log("suc");
          } else {
            // text("Keep going!", 100, 100)
          }
          d_prev = d;
          // console.log(counter);
          // console.log(d);
        } else if (poseArray[pCount] == "single_leg_stand_r") {
          let d = parseInt(
            p5.dist(
              rightUnderKneeX,
              rightUnderKneeY,
              leftUnderKneeX,
              leftUnderKneeY
            )
          );
          if (d < 20) {
            p5.stroke(0, 255, 0);
            c = p5.color(51, 255, 94);
          } else {
            p5.stroke(255, 0, 0);
            c = p5.color(255, 51, 51);
          }

          p5.fill(c);
          p5.ellipse(100, 100, 100);

          // p5.textSize(50);
          // p5.text(d, rightHipX, rightHipY);
          // if a squat is detected (when someone sits down, and up), increase the counter by 1
          // eslint-disable-next-line no-undef
          if (d < 20 && p5.frameCount % 60 == 0) {
            sec++;
            p5.text("leg down", 100, 100);
            console.log(sec);
            if (sec >= 5) {
              count++;
              console.log("in counter : " + count);
              timer--;
              self.time = timer;
              sec = 0;
              p5.text("leg down", 100, 100);
            }

            // console.log("d_prev" + d_prev);

            // mySound.play();
          }
          // if the counter reaches at 5, display "You did it" otherwise "keep going!"
          p5.textSize(50);
          p5.fill(255);
          if (count >= 5) {
            // text("You did it!", 100, 100);
            count = 0;
            pCount++;
            timer = 5;
            self.time = timer;
            console.log("suc");
          } else {
            // text("Keep going!", 100, 100)
          }
          d_prev = d;
          // console.log(counter);
          // console.log(d);
        } else if (poseArray[pCount] == "single_leg_stand_l") {
          let d = parseInt(
            p5.dist(
              rightUnderKneeX,
              rightUnderKneeY,
              leftUnderKneeX,
              leftUnderKneeY
            )
          );
          if (d < 20) {
            p5.stroke(0, 255, 0);
            c = p5.color(51, 255, 94);
          } else {
            p5.stroke(255, 0, 0);
            c = p5.color(255, 51, 51);
          }

          p5.fill(c);
          p5.ellipse(100, 100, 100);

          // p5.textSize(50);
          // p5.text(d, rightHipX, rightHipY);
          // if a squat is detected (when someone sits down, and up), increase the counter by 1
          // eslint-disable-next-line no-undef
          if (d < 20 && p5.frameCount % 60 == 0) {
            sec++;
            p5.text("leg down", 100, 100);
            console.log(sec);
            if (sec >= 5) {
              count++;
              console.log("in counter : " + count);
              timer--;
              self.time = timer;
              sec = 0;
              p5.text("leg down", 100, 100);
            }

            // console.log("d_prev" + d_prev);

            // mySound.play();
          }
          // if the counter reaches at 5, display "You did it" otherwise "keep going!"
          p5.textSize(50);
          p5.fill(255);
          if (count >= 5) {
            // text("You did it!", 100, 100);
            count = 0;
            pCount++;
            timer = 5;
            self.time = timer;
            console.log("suc");
          } else {
            // text("Keep going!", 100, 100)
          }
          d_prev = d;
          // console.log(counter);
          // console.log(d);
        } else if (poseArray[pCount] == "high_knees") {
          let d = parseInt(
            p5.dist(rightHipX, rightHipY, rightKneeX, rightKneeY)
          );
          if (d < 80) {
            p5.stroke(0, 255, 0);
            c = p5.color(51, 255, 94);
          } else {
            p5.stroke(255, 0, 0);
            c = p5.color(255, 51, 51);
          }

          p5.fill(c);
          p5.ellipse(100, 100, 100);

          // p5.textSize(50);
          // p5.text(d, rightHipX, rightHipY);
          // if a squat is detected (when someone sits down, and up), increase the counter by 1
          if (d < 80 && d_prev >= 100) {
            count++;
            timer--;
            self.time = timer;
            console.log(count);
            // console.log("d_prev" + d_prev);

            // mySound.play();
          }
          // if the counter reaches at 5, display "You did it" otherwise "keep going!"
          p5.textSize(50);
          p5.fill(255);
          if (count >= 5) {
            // text("You did it!", 100, 100);
            count = 0;
            pCount++;
            timer = 5;
            self.time = timer;
            console.log("suc");
          } else {
            // text("Keep going!", 100, 100)
          }
          d_prev = d;
          // console.log(counter);
          // console.log(d);
        } else if (poseArray[pCount] == "jumping_lunge_r") {
          let d = parseInt(p5.dist(rightUnderKneeX, rightUnderKneeY, leftKneeX, leftKneeY));

          if (d < 95) {
            p5.stroke(0, 255, 0);
            c = p5.color(51, 255, 94);
          } else {
            p5.stroke(255, 0, 0);
            c = p5.color(255, 51, 51);
          }

          p5.fill(c);
          p5.ellipse(100, 100, 100);

          // p5.textSize(50);
          // p5.text(d, rightHipX, rightHipY);
          // if a squat is detected (when someone sits down, and up), increase the counter by 1
          if (d < 95 && p5.frameCount % 60 == 0) {
            count++;

            timer--;
            self.time = timer;
            console.log(count);

            // console.log("d_prev" + d_prev);

            // mySound.play();
          }
          // if the counter reaches at 5, display "You did it" otherwise "keep going!"
          p5.textSize(50);
          p5.fill(255);
          if (count >= 5) {
            // text("You did it!", 100, 100);
            count = 0;
            pCount++;
            timer = 5;
            self.time = timer;
            console.log("suc");
          } else {
            // text("Keep going!", 100, 100)
          }
          d_prev = d;
          // console.log(counter);
          // console.log(d);
        } else if (poseArray[pCount] == "jumping_lunge_l") {
          // let d = parseInt(dist(leftHipX, leftHipY, leftKneeX, leftKneeY));
          let d = parseInt(
            p5.dist(leftUnderKneeX, leftUnderKneeY, rightKneeX, rightKneeY)
          );

          if (d < 95) {
            p5.stroke(0, 255, 0);
            c = p5.color(51, 255, 94);
          } else {
            p5.stroke(255, 0, 0);
            c = p5.color(255, 51, 51);
          }

          p5.fill(c);
          p5.ellipse(100, 100, 100);

          p5.textSize(50);
          p5.text(d, rightHipX, rightHipY);
          // if a squat is detected (when someone sits down, and up), increase the counter by 1
          if (d < 95 && p5.frameCount % 60 == 0) {
            count++;
            timer--;
            self.time = timer;
            console.log(count);

            // console.log("d_prev" + d_prev);

            // mySound.play();
          }
          // if the counter reaches at 5, display "You did it" otherwise "keep going!"
          p5.textSize(50);
          p5.fill(255);
          if (count >= 5) {
            // text("You did it!", 100, 100);
            count = 0;
            pCount++;
            timer = 5;
            self.time = timer;
            console.log("suc");
          } else {
            // text("Keep going!", 100, 100)
          }
          d_prev = d;
          // console.log(counter);
          // console.log(d);
        } else if (poseArray[pCount] == "lateral_shuffles") {
          // let d = parseInt(
          //   p5.dist(rightKneeX, rightKneeY, leftKneeX, leftKneeY)
          // );
          let d = parseInt(
            p5.dist(rightHipX, rightHipY, rightKneeX, rightKneeY)
          );
          let dl = parseInt(
            p5.dist(rightKneeX, rightKneeY, leftKneeX, leftKneeY)
          );

          if (d < 80) {
            p5.stroke(0, 255, 0);
            c = p5.color(51, 255, 94);
          } else {
            p5.stroke(255, 0, 0);
            c = p5.color(255, 51, 51);
          }

          p5.fill(c);
          p5.ellipse(100, 100, 100);

          // p5.textSize(50);
          // p5.text(d, rightHipX, rightHipY);
          // if a squat is detected (when someone sits down, and up), increase the counter by 1
          if (d < 150 && dl < 100 && p5.frameCount % 60 == 0) {
            count++;
            timer--;
            self.time = timer;
            console.log(count);
            // console.log("d_prev" + d_prev);

            // mySound.play();
          }
          // p5.text(dl, rightUnderKneeX, rightUnderKneeY);
          // // if the counter reaches at 5, display "You did it" otherwise "keep going!"
          // p5.textSize(50);
          p5.fill(255);
          if (count >= 5) {
            // text("You did it!", 100, 100);
            count = 0;
            pCount++;
            timer = 5;
            self.time = timer;
            console.log("suc");
          } else {
            // text("Keep going!", 100, 100)
          }
          d_prev = d;
          // console.log(counter);
          // console.log(d);
        } else if (pCount >= poseArray.length) {
          pCount = 0;
          doneLearn = "";
          self.learningProc = doneLearn;
          // p5.noLoop();
          // console.log(self.doneLearn);
        }
        // else {
        //   console.log('else');
        //   p5.noLoop();
        // }
        // else if(poseArray)
      }
      function gotPoses(poses) {
        if (poses.length > 0) {
          pose = poses[0].pose;

          // right pose
          rightShoulderX = poses[0].pose.keypoints[8].position.x;
          rightShoulderY = poses[0].pose.keypoints[8].position.y;
          rightHipX = poses[0].pose.keypoints[12].position.x;
          rightHipY = poses[0].pose.keypoints[12].position.y;
          rightKneeX = poses[0].pose.keypoints[14].position.x;
          rightKneeY = poses[0].pose.keypoints[14].position.y;
          // left pose
          leftHipX = poses[0].pose.keypoints[11].position.x;
          leftHipY = poses[0].pose.keypoints[11].position.y;
          leftKneeX = poses[0].pose.keypoints[13].position.x;
          leftKneeY = poses[0].pose.keypoints[13].position.y;
          rightUnderKneeX = poses[0].pose.keypoints[16].position.x;
          rightUnderKneeY = poses[0].pose.keypoints[16].position.y;
          leftUnderKneeX = poses[0].pose.keypoints[15].position.x;
          leftUnderKneeY = poses[0].pose.keypoints[15].position.y;

          skeleton = poses[0].skeleton;
        }
      }
      function modelLoaded() {
        console.log("poseNet ready");
      }
      // eslint-disable-next-line no-unused-vars

      // NOTE: Draw is here
      // eslint-disable-next-line no-unused-vars
      p5.draw = (draw) => {
        p5.push();
        p5.translate(video.width, 0);
        p5.scale(-1, 1);
        p5.image(video, 0, 0, video.width, video.height);

        if (pose) {
          for (let i = 0; i < skeleton.length; i++) {
            let a = skeleton[i][0];
            let b = skeleton[i][1];
            p5.strokeWeight(10);
            p5.stroke(85, 224, 16);
            p5.line(a.position.x, a.position.y, b.position.x, b.position.y);
          }
          // for (let i = 0; i < pose.keypoints.length; i++) {
          //   let x = pose.keypoints[i].position.x;
          //   let y = pose.keypoints[i].position.y;
          //   p5.fill(0);
          //   p5.stroke(255);
          //   p5.ellipse(x, y, 16, 16);
          // }
        }
        p5.pop();

        p5.fill(255);
        p5.noStroke();
        p5.textSize(50);
        // eslint-disable-next-line no-unused-vars
        // eslint-disable-next-line no-undef
        p5.textAlign(p5.CENTER, p5.CENTER);
        // eslint-disable-next-line no-unused-vars
        // eslint-disable-next-line no-undef
        p5.text(poseLabel, p5.width / 2, p5.height / 2);
        // new code
        calPose();

        // ===================================

        // console.log(poseLabel);
        // if (workoutMovement >= 5) {
        //   p5.text("You did it!", 200, 100);
        // } else {
        //   p5.text("Keep going!", 200, 100);
        // }
      };
    };
    // NOTE: Use p5 as an instance mode
    // eslint-disable-next-line no-undef
    const P5 = require("p5");
    // console.log(P5);
    new P5(script);
  },
};
</script>
