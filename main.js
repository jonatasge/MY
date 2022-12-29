const host = 'https://jonatasgev.github.io/MY';

const createElement = ({ tag, props, append = document.body }) => {
  const e = document.createElement(tag);
  Object.entries(props).forEach(([p, v]) => (e[p] = v));
  append.appendChild(e);
};

['scripts/helpers.js', 'init.js'].forEach((name) =>
  createElement({
    tag: 'script',
    props: {
      src: `${host}/${name}`,
    },
    append: document.body,
  })
);
