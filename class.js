document.getElementById('menu').addEventListener('click', function () {
    var nav = document.getElementById('hide');
    nav.classList.toggle('show');
});
 document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.portal-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const pageUrl = this.getAttribute('data-page');
            window.open(pageUrl, '_blank');
        });
    });
});
const Four = "ChotonSir_0B4T";
const Five = "ChotonSir_B0T5";
const Six = "ChotonSir_0G6T";
const Seven = "ChotonSir_G0T7";
const Eight = "ChotonSir_B0T8E";
const Nine = "ChotonSir_E0B9T";
const Ten = "ChotonSir_G1T0E";
const SSC = "ChotonSir_ESGSTC";
const IFY = "ChotonSir_GETI1";
const ISY = "ChotonSir_BETHSC";
