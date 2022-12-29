document.addEventListener('DOMContentLoaded', () => {
  $('.section.table-of-contents img').forEach(removeListeners);
  $('.chapter-links a[').forEach(removeListeners);
});

const removeListeners = (element) => {
  const copy = element.cloneNode(true);
  element.parentNode.replaceChild(copy, element);
};
