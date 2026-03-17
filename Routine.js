        document.getElementById('menu').addEventListener('click', function() {
            var nav = document.getElementById('hide');
            nav.classList.toggle('show');
        });

        function showImage(Picture) {
            const container = document.getElementById(Picture);
            // Toggle visibility: show if hidden, hide if shown
            if (container.style.display === 'none' || container.style.display === '') {
                container.style.display = 'block';
            } else {
                container.style.display = 'none';
            }
        }