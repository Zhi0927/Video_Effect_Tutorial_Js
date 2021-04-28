let speed = 20;
let canvas;
let ctx;

(function preload(){
    canvas = document.getElementById("tv-screen");
    ctx = canvas.getContext("2d");

    //Draw the "tv screen"
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;

    update();
})();

function update() {

        //Draw the canvas background
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

}