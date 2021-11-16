const container = document.querySelector('.container');
let zIndex = 0;
container.addEventListener('mousedown', function(event) {

  const dragImage = event.target.closest('img');
    if(!dragImage) return;

  dragImage.style.position = 'absolute';
  dragImage.style.opacity = 0.8;
  dragImage.style.cursor = 'move';
  
  const shiftX = event.clientX - dragImage.getBoundingClientRect().left;
  const shiftY = event.clientY - dragImage.getBoundingClientRect().top;

  dragImage.ondragstart = function(event) {
    event.preventDefault();
    dragImage.style.zIndex = ++zIndex;
  }

  dragImage.onmousemove = function(event) {
    dragImage.style.left = event.pageX - shiftX + 'px';
    dragImage.style.top = event.pageY - shiftY + 'px';
  }

  dragImage.onmouseup = function() {
    dragImage.style.opacity = 1;
    dragImage.onmousemove = null;
  }

}, true);