const current = document.querySelector("#current"); //get current image
const imgs = document.querySelectorAll(".imgs img"); //get all images in imgs class
const opacity = 0.5;

imgs[0].style.opacity = opacity; //set opacity for first image when it loads
imgs.forEach(img => img.addEventListener('click', changeImage));

function changeImage(e) {

    //remove opacity
    imgs.forEach(img => img.style.opacity = 1);

    //add class
    current.classList.add('fade-in');

    //remove class
    setTimeout(() => current.classList.remove('fade-in'), 300);

    //change image
    current.src = e.target.src;


    //set opacity
    e.target.style.opacity = opacity;

}