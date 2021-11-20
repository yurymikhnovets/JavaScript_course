const figureBox = document.querySelector('.figure-box');

function dottedCircle() {
    figureBox.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300"><circle cx="150" cy="150" r="100" style="stroke: #845EC2; fill: #B39CD0; stroke-dasharray: 5; stroke-width: 5;"></svg>';
}

function smallCircle() {
    figureBox.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300"><circle cx="150" cy="150" r="30" style="stroke: #845EC2; fill: #B39CD0; stroke-width: 3;"></svg>';
}

function transparentCircle() {
    figureBox.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300"><circle cx="150" cy="150" r="100" style="stroke: #845EC2; fill-opacity: 0; stroke-width: 5;"></svg>';
}

function differentColorCircle() {
    figureBox.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300"><circle cx="150" cy="150" r="100" style="stroke: #00C9A7; fill: #C4FCEF; stroke-width: 5;"></svg>';
}