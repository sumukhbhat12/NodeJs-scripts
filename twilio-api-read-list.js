// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
//Set Environment variables in powershell before running the code
//$Env:TWILIO_ACCOUNT_SID="you will get SID in Twilio console"
//$Env:TWILIO_AUTH_TOKEN="This as well"
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);



//client.messages.list({limit: 20}).then(messages => messages.forEach(m => console.log(m.sid)));

const messages = async () => {
    const data = await client.messages.list();
    data.forEach((message) => console.log(message.from));
}

messages();
