// Navbar link highlighter
const triggers = document.querySelectorAll('li a');
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

function highlightLink() {
  const linkCoordinates = this.getBoundingClientRect();
  console.log(linkCoordinates);
  //set own coordinates 
  const coords = {
    width: linkCoordinates.width,
    height: linkCoordinates.height,
    top: linkCoordinates.top + window.scrollY,
    left: linkCoordinates.left + window.scrollX
  }
  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));