const startBtn = document.getElementById('start-btn');
const canvas = document.getElementById('canvas');
const startScreen  = document.querySelector(".start-screen");
const checkpointScreen  = document.querySelector(".checkpoint-screen");

// child combinator > to target the paragraph element
const checkpointMessage = document.querySelector('.checkpoint-screen > p');

// Canvas API - getContext method which will provide the context for where the graphics will be rendered.
const ctx = canvas.getContext("2d");
// The innerWidth property is a number that represents the interior width of the browser window.
canvas.width = innerWidth;
// The innerHeight property is a number that represents the interior height of the browser window.
canvas.height = innerHeight;
// variable to apply gravity.
const gravity = 0.5;
// keep track of the status for the checkpoint collision detection.
let isCheckpointCollisionDetectionActive = true;


// function to make sure that the size of the elements in the game are responsive and adapt to different screen sizes.
const proportionalSize = (size) => {
    return innerHeight < 500 ? Math.ceil((size/500) * innerHeight) : size
};

// characteristics for the main player of the game.
class Player {
  constructor() {
    this.position = {
      x: proportionalSize(10),
      y: proportionalSize(400),
    };

    this.velocity = { //The velocity property will be used to store the player's speed in the x and y directions.
      x: 0,
      y: 0,
    };
    // set the width and height properties of your class to be proportional to the height of the screen with proportionalSize().
    this.width =  proportionalSize(40)
    this.height =  proportionalSize(40)
  }

  draw() {
    ctx.fillStyle = "#99c9ff" //  set the color for the player.
    // create the player's shape by calling the fillRect() method on the ctx object  instantiated earlier.
    ctx.fillRect(this.position.x , this.position.y , this.width , this.height);
  }

  // updating the player's position and velocity as it moves throughout the game.
  update() {
    this.draw() //  ensure that the player is continually drawn on the screen as the game updates.
    this.position.x += this.velocity.x; // When the player moves to the right, adjust its velocity.
    this.position.y += this.velocity.y; // When the player jumps, adjust its velocity.
    //  stop the player from falling past the height of the canvas.
    if( (this.position.y + this.velocity.y + this.height ) <= canvas.height ){
      if(this.position.y  < 0) {
        this.position.y = 0;
        this.velocity.y = gravity;
      }
      this.velocity.y += gravity;
    } else {
      this.velocity.y = 0;
    }
    
    // ensure that the player stays within the boundaries of the canvas screen and doesn't move too far off to the left.
    if (this.position.x < this.width) {
      this.position.x = this.width;
    }

    //  prevent the player to  accidentally goes off screen to the right.
    if (this.position.x >= canvas.width - 2 * this.width) {
      this.position.x = canvas.width - 2 * this.width;
    }
  }
}

// create a new instance of the Player object
const player = new Player(); 

const startGame = () => {
  // display the canvas element and hide the startScreen container.
  canvas.style.display ="block";
  startScreen.style.display = "none";
  // draw the player  on the canvas.
  player.draw();
  
}

startBtn.addEventListener("click", startGame);

    
