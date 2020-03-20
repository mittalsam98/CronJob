require('dotenv').config()
var cron = require('node-cron');

var accountSid = process.env.TWILIO_ACCOUNT_SID;
var authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken);

function sendMessage(){

    client.messages
    .create({
        body: 'Hi you have just won a precise smile type yor message here http://thesachin.in/',
        from: '+12057724706',
        to: '+919050909461'
    })
    .then(message => console.log(message))
    .catch(err=> console.log("Some error is occured - "+err));

}

cron.schedule('* * * * *', () => {
    sendMessage();
    console.log('Message sent');
  });