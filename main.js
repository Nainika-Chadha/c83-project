var width=screen.width;
var height=screen.height;
var mouseEvent="empty";

new_width=width-70;
new_height=height-320;
if (new_width<992){
document.getElementById("myCanvas").width=new_width;
document.getElementById("myCanvas").height=new_height;
}

var lpx,lpy;

canvas= document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="darkblue";
width=3;

canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e){
 lpx=e.touches[0].clientX-canvas.offsetLeft;
 lpy=e.touches[0].clientY-canvas.offsetTop;
 color = document.getElementById("cl").value; 
 width = document.getElementById("wd").value;
}



canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e){
cpx=e.touches[0].clientX-canvas.offsetLeft;
cpy=e.touches[0].clientY-canvas.offsetTop;
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width;

ctx.moveTo(lpx,lpy);
ctx.lineTo(cpx,cpy);
ctx.stroke();

lpx=cpx;
lpy=cpy;
}

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
mouseEvent="mouseDown";
}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
mouseEvent="mouseUp";
}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
mouseEvent="mouseleave";
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
cpx=e.clientX-canvas.offsetLeft;
cpy=e.clientY-canvas.offsetTop;
if(mouseEvent=="mouseDown"){
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width;


ctx.moveTo(lpx,lpy);
ctx.lineTo(cpx,cpy);
ctx.stroke();
}
lpx=cpx;
lpy=cpy;
}

function clear_canvas() { ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); }