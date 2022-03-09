const products = [
  'Dviratis',
  'Triratis',
  'Žvakidė',
  'Stalas',
  'Kėdė',
  'Knygų lentyna',
  'Paveikslas su rėmu',
  'Veidrodis',
  'Keturių vietų palapinė',
  'Pripučiama valtis',
  'Meškerė karosams gaudyti',
  'Planšetė',
  'Pastatoma lempa',
  'Vazonas',
  'Baterijų pakrovėjas',
  'Pagalvių komplektas',
  'Oro drėkintuvas',
  'Oro sausintuvas',
  'Kavinukas elektrinis',
  'Kilimas 2 X 3 metrų',
  'Kilimėlis kojoms valyti',
  'Užuolaidos',
  'Vėjo malūnas',
  'Dažai sienoms',
  'Dažai luboms',
  'Medinė dėžė',
];

const button = document.querySelector('button');
const render = (m) => {
  let html = '';
  m.forEach((p) => {
    html += `<li>${p}</li>`;
  });
  return html;
};

const sortArray = (m) => {
  m.sort(function (a, b) {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }

    return 0;
  });
};

const ul = document.querySelector('ul');

button.addEventListener('click', () => {
  sortArray(products);
  ul.innerHTML = render(products);
});

ul.innerHTML = render(products);
