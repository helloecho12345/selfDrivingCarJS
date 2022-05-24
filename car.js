class Car{
  constructor(x,y,width,height){
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;

    this.controls=new Controls();
}

update(){
  if(this.controls.forward){
    this.y-=2;
  }
  if(this.controls.reverse){
    this.y+=2;
  }
}
// draw is a method that gets context as a parameter
draw(ctx){
  ctx.beginPath();
  ctx.rect(
    // the x of the car is going to be the center of the car
    this.x-this.width/2,
    this.y-this.height/2,
    this.width,
    this.height
  );
  ctx.fill();
}