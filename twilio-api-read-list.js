// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
// $Env:TWILIO_ACCOUNT_SID="AC03f9b927c2da8d0668ff8b4b3eca61b1"
// $Env:TWILIO_AUTH_TOKEN="7b7579816308ce57d4aa3b4804c9bea9"
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);



//client.messages.list({limit: 20}).then(messages => messages.forEach(m => console.log(m.sid)));

const messages = async () => {
    const data = await client.messages.list();
    data.forEach((message) => console.log(message.from));
}

messages();
