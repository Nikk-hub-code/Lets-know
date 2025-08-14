//waiting for page to load
window.addEventListener('load', function() {
    setTimeout(function() {
        const load = document.getElementById('loader');
        const content = document.getElementById('content');

        //Ball hitting background
        const ball = document.getElementById('ball');
        ball.style.transform = 'scale(50)';
        ball.style.transition = 'transform 0.5s ease-out';

        //Show content section
        setTimeout(function() {
            load.style.opacity = '0';
            content.classList.add('show-content');

            //Remove loading
            setTimeout(function() {
                load.style.display = 'none';
            }, 1000);
        }, 500);
    }, 3000);
});
