const host = 'https://jonatasgev.github.io/MY';

const loadCSS = (name) => {
  loadFile({
    tag: 'link',
    props: {
      rel: 'stylesheet',
      href: `${host}/styles/${name}.css`,
    },
    append: document.head,
  });
};

const loadJS = (name) => {
  loadFile({
    tag: 'script',
    props: { src: `${host}/scripts/${name}.js` },
    append: document.body,
  });
};

const loadFile = ({ tag, props, append }) => {
  const e = document.createElement(tag);
  Object.entries(props).forEach((p, v) => (e[p] = v));
  append.appendChild(e);
};

loadFile({
  tag: 'script',
  props: { src: `${host}/modules.js` },
  append: document.body,
});

const init = setInterval(() => {
  if (typeof styles !== 'undefined') {
    styles.forEach(loadCSS);
    scripts.forEach(loadJS);
    clearInterval(init);
  }
}, 100);
