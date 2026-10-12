export class Modal {
  constructor(modal_id) {
    this.modal_id = modal_id;
    this. modal=document.getElementById(modal_id);
    this.closeButton = this.modal.querySelector('.modal-close-button');
    this.closeButton.addEventListener('click', () => {
      this.closeModal();
    });
  }

  openModal() {
    this.modal.classList.add('modal-showed');
  }
  closeModal() {
    this.modal.classList.remove('modal-showed');
  }
  isOpen() {
    return this.modal.classList.contains('modal-showed');
  }
}