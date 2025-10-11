function setDeviceClass() {
    const screenWidth = window.innerWidth;
    const tabletMin = 600; 
    const desktopMin = 1024;
    const body = document.body;
    
    body.classList.remove('mobile-view', 'tablet-view', 'desktop-view');

    if (screenWidth < tabletMin) {
        body.classList.add('mobile-view');
    } else if (screenWidth >= tabletMin && screenWidth < desktopMin) {
        body.classList.add('tablet-view');
    } else {
        body.classList.add('desktop-view');
    }
}

function debounce(func, delay) {
    let timeoutId;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(context, args);
        }, delay);
    };
}

const debouncedSetDeviceClass = debounce(setDeviceClass, 100);

window.onload = setDeviceClass;
window.addEventListener('resize', debouncedSetDeviceClass);
