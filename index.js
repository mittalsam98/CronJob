var cron = require('node-cron');
 
var accountSid = process.env.TWILIO_ACCOUNT_SID;
var authToken = process.env.TWILIO_AUTH_TOKEN;

cron.schedule('* * * * *', () => {
    console.log('running every minute);
  });