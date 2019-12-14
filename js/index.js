var btnMenu = document.getElementById ('btn_menu');
var nav = document.getElementById ('nav');

btnMenu.addEventListener ('click', function () {
    nav.classList.toggle ('showMenu');
})
var allSmartphones = [
    {
        brand : 'Apple',
        model : 'iPhone 11',
        capacity : '64 GB',
        display : '5.5"',
        price : '1799.99'
    },
    {
        brand : 'Apple',
        model : 'iPhone 11',
        capacity : '128 GB',
        display : '5.5"',
        price : '1799.99'
    }
]

var newSmart = allSmartphones.filter (function (element) {
    return (element.price === '1799.99')
});

console.log (newSmart);