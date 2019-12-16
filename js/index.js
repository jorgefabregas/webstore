var btnMenu = document.getElementById ('btn_menu');
var nav = document.getElementById ('nav');

btnMenu.addEventListener ('click', function () {
    nav.classList.toggle ('showMenu');
})
const allSmartphones = [
    {
      brand: `Samsung`,
      model: `Galaxy Note 10`,
      capacity: `256 GB`,
      display: '5.5"',
      color: 'black',
      code: 'SM-01',
    },{
        brand: `Samsung`,
        model: `Galaxy S10`,
        capacity: `128 GB`,
        display: '5.5"',
        color: 'black',
        code: 'SM-02',
      },{
        brand: `Apple`,
        model: `iPhone X`,
        capacity: `256 GB`,
        display: '5.5"',
        color: 'black',
        code: 'SM-03',
      },{
        brand: `Apple`,
        model: `iPhone 11`,
        capacity: `64 GB`,
        display: '5.5"',
        color: 'black',
        code: 'SM-04',
      },
  ];
    