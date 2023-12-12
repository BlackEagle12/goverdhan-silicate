var currentImage = 1;

changeImage = () => {
    var slider = document.getElementById("slider");

    var circelimg = document.getElementById("circelimg" + currentImage);
    circelimg.classList.remove("bgBlack");
    
    var imgNo = currentImage == 3 ? 1 : currentImage + 1;
    currentImage = imgNo;
    
    circelimg = document.getElementById("circelimg" + currentImage);
    circelimg.classList.add("bgBlack");

    slider.style.backgroundImage = "url('static/photos/slider/sd-" + imgNo + ".jpg')";
}
window.onload = (event) => {
    setInterval(changeImage,1000);
};


changeMenuItem = (activeItem) => {
    let deactivateItem = (activeItem == 1 ? 2 : 1);

    var item = document.getElementById("menuItem" + activeItem);
    item.classList.add("active-menu");

    item = document.getElementById("menuItem" + deactivateItem);
    item.classList.remove("active-menu");
    
    item = document.getElementById("menuItemSection" + deactivateItem);
    item.classList.add("diplayNone");

    item = document.getElementById("menuItemSection" + activeItem);
    item.classList.remove("diplayNone");

}



  