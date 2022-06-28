const nodemailer = require('nodemailer');

const MyMetaYachtsConfig = nodemailer.createTransport({
   service: 'gmail',
   auth: {
      user: '. . . . . . . . .',
      pass: '. . . . . . . . .',
   },
});

module.exports = MyMetaYachtsConfig;
