const usersBase=[

]

const footerForm = document.getElementById('footer__form');
footerForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  console.log(data);

});

const regButton = document.querySelector('.auth');
const modalWindow = document.querySelector('.modal-window');
const modalOverlay = document.querySelector('.modal-overlay');
regButton.addEventListener("click",() => {
  modalWindow.classList.add('modal-showed');
  modalOverlay.classList.add('modal-showed');
})

const modalCloseButton = document.querySelector('.modal-close-button');
modalCloseButton.addEventListener('click', () => {
  modalWindow.classList.remove('modal-showed');
  modalOverlay.classList.remove('modal-showed');
});

const modalForm = document.querySelector('.modal-form');
modalForm.addEventListener('submit', function(event) {
  event.preventDefault();
  if(modalForm.elements.password.value === modalForm.elements["password-confirm"].value){
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    data.crearedOn = new Date();
    usersBase.push(data);
    console.log(usersBase);
    const headerProfile = document.querySelector('.header__profile');
    const headerButtons = document.querySelector('.header__buttons');
    headerProfile.textContent = data.name;
    headerProfile.classList.add('header__profile-showed');
    headerButtons.classList.add('header__buttons-none');
    modalWindow.classList.remove('modal-showed');
    modalOverlay.classList.remove('modal-showed');
  }
  else{
    alert("Пароли не совпадают");
  }

})