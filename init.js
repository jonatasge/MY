const host = 'http://127.0.0.1:8080' || 'https://jonatasgev.github.io/MY';

const styles = ['ads', 'nav', 'settings', 'list', 'read'];
const scripts = ['ads', 'nav', 'read'];

styles.forEach(loadCSS);
scripts.forEach(loadJS);
