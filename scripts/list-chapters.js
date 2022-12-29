const listChapters = () => {
  const spans = $('.manga-index-header > span');

  (spans?.length > 1 ? spans : [spans]).forEach((span, i) => {
    let as = $(span.parentElement.parentElement, '.manga-index-content > a');
    if (!Array.isArray(as)) as = [as];

    const linksWrap = document.createElement('div');
    linksWrap.classList.add('links-wrap');

    as.forEach((_a) => {
      const a = _a.cloneNode(true);
      const div = a.firstChild;
      while (div.childNodes.length > 1) div.removeChild(div.lastChild);
      linksWrap.appendChild(a);
    });

    span.parentNode.replaceChild(linksWrap, span);
  });
};

document.addEventListener('DOMContentLoaded', () => {
  Observer({
    target: $('#chapters-list'),
    config: { childList: true },
    callback: debounce(listChapters),
  });
});
