/* eslint-disable no-undef */
/* eslint-disable no-undef */
<template>
  <div class="grid grid-cols-3 gap-4 overflow-hidden relative">
    <div class="col-span-1 bg-green-500 h-screen relattive fixed w-80">
      <div
        class="flex h-screen justify-center items-center text-white font-extrabold text-4xl"
      >Learn</div>
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
      <!-- <div
        class="bg-gray-500 flex-1 rounded-md font-extrabold text-white flex justify-center items-center m-10 p-10 text-2xl"
      >Song</div>-->
      <div
        class="flex-1 rounded-md font-extrabold text-white flex justify-center items-center ml-10 mt-10 text-2xl"
        id="moveM"
      >
        <div class="bg-gray-500 p-10 mr-10 text-2xl rounded-md">Your movement is {{test}}</div>
        <div class="bg-gray-500 p-10 text-2xl rounded-md">Movement count : {{test}} : {{time}}</div>
      </div>

      <div class="flex justify-between items-center">
        <div class id="canvasDiv"></div>
        <div class="rounded-md font-extrabold text-white flex-wrap justify-center items-center">
          <div class="bg-gray-500 m-10 p-10 text-2xl">Your stand position : {{position}}</div>
          <div class="bg-gray-500 m-10 p-10 text-2xl">Your angle : {{position}}</div>
          <div class="bg-gray-500 m-10 p-10 text-2xl">Your feedback angle : {{position}}</div>
        </div>
      </div>
    </div>

    <div
      class="absolute inset-x-0 bottom-0 flex justify-center items-center text-green-600"
    >@Copyright ~ 2021. By rax</div>
  </div>
</template>
<script>
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
      test: "start",
      time: 5,
      position: "Front"
    };
  },
  created() {
    // eslint-disable-next-line no-unused-vars
    // let reload = false;
    // setTimeout(() => {
    //   reload = true;
    //   window.location.reload(reload);
    // }, 5000);
    // window.location.reload(false);
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
      let poseArray = ["start", "sqaut", "jack"];
      // eslint-disable-next-line no-unused-vars
      let workoutMovement = 0;
      // eslint-disable-next-line no-unused-vars
      let poseCounter = 0;
      // eslint-disable-next-line no-unused-vars
      let timer = 5;
      // eslint-disable-next-line no-unused-vars
      let gymsound;
      // eslint-disable-next-line no-unused-vars
      let fft;
      let rightHipX = 0;
      let rightHipY = 0;
      let rightKneeX = 0;
      let rightKneeY = 0;
      let d_prev = 0;

      // preload sound
      // eslint-disable-next-line no-unused-vars
      p5.preload = preload => {
        // fft = p5.FFT();
        // eslint-disable-next-line no-unused-vars
        gymsound = p5.loadSound("../sound/gym_sound.mp3");
      };

      // NOTE: Set up is here

      // eslint-disable-next-line no-unused-vars
      p5.setup = setup => {
        const myCanvas = p5.createCanvas(710, 710);
        // eslint-disable-next-line no-undef
        video = p5.createCapture(p5.VIDEO);
        video.size(p5.width, p5.height);
        myCanvas.parent("canvasDiv");

        myCanvas.addClass(
          "flex-1 rounded-md font-extrabold text-white flex justify-center items-center text-2xl m-10 p-10"
        );
        // adding gym sound
        gymsound.play();
        // gymsound.setVolume(0.1);

        video.hide();
        poseNet = ml5.poseNet(video, modelLoaded);
        poseNet.on("pose", gotPoses);
        // eslint-disable-next-line no-unused-vars
        let options = {
          inputs: 34,
          outputs: 4,
          task: "classification",
          debug: true
        };
        brain = ml5.neuralNetwork(options);
        const modelInfo = {
          model: "../model/v10/model.json",
          metadata: "../model/v10/model_meta.json",
          weights: "../model/v10/model.weights.bin"
        };
        brain.load(modelInfo, brainLoaded);

        // setInterval(checkPose, 1000);

        // p5.ellipse(p5.width / 2, p5.height / 2, 500, 500);
      };
      // function checkMovement(m) {
      //   // console.log(elem);
      //   self.test = poseArray[m];
      // }
      // function checkPose() {
      //   // self.test = poseArray[0];
      //   checkMovement(poseCounter);
      //   if (poseLabel.toLocaleLowerCase() == poseArray[poseCounter]) {
      //     let d = p5.dist(rightHipX, rightHipY, rightKneeX, rightKneeY);
      //     console.log(d);
      //     p5.ellipse(rightHipX, rightHipY, d);
      //     if (d < 100 && d_prev >= 100) {
      //       workoutMovement++;

      //       // mySound.play();
      //     }
      //     // workoutMovement++;
      //     // console.log('outer : ', workoutMovement);
      //     console.log(workoutMovement);
      //     timer--;
      //     self.time = timer;

      //     if (workoutMovement >= 5) {
      //       console.log("posecounter", poseCounter);

      //       // setTimeout(() => {
      //       poseCounter++;
      //       timer = 5;
      //       self.time = timer;
      //       workoutMovement = 0;
      //       checkMovement(poseCounter);
      //       // console.log(self.test);
      //       // }, 1000);
      //       console.log("workoutMovement", workoutMovement);
      //     }
      //   } else if (poseCounter >= poseArray.length) {
      //     poseCounter = 0;
      //     timer = 5;
      //     self.time = timer;
      //     checkMovement(poseCounter);
      //   }
      // }
      function brainLoaded() {
        console.log("pose classification ready!");
        classifyPose();
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
          setTimeout(classifyPose, 5000);
        }
      }
      function gotResult(error, results) {
        if (results[0].confidence > 0.75) {
          poseLabel = results[0].label.toUpperCase();
        }
        //console.log(results[0].confidence);
        classifyPose();
      }

      function gotPoses(poses) {
        if (poses.length > 0) {
          pose = poses[0].pose;
          rightHipX = pose.keypoints[12].position.x;
          rightHipY = pose.keypoints[12].position.y;
          rightKneeX = pose.keypoints[14].position.x;
          rightKneeY = pose.keypoints[14].position.y;
          skeleton = poses[0].skeleton;
        }
      }
      function modelLoaded() {
        console.log("poseNet ready");
      }

      // this the function that use to calculate the pose and ++
      // eslint-disable-next-line no-unused-vars
      function calPose() {
        let d = p5.dist(rightHipX, rightHipY, rightKneeX, rightKneeY);
        console.log(d);
        p5.ellipse(rightHipX, rightHipY, d);
        if (d < 100 && d_prev >= 100) {
          workoutMovement++;
          console.log("workoutMovement", workoutMovement);
          // mySound.play();
        }
        d = d_prev;
      }
      // NOTE: Draw is here
      // eslint-disable-next-line no-unused-vars
      p5.draw = draw => {
        p5.push();
        // p5.translate(video.width, 0);
        // p5.scale(-1, 1);
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

        // test code

        
        calPose();
        // console.log(poseLabel);
        if (workoutMovement >= 5) {
          p5.text("You did it!", 200, 100);
        } else {
          p5.text("Keep going!", 200, 100);
        }
        
      };
    };
    // NOTE: Use p5 as an instance mode
    // eslint-disable-next-line no-undef
    const P5 = require("p5");
    // console.log(P5);
    new P5(script);
  }
};
</script>
