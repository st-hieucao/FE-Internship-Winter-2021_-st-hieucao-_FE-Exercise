// ---------------- BAI1
var age;

window.addEventListener('DOMContentLoaded', (event) => {
  var formElement = document.createElement('form');
  var inputElement = document.createElement('input');
  var buttonElement = document.createElement('button');
  var alertElement = document.createElement('div');

  formElement.setAttribute('class', 'form');
  inputElement.setAttribute('class', 'input');
  inputElement.setAttribute('type', 'number');
  inputElement.setAttribute('placeholder', 'Nhập năm sinh của bạn');
  buttonElement.setAttribute('class', 'button');
  alertElement.setAttribute('class', 'alert');

  buttonElement.innerHTML = 'Tính tuổi';

  formElement.append(inputElement, buttonElement, alertElement);
  document.body.append(formElement);

  buttonElement.onclick = function (e) {
    e.preventDefault();
    var input = document.querySelector('.input').value;
    var currentYear = new Date().getFullYear();

    age = currentYear - parseInt(input);

    alertElement.innerHTML = 'Tuổi của bạn là: ' + age;
  };
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

  var sectionPricingPlans = document.createElement('section');
  var pricingPlansElement = document.createElement('ul');

  sectionPricingPlans.setAttribute('class', 'section-pricing-plans');
  pricingPlansElement.setAttribute('class', 'list-pricing-plans');

  sectionPricingPlans.appendChild(pricingPlansElement);

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
    priceElement.innerHTML = item.price + '$/' + item.interval;
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
  document.body.append(sectionPricingPlans);
});
