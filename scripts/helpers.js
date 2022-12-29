const $ = (ref1, ref2) => {
  if (ref2 && typeof ref1 === 'string') return $(`${ref1} ${ref2}`);
  const elements = (ref2 ? ref1 : document).querySelectorAll(
    ref2 ? ref2 : ref1
  );
  if (elements.length > 1) return [...elements];
  return elements[0];
};

const NewObserver = (obs) => new MutationObserver((m) => m.forEach(obs));

const Observer = ({
  callback,
  config = { attributes: true, childList: true, characterData: true },
  target,
}) => {
  return NewObserver(callback).observe(target, config);
};

const debounce = (func, timeout = 300) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};
