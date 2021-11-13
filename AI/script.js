let video = document.getElementById("video");
let model;
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

const setupCamera = () => {
    navigator.mediaDevices.getUserMedia({
        video: {width: 600, height: 400},
        audio: false,
    })
    .then((stream) => {
        video.srcObject = stream;
    });
};