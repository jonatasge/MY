const listChapters = () => {
  const spans = $('.manga-index-header > span');
  (spans?.length > 1 ? spans : [spans]).forEach((span) =>
    span.addEventListener('click', (e) => {
      $(
        e.target.parentElement.parentElement,
        '.manga-index-content > a'
      ).click();
    })
  );
};

document.addEventListener('DOMContentLoaded', () => {
  Observer({
    target: $('#chapters-list'),
    config: { childList: true },
    callback: debounce(listChapters, 100),
  });
});
