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

// create the platforms and platform logic.
class Platform {
  // create a constructor that takes in the x and y coordinates.
  constructor(x,y) {
    // use the shorthand property syntax .
    this.position = {
      x,y,
    };
    this.width = 200;
    this.height = proportionalSize(40) // make sure the height is proportional to the screen size.
  }
  draw() {
    ctx.fillStyle = "#acd157";
    ctx.fillRect(this.position.x, this.position.y, this.width , this.height );
  }
}

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

//  add the logic for the checkpoints. When a player collides with a checkpoint, the checkpoint screen should appear.
class CheckPoint {
  constructor(x, y, z) {
    this.position = {
      x,
      y,
    };
    this.width = proportionalSize(40);
    this.height = proportionalSize(70);
    this.claimed = false;
  };
  draw(){
    ctx.fillStyle = "#f1be32";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
  claim() {
    this.width = 0;
    this.height = 0;
    this.position.y = Infinity; //  is a special numeric value representing infinity. Assigning Infinity to this.position.y ensures that the y position of the checkpoint is outside the typical range of canvas coordinates.
    this.claimed = true;
  }
};



// create a new instance of the Player object
const player = new Player(); 

// create a list of positions for the platforms.
const platformPositions = [
  // add the list of positions for the platforms.
  { x: 500, y: proportionalSize(450) },
  { x: 700, y: proportionalSize(400) },
  { x: 850,  y: proportionalSize(350) },
  { x: 900,  y: proportionalSize(350) },
  { x: 1050,  y: proportionalSize(150) },
  { x: 2500,  y: proportionalSize(450) },
  { x: 2900,  y: proportionalSize(400) },
  { x: 3150,  y: proportionalSize(350) },
  { x: 3900,  y: proportionalSize(450) },
  { x: 4200,  y: proportionalSize(400) },
  { x: 4400,  y: proportionalSize(200) },
  { x: 4700,  y: proportionalSize(150) },
];

//  create a list of new platform instances using the Platform class. 
const platforms = platformPositions.map(
  //  pass in platform for the parameter and implicitly return the creation of a new Platform instance with the platform.x and platform.y values passed in as arguments.
  platform => new Platform(platform.x, platform.y)
);

//
const checkpointPositions = [
  {x: 1170, y: proportionalSize(80), z: 1},
  {x: 2900, y: proportionalSize(330), z: 2 },
  {x: 4800, y: proportionalSize(80), z: 3}
]

// create a list of new checkpoint instances using the CheckPoint class.
const checkpoints =  checkpointPositions.map((checkpoint)=> new CheckPoint(checkpoint.x, checkpoint.y, checkpoint.z ));

// updating the player's position and continually drawing it on the canvas.
const animate = () => {
  // The requestAnimationFrame() web API, takes in a callback and update the animation on the screen. 
  requestAnimationFrame(animate);
  // As the player moves through the game clear the canvas before rendering the next frame of the animation.
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // draw each of the platforms onto the canvas.
  platforms.forEach((platform)=>{
    platform.draw();
  })
  // draw each of the checkpoints onto the canvas.
  checkpoints.forEach((checkpoint)=>{
    checkpoint.draw() ;
  })
  // update the player's position as it moves throughout the game.
  player.update();
  // increasing or decreasing a player's velocity based on if they move to the left or right of the screen.
  if (keys.rightKey.pressed && player.position.x < proportionalSize(400)) {
    player.velocity.x = 5;
  } else if (keys.leftKey.pressed && player.position.x > proportionalSize(100)){
    player.velocity.x = -5;
  } else {
    player.velocity.x = 0;
  }

  // as the player moves to the right, makes the platform move with it.
  if (keys.rightKey.pressed && isCheckpointCollisionDetectionActive) {
    platforms.forEach((platform) => {
      platform.position.x -= 5;
    });
    checkpoints.forEach((checkpoint) => {
      checkpoint.position.x -= 5;
    });
  } else if (keys.leftKey.pressed && isCheckpointCollisionDetectionActive) {
    platforms.forEach((platform) => {
      platform.position.x += 5;
    });

    checkpoints.forEach((checkpoint) => {
      checkpoint.position.x += 5;
    });
  }

  // add collision detection logic to the game.
  platforms.forEach((platform) => {
    const collisionDetectionRules = [
      player.position.y + player.height <= platform.position.y,
      player.position.y + player.height + player.velocity.y >= platform.position.y,
      player.position.x >= platform.position.x - player.width / 2,
      player.position.x <= platform.position.x + platform.width - player.width / 3
    ];

    // checks if every rule in the collisionDetectionRules array is truthy.
    if(collisionDetectionRules.every((rule) => rule)){
      player.velocity.y = 0;
      return;
    }

    //
    const platformDetectionRules = [
      player.position.x >= platform.position.x - player.width / 2,
      player.position.x <= platform.position.x + platform.width - player.width / 3,
      player.position.y + player.height >= platform.position.y,
      player.position.y <= platform.position.y + platform.height,
    ];

    if (platformDetectionRules.every(rule => rule)) {
      player.position.y = platform.position.y + player.height;
      player.velocity.y = gravity;
    };

  });

}

// manage the player's movement in the game:  monitor when the left and right arrow keys are pressed.
const keys = {
  rightKey: {
    pressed: false
  },
  leftKey: {
    pressed: false
  }
};

// functionality for moving the player across the screen.
const movePlayer = (key, xVelocity, isPressed) => {
  if (!isCheckpointCollisionDetectionActive) {
    player.velocity.x = 0;
     player.velocity.y = 0
     return; 
  }
  
  switch (key) {
    case "ArrowLeft":
      keys.leftKey.pressed = isPressed;
      if (xVelocity === 0) {
        player.velocity.x = xVelocity;
      }
      player.velocity.x -= xVelocity;
      break;
    case "ArrowUp":
    case " ":
    case "Spacebar":
      player.velocity.y -= 8;
      break;
    case "ArrowRight":
      keys.rightKey.pressed =  isPressed;
      if (xVelocity === 0) {
        player.velocity.x = xVelocity;
      }
      player.velocity.x += xVelocity;
      break;
    
  }

  
}

const startGame = () => {
  // display the canvas element and hide the startScreen container.
  canvas.style.display ="block";
  startScreen.style.display = "none";
  // draw the player  on the canvas.
  // player.draw();
  animate();
}

const showCheckpointScreen = (msg) => {
  checkpointScreen.style.display = "block";
  checkpointMessage.textContent = msg;
  if(isCheckpointCollisionDetectionActive){
    setTimeout(()=>{
      checkpointScreen.style.display = "none";
    }, 2000)
  }
};

startBtn.addEventListener("click", startGame);

// event listeners for calling the movePlayer function.
// addEventListener to the global window object, for the arguments, pass in the keydown event and an arrow function that uses the destructuring assignment to get the key property from the event object in the event listener parameter.
window.addEventListener("keydown", ({ key }) => {
  movePlayer(key, 8, true);
});

window.addEventListener("keyup", ({ key }) => {
  movePlayer(key, 0, false);
});


