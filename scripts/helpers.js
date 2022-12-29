const loadCSS = (name) => {
  createElement({
    tag: 'link',
    props: {
      rel: 'stylesheet',
      href: `${host}/styles/${name}.css`,
    },
    append: document.head,
  });
};

const loadJS = (name) => {
  createElement({
    tag: 'script',
    props: { src: `${host}/scripts/${name}.js` },
    append: document.body,
  });
};

const createElement = ({ tag, props, append = document.body }) => {
  const e = document.createElement(tag);
  Object.entries(props).forEach(([p, v]) => (e[p] = v));
  append.appendChild(e);
};

const $ = (ref1, ref2) => {
  const elements = ref2 ? ref1 : document.querySelectorAll(ref2 ? ref2 : ref1);
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
