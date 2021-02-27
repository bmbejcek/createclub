const request = require("request");
var GoogleSpreadsheet = require('google-spreadsheet');
var async = require('async');

exports.handler = (event, context, callback) => {
  var doc = new GoogleSpreadsheet(process.env.EMAIL_SPREADSHEET);
  var sheet;
  const body = JSON.parse(event.body)
  console.log(body)
  var subscriber = JSON.stringify({
        "email_address": body.email,
        "status": "subscribed"
    });
  var options = { method: 'POST',
    url: 'https://us4.api.mailchimp.com/3.0/lists/' + process.env.MAILCHIMP_LIST+ '/members',
    headers:
     { authorization: 'bmbejcek ' + process.env.MAILCHIMP_API_KEY,
     'Content-Type': 'application/json'},
    body: subscriber};
    console.log(options);

  request(options, function (error, response, body) {
    if (error) {
      console.log(error.message)
    }
    else {
      console.log(body)
    };

  });

  async.series([
    function setAuth(step) {
      var creds_json = {
        client_email: process.env.CLIENT_EMAIL,
        private_key: process.env.PRIVATE_KEY.replace(new RegExp("\\\\n", "\g"), "\n")
      }
      doc.useServiceAccountAuth(creds_json, step);
    },
    function getInfoAndWorksheets(step) {
      doc.getInfo(function(err, info) {
        sheet = info.worksheets[0];
        step();
      });
    },
    function addNewRow(step) {
    // google provides some query options
    sheet.addRow({
      email: body.email,
      timestamp: new Date().toString()
    }, function( err, row ){
      console.log(err)
      step();
    });
  }
  ], function(err){
      if( err ) {
        console.log('Error: '+err);
        callback(null, {
          statusCode: 500,
          body: err.message,
        })
      }
      else {
        callback(null, {
          statusCode: 200,
          body: 'success!',
        })
      }
  });
}
