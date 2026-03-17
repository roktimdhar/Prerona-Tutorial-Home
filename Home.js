// JavaScript to toggle the menu on mobile
        document.getElementById('menu').addEventListener('click', function() {
            var nav = document.getElementById('hide');
            nav.classList.toggle('show');
        });
        document.getElementById('cls').addEventListener('click', function() {
            var nav = document.getElementById('allcls');
            nav.classList.toggle('show');
        });