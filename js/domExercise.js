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
var pricingPlans = [
  {
    title: 'Basic',
    price: 10,
    benefits: [
      '10 users included',
      '2 GB of storage',
      'Email support',
      'Help center access',
    ],
    interval: 'month',
    type: 'basic',
    action: 'Get Started',
  },
  {
    title: 'Pro',
    price: 30,
    benefits: [
      '100 users included',
      '20 GB of storage',
      'Priority email support',
      'Help center access',
    ],
    interval: 'month',
    type: 'pro',
    action: 'Buy Now',
  },
];
var pricingPlansElement = document.querySelector('.list-pricing-plans');

pricingPlans.forEach(function (item) {
  var planItem = document.createElement('li');
  var planTitleElement = document.createElement('h3');
  var priceElement = document.createElement('h4');
  var benefitsElement = document.createElement('ul');
  var buttonElement = document.createElement('button');

  planItem.setAttribute('class', 'plan-item');
  planTitleElement.setAttribute('class', 'plan-title');
  priceElement.setAttribute('class', 'price');
  benefitsElement.setAttribute('class', 'benefits');
  if (item.type === 'basic') {
    buttonElement.setAttribute('class', 'btn btn-secondary');
  } else {
    buttonElement.setAttribute('class', 'btn btn-primary');
  }

  planTitleElement.innerHTML = item.title;
  priceElement.innerHTML = item.price + '$/month';
  buttonElement.innerHTML = item.action;

  item.benefits.forEach(function (infoItem) {
    var benefitElement = document.createElement('li');
    benefitElement.setAttribute('class', 'benefit-item');

    benefitElement.innerHTML = infoItem;
    benefitsElement.appendChild(benefitElement);
  });

  planItem.append(
    planTitleElement,
    priceElement,
    benefitsElement,
    buttonElement
  );
  pricingPlansElement.appendChild(planItem);
});
