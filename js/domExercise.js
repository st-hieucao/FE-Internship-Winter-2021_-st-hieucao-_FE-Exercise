// ---------------- BAI1
var buttonElement;
var alertElement;
var age;
window.addEventListener('DOMContentLoaded', (event) => {
  buttonElement = document.querySelector('.button');
  alertElement = document.querySelector('.alert');

  buttonElement.onclick = function (e) {
    e.preventDefault();
    var input = document.querySelector('.input').value;
    var currentYear = new Date().getFullYear();

    age = currentYear - parseInt(input);

    alertElement.innerHTML = 'Tuổi của bạn là: ' + age;
  };
});


// ---------------- BAI2
var options = [
  {
    title: 'Basic',
    price: '$10 / month',
    listInfo: [
      '10 users included',
      '2 GB of storage',
      'Email support',
      'Help center access',
    ],
    action: 'Get Started',
  },
  {
    title: 'Pro',
    price: '$30 / month',
    listInfo: [
      '100 users included',
      '20 GB of storage',
      'Priority email support',
      'Help center access',
    ],
    action: 'Buy Now',
  },
];
var listOptionsElement = document.querySelector('.list-options');

options.forEach(function (item) {
  var liElement = document.createElement('li');
  var optionTitleElement = document.createElement('h3');
  var priceElement = document.createElement('h4');
  var listInfoElement = document.createElement('ul');
  var buttonElement = document.createElement('button');

  liElement.setAttribute('class', 'option');
  optionTitleElement.setAttribute('class', 'option-title');
  priceElement.setAttribute('class', 'price');
  listInfoElement.setAttribute('class', 'list-info');
  if (item.title === 'Basic') {
    buttonElement.setAttribute('class', 'btn btn-secondary');
  } else {
    buttonElement.setAttribute('class', 'btn btn-primary');
  }

  optionTitleElement.innerHTML = item.title;
  priceElement.innerHTML = item.price;
  buttonElement.innerHTML = item.action;

  item.listInfo.forEach(function (infoItem) {
    var infoItemElement = document.createElement('li');
    infoItemElement.setAttribute('class', 'info-item');

    infoItemElement.innerHTML = infoItem;

    listInfoElement.appendChild(infoItemElement);
    liElement.append(
      optionTitleElement,
      priceElement,
      listInfoElement,
      buttonElement
    );
  });

  listOptionsElement.appendChild(liElement);
});
