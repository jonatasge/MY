const listChapters = () => {
  const spans = $('.manga-index-header > span');
  (spans?.length > 1 ? spans : [spans]).forEach((span) => {
    const a = $(
      span.parentElement.parentElement,
      '.manga-index-content > a'
    ).cloneNode(true);

    const div = a.firstChild;
    while (div.childNodes.length > 1) div.removeChild(div.lastChild);

    span.parentNode.replaceChild(a, span);
  });
};

document.addEventListener('DOMContentLoaded', () => {
  Observer({
    target: $('#chapters-list'),
    config: { childList: true },
    callback: debounce(listChapters, 100),
  });
});
