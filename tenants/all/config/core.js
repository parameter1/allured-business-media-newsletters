const emailX = require('./email-x');
const nativeX = require('./native-x');

module.exports = {
  emailX,
  nativeX,
  dpm: {
    emailx: {
      enabled: true,
      useEmailxHref: true,
    },
    content: {
      enabled: true,
    },
  },
};
