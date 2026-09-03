const dialog = document.querySelector('.lightbox');
const dialogImage = dialog?.querySelector('img');
const closeButton = dialog?.querySelector('.lightbox-close');

document.querySelectorAll('.gallery-open').forEach((button) => {
  button.addEventListener('click', () => {
    if (!dialog || !dialogImage) return;
    dialogImage.src = button.dataset.full;
    dialogImage.alt = button.dataset.alt || '';
    dialog.showModal();
  });
});

closeButton?.addEventListener('click', () => dialog.close());
dialog?.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});
