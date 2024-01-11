var currentImage = 1;
var productSilderImages = [2,3,4,5];
var currentProductSilderImage = 0

changeSliderImage = () => {
    var slider = document.getElementById("slider");

    var circelimg = document.getElementById("circelimg" + currentImage);
    circelimg.classList.remove("bgBlack");
    
    var imgNo = currentImage == 3 ? 1 : currentImage + 1;
    currentImage = imgNo;
    
    circelimg = document.getElementById("circelimg" + currentImage);
    circelimg.classList.add("bgBlack");

    slider.style.backgroundImage = "url('static/photos/slider/sd-" + imgNo + ".jpg')";
}

changeProductSliderImage = () => {
    var img = document.getElementById("productSlider");
    img.src = "static/photos/Products/" + productSilderImages[currentProductSilderImage++] + ".jpg"
    if(currentProductSilderImage == 4)
    currentProductSilderImage = 0;
}

window.onload = (event) => {
    setInterval(changeSliderImage,1000);
    setInterval(changeProductSliderImage, 2000);
    setInterval(slideClientLogo(1),2000);
    addIntersectionObserver('.animation-translate-y-animate-up', 'translate-y-animation-trigger');
    addIntersectionObserver('.animation-translate-y-animate-down', 'translate-y-animation-trigger');
    addIntersectionObserver('.animation-translate-x-animate-right', 'translate-x-animation-trigger');
    addIntersectionObserver('.animation-translate-x-animate-left', 'translate-x-animation-trigger');
};


changeMenuItem = (activeItem) => {
    let deactivateItem = (activeItem == 1 ? 2 : 1);

    var item = document.getElementById("menuItem" + activeItem);
    item.classList.add("active-menu");

    item = document.getElementById("menuItem" + deactivateItem);
    item.classList.remove("active-menu");
    
    item = document.getElementById("menuItemSection" + deactivateItem);
    item.classList.add("displayNone");

    item = document.getElementById("menuItemSection" + activeItem);
    item.classList.remove("displayNone");
}

const options = {
    root: null,
    rootMargin: '0px',
    threshold: .01
  }


const addIntersectionObserver = (selector,trigger) => {
    const elements = document.querySelectorAll(selector);
    const callbacks = (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting){
            entry.target.classList.add(trigger);
          }
        });
      }
    
    let observer = new IntersectionObserver(callbacks, options);
    elements.forEach(element => {
      observer.observe(element);
    });
}

slideClientLogo = num => {
    const elements = document.querySelectorAll(".client-logo")
    console.log();
    elements.forEach( (element,index) => {
        if(!element.classList.contains("displayNone"))
        {
            console.log(index+num);
            element.classList.add("displayNone");
            if(index + num > elements.length - 1)
            {
                console.log(87);
                elements[0].classList.remove("displayNone");
            }
            else if(index + num < 0)
            {
                console.log(92);
                elements[elements.length - 1].classList.remove("displayNone");
            }
            else
            {
                console.log(97);
                elements[index + num].classList.remove("displayNone");
            }
        }   
    });
}