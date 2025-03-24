let length = 16

function onChangeSize() {
  const ans = prompt('Enter the number of squares per side', length)

  if (ans) {
    length = Number(ans)
    destroyGrid();
    createGrid(length)
  }
}

function destroyGrid() {
  const container = document.querySelector('.grid');
  const gridItems = document.querySelectorAll('.grid__item')

  for (it of gridItems) {
    container.removeChild(it)
  }
}

function createGrid(length) {
  const container = document.querySelector('.grid');

  if (container) {
    for (let i = 0; i < length * length; i++) {
      const div = document.createElement('div')
      const size = Math.floor(800 / length)
      div.classList = 'grid__item'
      div.style = `height: ${size}px; width: ${size}px`
      div.addEventListener('mouseover', () => {
        if (!div.classList.contains('grid__item--visited'))
          div.classList.add('grid__item--visited')
      })
      container.appendChild(div);
    }
  }
}

createGrid(length)