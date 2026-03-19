
//   this.statusText.textContent = "hmm we gotta land";
// this.levelText.textContent = "LEVEL 3 OF 3";
// this.moonreached.style.top = "auto";
// this.moonreached.style.right = "40px";
// this.moonreached.style.bottom = "280px";
// this.moonreached.style.left = "auto";
// this.mazeLevel.style.clipPath = 'path("M542 66.5c0 1.6-.6 2.5-1.5 2.5s-1.5.9-1.5 2.5c0 1.4-.4 2.5-1 2.5-.7 0-1 25-1 73v73h46v-95h28.4c21.9 0 28.5-.3 28.8-1.3.4-.9 14-1.3 62.6-1.5l62.2-.4v164.5l12.8-.6c7-.4 15.5-.7 19-.7h6.2V64H542zM116 557v66h172V491H116z")';
// this.mazeLevel.style.transform = "translateX(-50px) translateY(-50px)";

// const newDiv = document.createElement('div');
// newDiv.style.clipPath = 'path("M236.3 326.7c-.4 1-1.1 2.1-1.7 2.5-.8.5-1.2 16.5-1.4 50.8l-.3 50H264v-62.7l28.7-.6c15.7-.4 40.9-.7 56-.7H376v74h-70v34h105V325h-87c-82 0-87.1.1-87.7 1.7")';
// //newDiv.className = 'path';
// newDiv.id = 'block1';
// newDiv.style.backgroundColor = 'red';  // ← needed to see it
// newDiv.style.position = 'absolute';       // ← needed to position inside #wall
// newDiv.style.top = '0';
// newDiv.style.left = '0';
// newDiv.style.width = '800px';
// newDiv.style.height = '600px';
// //newDiv.style.zIndex = '10';
// newDiv.style.transformOrigin = 'center';  // ← animate from center
// newDiv.style.animation = 'pulse 4s ease-in-out infinite'; // ← pulse animation
// this.wallElement.appendChild(newDiv);


// const newerDiv = document.createElement('div');
// newerDiv.style.clipPath = 'path("M338.7 230c-1.5 3.6-1.7 8.7-1.7 52.5V331h31v-63h19c12 0 19-.4 19-1s13-1 37-1h37v75h-70v34h41.8c23.1 0 46.7-.3 52.5-.7l10.7-.6V226H340.5z")';
// //newDiv.className = 'path';
// newerDiv.id = 'block';
// newerDiv.style.backgroundColor = 'blue';  // ← needed to see it
// newerDiv.style.position = 'absolute';       // ← needed to position inside #wall
// newerDiv.style.top = '0';
// newerDiv.style.left = '0';
// newerDiv.style.width = '800px';
// newerDiv.style.height = '600px';
// //newDiv.style.zIndex = '10';
// newerDiv.style.transformOrigin = 'center';  // ← animate from center
// newerDiv.style.animation = 'pulse2 4s ease-in-out infinite'; // ← pulse animation
// this.wallElement.appendChild(newerDiv);
 // ^^^^^^what kevin made VVVVVVVVVVVVVVVVVVVVVV what claude made based on that and prev functions
function loadLevel3(callback) {
  callback({
    statusText: "hmm we gotta land",
    levelText: "LEVEL 3 OF 3",
    moonTop: "auto",
    moonRight: "40px",
    moonBottom: "300px",
    moonLeft: "auto",
    clipPath: 'path("M542 66.5c0 1.6-.6 2.5-1.5 2.5s-1.5.9-1.5 2.5c0 1.4-.4 2.5-1 2.5-.7 0-1 25-1 73v73h46v-95h28.4c21.9 0 28.5-.3 28.8-1.3.4-.9 14-1.3 62.6-1.5l62.2-.4v164.5l12.8-.6c7-.4 15.5-.7 19-.7h6.2V64H542zM116 557v66h172V491H116z")',
    transform: "translateX(-50px) translateY(-50px)",
    extraBlocks: [
      {
        id: 'block1',
        clipPath: 'path("M236.3 326.7c-.4 1-1.1 2.1-1.7 2.5-.8.5-1.2 16.5-1.4 50.8l-.3 50H264v-62.7l28.7-.6c15.7-.4 40.9-.7 56-.7H376v74h-70v34h105V325h-87c-82 0-87.1.1-87.7 1.7")',
        backgroundColor: 'red',// take this out 
        animation: 'pulse 4s ease-in-out infinite'
      },
      {
        id: 'block',
        clipPath: 'path("M338.7 230c-1.5 3.6-1.7 8.7-1.7 52.5V331h31v-63h19c12 0 19-.4 19-1s13-1 37-1h37v75h-70v34h41.8c23.1 0 46.7-.3 52.5-.7l10.7-.6V226H340.5z")',
        backgroundColor: 'blue',//take this out after tests
        animation: 'pulse2 4.5s ease-in-out infinite'
      }
    ]
  });
}