const smallImage = document.querySelector('.small_img');
smallImage.addEventListener('click', changeImage);

function changeImage(event) {
    const smallImageButton = event.target;
    const largeImage = document.querySelector('#largeImage');
    largeImage.src = smallImageButton.src;
}
