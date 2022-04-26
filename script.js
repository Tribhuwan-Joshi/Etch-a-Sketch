// define canvas
const canvas = document.querySelector(".canvas");
// get dimension of canvas
const canvasWidth = canvas.clientWidth;
const canvasHeight = canvas.clientHeight;

// define gridInput
const gridInput = document.querySelector("#gridInput");
gridInput.addEventListener("input", changeOutput);
gridInput.addEventListener("input", createPixels);

// change gridOutput
const gridOutput = document.querySelector("#gridOutput");

function changeOutput() {
  gridOutput.textContent = gridInput.value;
}


//create Pixel
function createPixels() {

    //clear canvas
    canvas.replaceChildren();

  // take value of grid
    let gridSize = gridOutput.textContent;
    for (let index = 0; index < gridSize*gridSize; index++) {
        const pixel = document.createElement("div");
        //take dimension of pixel
        const pixelHeight = canvasHeight / gridSize;
        const pixelWidth = canvasWidth / gridSize;
        pixel.style.cssText = `width:${pixelWidth}px;height:${pixelHeight}px;`;
        canvas.appendChild(pixel);
        
    }
}

createPixels();
