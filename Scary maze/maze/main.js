class Maze {
  constructor(onFailCallback,onGateCallback) { 
    this.gateway = document.querySelector('#gate');
    this.wallElement = document.querySelector('#wall');
    
    this.onFail = onFailCallback;
    this.onGateCallback = onGateCallback;

    this.checkTouch = this.checkTouch.bind(this);
    this.checkgate = this.checkgate.bind(this);

    // 'mouseover' detects every time the mouse moves onto a new element
    this.wallElement.addEventListener('mouseover', this.checkTouch);
    this.gateway.addEventListener('mouseover',this.checkgate)
  }

  checkTouch(event) {
    // If the thing the mouse just touched is the 'wall' (the gray part)
    if (event.target.id === 'wall') {
      this.onFail();
    }

  }
  checkgate(event) {
    // If the thing the mouse just touched is the 'gate' (the yellow part)
    if (event.target.id === 'gate') {
      this.onGateCallback();
    }
}
}
const levels = { 1: level1};
const levelLoaders = {  2: loadLevel2, 3: loadLevel3};
class Game {
  constructor() {
    this.statusText = document.querySelector('#status');
    this.levelText = document.querySelector('#level');
    this.startBtn = document.querySelector('#start-btn');
    this.moonreached = document.querySelector('#moon');
    this.mazeLevel = document.querySelector('#travel');
    this.wallElement = document.querySelector('#wall');
    this.currentLevel = 1; 

   this.startGame = this.startGame.bind(this);
  this.loseGame = this.loseGame.bind(this);
  this.nextlevel = this.nextlevel.bind(this);
  this.resetGame = this.resetGame.bind(this);
  this.startTimer = this.startTimer.bind(this);
  this.boo =this.boo.bind(this);

    this.startBtn.addEventListener('click', this.startGame);
    this.moonreached.addEventListener('mouseover', this.nextlevel);
  }

  startGame() {



  if (Math.random() < 0.5 ){
    const gif = document.createElement('img');
    gif.src = "visual content/speedy.gif";
    gif.style.cssText = `
 position: fixed;
  top: 70%;
  left: 10%;
  translate: -50% -50%;
  z-index: 999;
  width: 500px;
  height: 500px;
  object-fit: contain;
  pointer-events: none;
  user-select: none;
    `;
    document.body.appendChild(gif);

    // only the gif removal is delayed
    setTimeout(() => {
      gif.remove();
    }, 500);
  }
    //music 
    this.myAudio = new Audio('audio content/Justin_Hurwitz_-_Multi-Axis_Trainer_(mp3.pm).mp3');
   this.myAudio.play();

    this.startTimer(120);
    // show text associated with first level level1.js literally acts like a storage.
    this.levelText.textContent = levels[this.currentLevel].levelText;
    this.statusText.textContent = levels[this.currentLevel].statusText;
    this.statusText.style.color = "black";

    this.startBtn.style.visibility = "hidden";
    //show path for first level
    document.body.style.cursor = 'url("visual content/landercusor.png") 32 32, auto';
    this.mazeLevel.style.clipPath = levels[this.currentLevel].clipPath;
    this.mazeLevel.style.visibility = "visible";
    
    new Maze(this.loseGame,this.boo);
  }

  loseGame() {
    clearInterval(this.timerInterval);
    this.resetGame();
    this.statusText.textContent = "GAME OVER!";
    this.statusText.style.color = "red";
    document.body.style.cursor = 'auto';
    //stop music 
  }

  nextlevel() {
   
    this.currentLevel++;
    if(this.currentLevel == 3)
    {
        document.querySelector('#gate').style.pointerEvents = "all";
        
        document.querySelector('#gate').style.visibility = "visible";
    }
    levelLoaders[this.currentLevel]((level) => {
    this.statusText.textContent = level.statusText;
    this.levelText.textContent = level.levelText;
    this.mazeLevel.style.clipPath = level.clipPath;
    this.mazeLevel.style.transform = level.transform;
    this.moonreached.style.top = level.moonTop;
    this.moonreached.style.right = level.moonRight;
    this.moonreached.style.bottom = level.moonBottom;
    this.moonreached.style.left = level.moonLeft;
    
    if (level.extraBlocks) {
    level.extraBlocks.forEach((block) => {
      const newDiv = document.createElement('div');
      newDiv.id = block.id;
      newDiv.style.clipPath = block.clipPath;
      newDiv.style.backgroundColor = block.backgroundColor;
      newDiv.style.position = 'absolute';
      newDiv.style.top = '0';
      newDiv.style.left = '0';
      newDiv.style.width = '800px';
      newDiv.style.height = '600px';
      newDiv.style.transformOrigin = 'center';
      newDiv.style.animation = block.animation;
      this.wallElement.appendChild(newDiv);
    });
  
}   
});
  }

    startTimer(seconds) {
        this.timeLeft = seconds;
        const timerEl = document.querySelector('#timer');
      
      
        timerEl.textContent = `${String(this.timeLeft).padStart(2, '0')}`;

        // clear any existing timer first
        clearInterval(this.timerInterval);

        this.timerInterval = setInterval(() => {
            this.timeLeft--;
            timerEl.textContent = `Time left: ${this.timeLeft}s`;

            // change color when time is running low
            if (this.timeLeft <= 10) {
                timerEl.style.color = 'red';
            }

            // time is up - reset to beginning
            if (this.timeLeft <= 0) {
                clearInterval(this.timerInterval);
                timerEl.textContent = '';
                this.resetGame();
            }
        }, 1000);
    }

    resetGame() {

        //is there a nuke option clean slate? ?? 
       
  // reset level
  this.currentLevel = 1;

  // reset UI
  this.statusText.textContent = "Click START to begin!";
  this.statusText.style.color = "black";
  this.levelText.textContent = "LEVEL 1 OF 3";
  this.startBtn.style.visibility = "visible";
  document.body.style.cursor = 'auto';

  // reset maze to level 1
  this.mazeLevel.style.clipPath = levels[this.currentLevel].clipPath;
  this.mazeLevel.style.transform = levels[this.currentLevel].transform;
  this.moonreached.style.top = levels[this.currentLevel].moonTop;
  this.moonreached.style.right = levels[this.currentLevel].moonRight;
  this.moonreached.style.bottom = levels[this.currentLevel].moonBottom;
  this.moonreached.style.left = levels[this.currentLevel].moonLeft;

        // remove any extra blocks added in level 3
        const block1 = document.querySelector('#block1');
        const block = document.querySelector('#block');
        if (block1) block1.remove();
        if (block) block.remove();

const gate = document.querySelector('#gate');
  gate.style.visibility = 'hidden';
  gate.style.pointerEvents = 'none';
  
        // clear timer display
        document.querySelector('#timer').textContent = '';
    }
 boo()
 {
    
    const newcat = document.createElement('img');
    newcat.id = "kitten";
    newcat.src = "visual content/cat.gif";
    newcat.style.position = 'fixed';
    newcat.style.top = '50%';
    newcat.style.left = '50%';
    newcat.style.translate = '-50% -50%';
    newcat.style.width = '200px';
    newcat.style.height = '400px';
    newcat.style.transformOrigin = 'center';
    newcat.style.animation = 'zoom 0.5s ease forwards';
    newcat.style.pointerEvents = 'none';
    newcat.style.visibility = 'hidden';
    newcat.style.zIndex = '999';
    document.body.appendChild(newcat);
    const skrillex = new Audio('audio content/call-911-now_1.mp3');
    this.myAudio.pause();
    newcat.style.visibility = 'visible';
    skrillex.play();
       
     
    // skrillex scream 

    // back ground 
    
    //spawn tons of popups can create outside and make visibbel? make hard to click ? worng x box i love ya ? can i get name from browser? yes but hard who grades ryan ?


 }
}



new Game();