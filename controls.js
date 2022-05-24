class Controls{
  constructor(){
    this.forward=false;
    this.left=false;
    this.right=false;
    this.reverse=false;
  
    this.#addKeyboardListeners();
  }
// # in front of method makes it a private method so you can't access it outside of the Controls class
  #addKeyboardListeners(){
    // using arrow function below keeps this referring to this in constructor and not this of the function(event)
    document.onkeydown=(event)=>{
      switch(event.key){
        case "ArrowLeft":
          this.left=true;
        case "ArrowRight":
          this.right=true;
        case "ArrowUp":
          this.forward=true;
        case "ArrowDown":
          this.reverse=true;
          break;
      }
      console.table(this);
    }
    document.onkeyup=(event)=>{
      switch(event.key){
        case "ArrowLeft":
          this.left=false;
        case "ArrowRight":
          this.right=false;
        case "ArrowUp":
          this.forward=false;
        case "ArrowDown":
          this.reverse=false;
          break;
  }
  console.table(this);
}
}
}