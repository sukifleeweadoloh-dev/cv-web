document.addEventListener('DOMContentLoaded',() => {
    const cursor = document.querySelector('.mous');
    const cursorImage = cursor.querySelector('.cursor-image');
    
    // Cursor types mapping
    const cursorTypes = {
        normal: 'img/CursorNormal.cur',
        move: 'img/CursorMove.cur',
        travelling: 'img/CursorTravelling.cur',
        pandown: 'img/CursorPandown.cur',
        panup: 'img/CursorPanup.cur'
    };

    let currentCursor = 'normal';
    let lastMouseX = 0;
    let lastMouseY = 0;
    let stillTimeout;
    let isLoading = false;

    // Function to change cursor
    function setCursor(cursorType) {
        if (cursorTypes[cursorType] && currentCursor !== cursorType) {
            currentCursor = cursorType;
            cursorImage.src = cursorTypes[cursorType];
        }
    }

    // Handle page loading states
    window.addEventListener('beforeunload', () => {
        isLoading = true;
        setCursor('travelling');
    });

    document.addEventListener('DOMContentLoaded', () => {
        isLoading = false;
        setCursor('normal');
    });

    window.addEventListener('load', () => {
        isLoading = false;
        setCursor('normal');
    });

    window.addEventListener('wheel', (e) => {
        if (e.deltaY < 0) {
            setCursor('panup');
        } else if (e.deltaY > 0) {
            setCursor('pandown');
        }
        
        clearTimeout(stillTimeout);
        stillTimeout = setTimeout(() => {
            setCursor('normal');
        }, 1500);
    });

    // Mouse move event
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 10 + 'px';
        cursor.style.top = e.clientY + 20 + 'px';

        // Don't change cursor if loading
        if (isLoading) return;

        // Check if mouse is moving
        if (e.clientX !== lastMouseX || e.clientY !== lastMouseY) {
            lastMouseX = e.clientX;
            lastMouseY = e.clientY;
            
            // Clear previous timeout
            clearTimeout(stillTimeout);
            
            // Set to move cursor when moving
            setCursor('move');
            
            // Set to normal cursor after 1.5 seconds of no movement
            stillTimeout = setTimeout(() => {
                setCursor('normal');
            }, 1500);
        }
    });

    // Handle link clicks to show loading cursor
    document.addEventListener('click', (e) => {
        const target = e.target;
        if (target.tagName === 'A' && target.href && !target.href.includes('#')) {
            isLoading = true;
            setCursor('travelling');
        }
    }, true);
});


document.addEventListener('DOMContentLoaded', () => {

    const displaytime = 1000; // is 1s
    const loader = document.getElementById('loader');
    const mainContent = document.getElementById('main-content');

    mainContent.style.display = 'grid';
    mainContent.style.opacity = '1';

    setTimeout(() => {
       loader.style.opacity = '0';

       setTimeout(() => {
           loader.style.display = 'none';
           mainContent.style.display = 'grid';

           setTimeout(() => {
               mainContent.style.opacity = '1';
           }, 50);
       }, 600);
    }, displaytime);

});
        