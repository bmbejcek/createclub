const fetch = require("node-fetch");
var async = require('async');

exports.handler = async (event, context, callback) => {
  try{
  const body = JSON.parse(event.body)
  fetch("https://us-central1-create-more.cloudfunctions.net/welcome-email-public?email="+encodeURIComponent(body.email));
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
