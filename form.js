export class Form {
  constructor(formSelector) {
    this.modalWindow = document.querySelector('.modal-window');
    this.form = document.querySelector(formSelector);
    this.nameInput = this.form.querySelector('input[name="name"]');
    this.emailInput = this.form.querySelector('input[name="email"]');
    this.submitButton = this.form.querySelector('button[type="submit"]');
    this.surname= this.form.querySelector('input[name="surname"]');
    this.date= this.form.querySelector('input[name="birthDate"]');
    this.login= this.form.querySelector('input[name="login"]');
    this.password= this.form.querySelector('input[name="password"]');
    this.confirmPassword= this.form.querySelector('input[name="password-confirm"]');
  }
  checkPasswordMatch() {
    if (this.password.value !== this.confirmPassword.value) {
      alert("Пароли не совпадают");
      return false;
    }
    else {
      this.modalWindow.classList.remove('modal-showed');
      alert("Регистрация прошла успешно");
      return true;
      
    }
  }
  
  formReset() {
    this.form.reset();
  }

}