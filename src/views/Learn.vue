<template>
  <div class="grid grid-cols-3 gap-4">
    <div class="col-span-1 bg-green-500 h-screen">
      <div
        class="flex h-screen justify-center items-center text-white font-extrabold text-4xl"
      >Learn</div>
    </div>

    <div class="col-span-2">
      <div
        class="bg-gray-500 flex-1 rounded-md font-extrabold text-white flex justify-center items-center m-10 p-10 text-2xl"
      >Song</div>

      <div class="flex justify-between">
        <div
          class="bg-gray-500 flex-1 rounded-md font-extrabold text-white flex justify-center items-center text-2xl"
          id="canvasDiv"
        ></div>
        <div
          class="bg-gray-500 flex-1 rounded-md font-extrabold text-white flex justify-center items-center m-10 p-10 text-2xl"
        >Train model {{finishMove}}</div>
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
<script>
// eslint-disable-next-line no-unused-vars
import p5 from "p5";
// eslint-disable-next-line no-unused-vars
import ml5 from "ml5";
export default {
  data() {
    return {
      // video: "",
    };
  },
  mounted() {
    // console.log(model);

    const script = function(p5) {
      // var speed = 2;
      // var posX = 0;

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
      let poseArray = ["sqaut", "jack"];
      // eslint-disable-next-line no-unused-vars
      let workoutMovement = 0;
      // eslint-disable-next-line no-unused-vars
      let poseCounter = 0;

      // NOTE: Set up is here
      // eslint-disable-next-line no-unused-vars
      p5.setup = setup => {
        const myCanvas = p5.createCanvas(640, 480);
        // eslint-disable-next-line no-undef
        video = p5.createCapture(p5.VIDEO);
        myCanvas.parent("canvasDiv");

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
          model: "../model/model.json",
          metadata: "../model/model_meta.json",
          weights: "../model/model.weights.bin"
        };
        brain.load(modelInfo, brainLoaded);

        setInterval(checkPose, 1000);

        // p5.ellipse(p5.width / 2, p5.height / 2, 500, 500);
      };

      function checkPose() {
        if (poseLabel.toLocaleLowerCase() == poseArray[poseCounter]) {
          workoutMovement++;
          // console.log('outer : ', workoutMovement);
          console.log(workoutMovement);
          if (workoutMovement >= 5) {
            console.log("posecounter", poseCounter);
  
            // setTimeout(() => {
              poseCounter++;

              workoutMovement = 0;
            // }, 1000);
            console.log("workoutMovement", workoutMovement);
          }
        } else if (poseCounter >= poseArray.length) {
          poseCounter = 0;
        }
      }
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

      function gotPoses(poses) {
        if (poses.length > 0) {
          pose = poses[0].pose;
          skeleton = poses[0].skeleton;
        }
      }
      function modelLoaded() {
        console.log("poseNet ready");
      }
      // eslint-disable-next-line no-unused-vars

      // NOTE: Draw is here
      // eslint-disable-next-line no-unused-vars
      p5.draw = draw => {
        p5.push();
        p5.translate(video.width, 0);
        p5.scale(-1, 1);
        p5.image(video, 0, 0, video.width, video.height);

        if (pose) {
          // for (let i = 0; i < skeleton.length; i++) {
          //   let a = skeleton[i][0];
          //   let b = skeleton[i][1];
          //   p5.strokeWeight(2);
          //   p5.stroke(0);

          //   p5.line(a.position.x, a.position.y, b.position.x, b.position.y);
          // }
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

        if (workoutMovement >= 5) {
          p5.text("You did it!", 200, 100);
        } else {
          p5.text("Keep going!", 200, 100);
        }
      };
    };
    // NOTE: Use p5 as an instance mode
    const P5 = require("p5");
    // console.log(P5);
    new P5(script);
  }
};
</script>
