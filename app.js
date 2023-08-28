const sketchArea = document.querySelector('#sketchBox');

function colorCell(){
  this.style.backgroundColor = 'black';
}

function drawGraph(sideLength){
  sketchBox.innerHTML = '';
  for (let i = 0; i < sideLength; i++) {
    const column = document.createElement('div');
    column.classList.add('col');
    for(let j = 0; j < sideLength; j++){
      const cell = document.createElement('div')
      cell.classList.add('cell');
      cell.addEventListener('click', colorCell);
      column.appendChild(cell);
    }
  sketchArea.appendChild(column);
  }
}




const slider = document.querySelector('#slider');
const sketchSize = document.querySelector('#sketchSize');
slider.addEventListener('input', (e) => {
  let sideLength = parseInt(e.target.value);
  sketchSize.innerText = `${sideLength} x ${sideLength}`;
  drawGraph(sideLength);
});



