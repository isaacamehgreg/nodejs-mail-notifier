var notifier = require('../index.js');

var imap = {
  user: "blackgenius9000@gmail.com",
  password: "alechenu",
  host: "imap.gmail.com",
  port: 993, // imap port
  tls: true,// use secure connection
  tlsOptions: { rejectUnauthorized: false },

};

notifier(imap).on('mail',function(mail){console.log(mail);}).start();

