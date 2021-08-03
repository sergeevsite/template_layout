document.addEventListener('DOMContentLoaded', () => {
  
  // Modal
  const dataModal = document.querySelectorAll('[data-modal]'),
    dataBtn = document.querySelectorAll('[data-btn]');

  if (dataModal.length > 0 && dataBtn.length > 0) {
    dataModal.forEach((modal) => {
      dataBtn.forEach((button) => {
        button.addEventListener('click', (e) => {
          e.preventDefault();
          if (button.dataset.btn === modal.dataset.modal) {
            modal.classList.add('open');
            document.body.style.overflowY = 'hidden';
          }
          if (button.dataset.close === modal.dataset.modal) {
            modal.classList.remove('open');
          }
        });
      });
      modal.addEventListener('mousedown', (event) => {
        if (event.target.className === 'modal__close' || event.target.dataset.close === modal.dataset.modal || event.target.className === 'modal open') {
          if (modal.classList.contains('open')) {
            modal.classList.remove('open');
            document.body.style.overflowY = 'auto';
          }
        }
      });
    });
  }

})