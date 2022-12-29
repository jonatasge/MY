const removeListeners = (element) => {
  const copy = element.cloneNode(true);
  element.parentNode.replaceChild(copy, element);
};

$('img').forEach(removeListeners);
$('.chapter-links a').forEach((a) => {
  if (!a.id) removeListeners(a);
});
