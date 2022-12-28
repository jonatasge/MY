const styles = [];
const scripts = [];

const host = 'http://127.0.0.1:8080' || 'https://jonatasgev.github.io/MY';

document.querySelector('head').insertAdjacentHTML(
  'beforeend',
  styles.reduce(
    (r, name) => `${r}
    <link rel="stylesheet" href="${host}/styles/${name}.css" />`,
    ''
  )
);

document.querySelector('body').insertAdjacentHTML(
  'beforeend',
  styles.reduce(
    (r, name) => `${r}
    <script src="${host}/scripts/${name}.js" />`,
    ''
  )
);
