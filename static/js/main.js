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
    console.log(selector,trigger);
    console.log(elements);
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

const clientLogoSlide = () => {
    const elements = document.querySelectorAll("client-logo")
    let toDisableIndex = 0;
    for (let index = 0; index < elements.length; index++) {
        const element = array[index];
        if(!element.classList.contains("displayNone"))
        {
            toDisableIndex = index;
            break; 
        }   
    }

    const toEnableIndex = toDisableIndex + 3
}