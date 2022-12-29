const styles = ['ads', 'nav', 'settings'];
const scripts = ['helpers', 'ads', 'nav'];

const host = 'https://jonatasgev.github.io/MY';

styles.forEach((name) => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = `${host}/styles/${name}.css`;
  document.head.appendChild(link);
});

scripts.forEach((name) => {
  const script = document.createElement('script');
  script.src = `${host}/scripts/${name}.js`;
  document.body.appendChild(script);
});
