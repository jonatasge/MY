window.onload = function () {
  Observer({
    target: document.body,
    config: { attributes: true },
    callback: (m) => {
      document.body.removeAttribute('style');
    },
  });
};
