const styles = ['ads', 'nav'];
const scripts = ['nav'];

const host = 'http://127.0.0.1:8080' || 'https://jonatasgev.github.io/MY';

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
