const fetch = require("node-fetch");
const { GoogleSpreadsheet } = require('google-spreadsheet');
var async = require('async');

exports.handler = async (event, context, callback) => {
  try{
  const doc = new GoogleSpreadsheet(process.env.EMAIL_SPREADSHEET);
  await doc.useServiceAccountAuth({
        client_email: process.env.CLIENT_EMAIL,
        private_key: process.env.PRIVATE_KEY.replace(new RegExp("\\\\n", "\g"), "\n")
      });
  await doc.loadInfo();  
  const sheet = doc.sheetsByIndex[0];
  const body = JSON.parse(event.body)
  const addedRow =  sheet.addRow({
      timestamp: new Date().getTime(),
      email: body.email
    });
  fetch("https://us-central1-create-more.cloudfunctions.net/welcome-email-public?email="+body.email);
  callback(null, {
          statusCode: 200,
          body: 'success!',
        });
  }
  catch(err) {
    console.log(err)
    callback(null, {
          statusCode: 500,
          body: err.message,
        })
  }
}
