document.addEventListener('DOMContentLoaded',() => {
    const cursor = document.querySelector('.mous');

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 10 + 'px';
        cursor.style.top = e.clientY + 20 + 'px';
    });
});


document.addEventListener('DOMContentLoaded', () => {

    const displaytime = 1000; // is 1s
    const loader = document.getElementById('loader');
    const mainContent = document.getElementById('main-content');
    
     setTimeout(() => {
        loader.style.opacity = '0';

        setTimeout(() => {
            loader.style.display = 'none';
            mainContent.style.display = 'block';

            setTimeout(() => {
                mainContent.style.opacity = '1';
            }, 50);
        }, 600);
    }, displaytime);

});
        