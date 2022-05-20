const canvas=document.getElementById("myCanvas");
canvas.height=window.innerHeight;
canvas.width=200;

// draw the car on the canvas
// contains all the things we need
const ctx = canvas.getContext("2d");
// 100=x, 100=y, 30 pixel width, 50 pixel height
const car=new Car(100,100,30,50);
// car gets drawn using the context
car.draw(ctx);

