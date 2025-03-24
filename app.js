function createGrid() {
  const container = document.querySelector('.grid');

  if (container) {
    for (let i = 0; i < 16 * 16; i++) {
      const div = document.createElement('div')
      div.classList = 'grid__item'
      div.addEventListener('mouseover', () => {
        if (!div.classList.contains('grid__item--visited'))
          div.classList.add('grid__item--visited')
      })
      container.appendChild(div);
    }
  }
}

createGrid()