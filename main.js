var MouseEvent = "";

canvas = document.getElementById("Canvas");
ctx = canvas.getContext("2d");
color = "black";
width = 1;
background_color ="white";
document.getElementById("Canvas").style.backgroundColor = background_color;
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    //taking color from input box
    //additional activity start
    color = document.getElementById("i1").value;
    width = document.getElementById("t1").value;
    background_color = document.getElementById("i2").value;
    document.getElementById("Canvas").style.backgroundColor = background_color;
    MouseEvent = "mousedown";
    console.log(color);
    //addition activity ends

}
canvas.addEventListener("mousemove", mymousemove);

function mymousemove(e) {
    currentx = e.clientX - canvas.offsetLeft;
    currenty = e.clientY - canvas.offsetTop;
    if (MouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth =width;
        ctx.arc(currentx,currenty,30,0,2*Math.PI);
        ctx.stroke();
    }
}

//additional activity

function clearArea() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}