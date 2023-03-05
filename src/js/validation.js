import Notiflix from 'notiflix';
import validator from 'validator';
import debounce from 'lodash.debounce';

const formRef = document.querySelector('.order__form');
const nameInputRef = formRef.querySelector('#name');
const phoneInputRef = formRef.querySelector('#phone');

formRef.addEventListener('submit', onSubmitValidate);
nameInputRef.addEventListener('input', onNameInputCheck);
phoneInputRef.addEventListener('input', onPhoneInputCheck);

const { name, phone } = formRef.elements;

function onSubmitValidate(e) {
  e.preventDefault();

  if (
    onNameInputCheck() &&
    onPhoneInputCheck() &&
    e.target.terms.checked === true
  ) {
    Notiflix.Notify.success('Thank you! Our manager will contact you shortly.');
  }
  if (!e.target.terms.checked) {
    Notiflix.Notify.warning('You should accept terms of cooperation');
  }
}

function onNameInputCheck(e) {

  if (validator.isAlpha(name.value, 'ru-RU')) {
    onSuccess(name);
    return true;
  } else if (!name.value) {
    onEmptyFieldReset(name);
  } else {
    onFailure(name);
    if(name.value.length> 1 ){
    debouncedFailure('Name must be in cyrillic');}
  }
}

function onPhoneInputCheck(e) {
  if (
    validator.isNumeric(phone.value, { no_symbols: false }) &&
    validator.isLength(phone.value,10)
  ) {
    onSuccess(phone);
    return true;
  } else if (!phone.value) {
    onEmptyFieldReset(phone);
  } else {
    onFailure(phone);
    if(phone.value.length> 1 ){
    debouncedFailure('Incorrect phone format')}
  }
}

function onSuccess(value) {
  value.labels[0].style.color = '#0eb5a1';
  value.nextElementSibling.classList.remove('invalid');
  value.nextElementSibling.classList.add('valid');
}

function onFailure(value) {
  value.labels[0].style.color = '#FE3666';
  value.nextElementSibling.classList.add('invalid');
  value.nextElementSibling.classList.remove('valid');
}

function onEmptyFieldReset(value) {
  value.labels[0].style.color = '#020202';
  value.nextElementSibling.classList.remove('invalid');
  value.nextElementSibling.classList.remove('valid');
}

function failureNotify(message) {
  Notiflix.Notify.warning(message, { showOnlyTheLastOne: true });
}

const debouncedFailure = debounce(failureNotify, 800);
