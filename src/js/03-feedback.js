
import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  message: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('input', throttle(onFormData, 500));
refs.form.addEventListener('submit', onSubmitForm);

const formData = {};

function onFormData(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

dataFromLocalStorage()

function onSubmitForm(e) {
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

function dataFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (data) {
    refs.email.value = data.email || '';
    refs.message.value = data.message || '';
  } 
};










//===========================================

// const STORAGE_KEY = 'feedback-msg';
// const formData = {};

// const refs = {
//   form: document.querySelector('.feedback-form'),
//   textarea: document.querySelector('.feedback-form textarea')
// }
// refs.form.addEventListener('submit', onFormSubmit);
// refs.textarea.addEventListener('input', throttle(onTextInput, 500));
// refs.form.addEventListener('input', event => {
//   formData[event.target.name] = event.target.value;
// });
// populateTextarea();
// function onFormSubmit(event) {
//   event.preventDefault();
//   event.currentTarget.reset();
//   localStorage.removeItem(STORAGE_KEY);
// }
// function onTextInput(event) {
//   const message = event.target.value;
// localStorage.setItem(STORAGE_KEY,message)
// }
// function populateTextarea() {
//   const savedMassage = localStorage.getItem(STORAGE_KEY);
//   if (savedMassage) {
//     refs.textarea.value=savedMassage
//   }
// }