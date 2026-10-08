class Form {
  constructor(formSelector) {
    this.form = document.querySelector(formSelector);
    this.nameInput = this.form.querySelector('input[name="name"]');
    this.emailInput = this.form.querySelector('input[name="email"]');
    this.messageInput = this.form.querySelector('textarea[name="message"]');
    this.submitButton = this.form.querySelector('button[type="submit"]');
  }
}