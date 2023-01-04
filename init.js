// const host = 'http://127.0.0.1:8080';
const host = 'https://jonatasgev.github.io/MY';

const styles = ['ads', 'nav', 'settings', 'list', 'list-chapters', 'read'];
const scripts = ['ads', 'nav', 'list-chapters'];

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

styles.forEach(loadCSS);
scripts.forEach(loadJS);
