const { URL, URLSearchParams } = require('url');

module.exports = ({ url, params = {} }) => {
  try {
    const newUrl = new URL(url);
    const parsed = new URL(url);
    const search = Object.keys(params).reduce((sp, key) => {
      const value = params[key];
      sp.append(key, value);
      return sp;
    }, parsed.searchParams || new URLSearchParams());
    newUrl.search = search;
    return newUrl.toString();
  } catch (e) {
    return url;
  }
};
