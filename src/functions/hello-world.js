// /functions/hello-world.js

exports.handler = (event, context, callback) => {
	  console.log(event)
  return {
    statusCode: 200,
    body: 'Hello world!',
  };
};