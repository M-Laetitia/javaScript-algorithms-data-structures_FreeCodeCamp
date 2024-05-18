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
}

    
