var currentImage = 1;
var productSilderImages = [2,3,4,5];
var currentProductSilderImage = 0

changeSliderImage = () => {
	var slider = document.getElementById("slider");
	let wlcmMsgMain = document.getElementById("wlcm-msg-main")
	let wlcmMsgSub = document.getElementById("wlcm-msg-sub")

	var circelimg = document.getElementById("circelimg" + currentImage);
	circelimg.classList.remove("bgBlack");

	var imgNo = currentImage == 3 ? 1 : currentImage + 1;
	currentImage = imgNo;
	if(currentImage == 1){
		wlcmMsgMain.style.display = "unset"
		wlcmMsgSub.style.display = "unset"
	}
	else{
		wlcmMsgMain.style.display = "none"
		wlcmMsgSub.style.display = "none"
	}
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
	initialSetup();
    setInterval(changeSliderImage,5000);
    setInterval(changeProductSliderImage, 5000);
    setInterval(slideClientLogo,10000,1);
    addIntersectionObserver('.animation-translate-y-animate-up', 'translate-y-animation-trigger');
    addIntersectionObserver('.animation-translate-y-animate-down', 'translate-y-animation-trigger');
    addIntersectionObserver('.animation-translate-x-animate-right', 'translate-x-animation-trigger');
    addIntersectionObserver('.animation-translate-x-animate-left', 'translate-x-animation-trigger');
	// setTimeout(hideSpinner, 1000)
	hideSpinner()
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
    const current = document.getElementById("render-client-logos");
    const clientLogoList = document.getElementById("client-logo-list");

	if (window.screen.width < 800) {
		if(num > 0){
			const element = current.children[0];
			const nextElement = clientLogoList.children[0];
			current.appendChild(nextElement)
			clientLogoList.appendChild(element)
		}
		else
		{
			const element = current.children[current.children.length - 1];
			const nextElement = clientLogoList.children[clientLogoList.children.length - 1];
			current.insertBefore(nextElement, current.children[0])
			clientLogoList.insertBefore(element, clientLogoList.children[0])
		}
		current.children[0].classList.add("sub-active-client-logo")
	}
	else{
		current.children[parseInt(current.children.length/2)].classList.remove("active-client-logo");
		current.children[parseInt(current.children.length/2) - 1].classList.remove("sub-active-client-logo");
		current.children[parseInt(current.children.length/2) + 1].classList.remove("sub-active-client-logo");
	
		if(num > 0){
			const element = current.children[0];
			const nextElement = clientLogoList.children[0];
			current.appendChild(nextElement)
			clientLogoList.appendChild(element)
		}
		else
		{
			const element = current.children[current.children.length - 1];
			const nextElement = clientLogoList.children[clientLogoList.children.length - 1];
			current.insertBefore(nextElement, current.children[0])
			clientLogoList.insertBefore(element, clientLogoList.children[0])
		}
		
		current.children[parseInt(current.children.length/2)].classList.add("active-client-logo");
		current.children[parseInt(current.children.length/2) - 1].classList.add("sub-active-client-logo");
		current.children[parseInt(current.children.length/2) + 1].classList.add("sub-active-client-logo");
	}
}

window.addEventListener('scroll', () => {
    const verticalScrollPx = window.scrollY || window.pageYOffset;
  
    if (verticalScrollPx > 50) {
      document.getElementById('nav').classList.add('nav-scroll');
    }
    else {
        document.getElementById('nav').classList.remove('nav-scroll');
    }
  });

initialSetup = () => {
	if (window.screen.width < 800) {
		const current = document.getElementById("render-client-logos");
		const clientLogoList = document.getElementById("client-logo-list");
		while(current?.children?.length > 1){
			const element = current?.children[current?.children?.length - 1];
			element?.classList.remove("sub-active-client-logo")
			element?.classList.remove("active-client-logo")
			clientLogoList?.insertBefore(element, clientLogoList.children[0])
		}
		current?.children[0]?.classList?.add("sub-active-client-logo")
	}
	
	console.log(window.screen.width);
}

const toggleResponsiveSubMenu = (element) => {
    const subItems = document.getElementById("responsiveNavSubItem")
    subItems.classList.toggle("displayNone")
}

const toggleResponsiveNav = () => {
    var responsiveNav = document.getElementById("responsive-nav");
    responsiveNav.classList.toggle("displayNone")
}

const hideSpinner = () => {
  	const spinner = document.getElementById("spinner");
	spinner.style.animation = 'opesity-decrease 1s';
	setTimeout(() => {spinner.style.opacity = 0; spinner.style.display = 'none';} , 1000)
}