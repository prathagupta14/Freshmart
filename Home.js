const images = document.querySelector('.images');
let counter = 1;

function nextImage() {
    images.style.transform = `translateX(${-350 * counter}px)`;
    console.log("hi");
    counter++;
    images.style.transition = 'transform 1.5s ease-in-out'

    if (counter === 3){
        counter = 0;
    }
}

setInterval(nextImage, 3000);