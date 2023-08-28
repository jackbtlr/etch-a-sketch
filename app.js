const sketchArea = document.querySelector('#sketchBox');
const clearButton = document.querySelector('#clear');
const colorSelect = document.querySelector('#colorSelect');
const slider = document.querySelector('#slider');
const sketchSize = document.querySelector('#sketchSize');
const eraser = document.querySelector('#eraser');
const colorMode = document.querySelector('#color');
const rainbowMode = document.querySelector('#rainbow');
const modes = document.querySelectorAll('.mode');
let mode = 'color';
let drawColor = '#333';
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function colorCell(e){
  if(e.type === 'mouseover' && !mouseDown) return;
  if(mode === 'color'){
    this.style.backgroundColor = drawColor;
  }
  else if(mode === 'eraser'){
    this.style.backgroundColor = '#fefefe';
  }
  else{
    this.style.backgroundColor = randomColor();
  }
}

function clearGraph(){
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => cell.style.backgroundColor = '#fefefe');
}

function drawGraph(sideLength){
  sketchBox.innerHTML = '';
  for (let i = 0; i < sideLength; i++) {
    const column = document.createElement('div');
    column.classList.add('col');
    for(let j = 0; j < sideLength; j++){
      const cell = document.createElement('div')
      cell.classList.add('cell');
      cell.addEventListener('mouseover', colorCell);
      cell.addEventListener('mousedown', colorCell);
      column.append(cell);
    }
  sketchArea.append(column);
  }
}

function randomColor(){
  return '#' + Math.floor(Math.random()*16777215).toString(16);
}

function changeActiveButton(){
  colorMode.classList.toggle('active');
  rainbowMode.classList.toggle('active');
  eraser.classList.toggle('active');
}

function selectMode(e){
  let oldButton = document.querySelector(`#${mode}`)
  let newButton = document.querySelector(`#${e.target.id}`);
  newButton.classList.add('active');
  oldButton.classList.remove('active');
  mode = e.target.id;
}

slider.addEventListener('input', (e) => {
  let sideLength = parseInt(e.target.value);
  sketchSize.innerText = `${sideLength} x ${sideLength}`;
  drawGraph(sideLength);
});

clearButton.addEventListener('click', clearGraph);
colorSelect.addEventListener('input', (e) => {
  drawColor = e.target.value;
});

for (let modeButton of modes){
  modeButton.addEventListener('click', (e) => {
    if(e.target.id !== mode){
      selectMode(e);
    }
  });
}

drawGraph(16);