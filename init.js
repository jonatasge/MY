const host = 'https://jonatasgev.github.io/MY';

const styles = ['ads', 'nav', 'settings', 'list', 'read'];
const scripts = ['ads', 'nav', 'read'];

styles.forEach(loadCSS);
scripts.forEach(loadJS);
