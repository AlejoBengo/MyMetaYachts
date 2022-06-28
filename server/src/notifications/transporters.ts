const MyMetaYachtsConfig = require('./configurations');

export const transportator = (MailOptions: any) => {
   MyMetaYachtsConfig.sendMail(MailOptions, (err: any, info: any) => {
      if (err) {
         console.log(err);
      } else {
         console.log('Email sent to: ', info.accepted + '.');
      }
   });
};
