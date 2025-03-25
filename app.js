let length = 16

function getRandomColor() {
  return Math.floor(Math.random() * 256)
}

function onChangeSize() {
  const ans = prompt('Enter the number of squares per side', length)

  if (ans) {
    length = Number(ans)
    if (length > 100) {
      alert('Numbers greater than 100 are not allowed')
      onChangeSize()
      return
    }
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
      const size = Number(800 / length, 2).toFixed(2)

      div.classList = 'grid__item'
      div.style.height = `${size}px`;
      div.style.width = `${size}px`;

      div.addEventListener('mouseover', () => {
        if (div.classList.contains('grid__item--visited')) {
          if (div.style.opacity > 0) {
            div.style.opacity -= 0.1;
          } else {
            div.style.opacity = 0;
          }
        } else {
          div.classList.add('grid__item--visited')
          div.style.backgroundColor = `rgb(${getRandomColor()},${getRandomColor()},${getRandomColor()})`
          div.style.opacity = 1;
        }
      })

      container.appendChild(div);
    }
  }
}

createGrid(length)