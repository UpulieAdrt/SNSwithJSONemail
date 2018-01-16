let AWS = require('aws-sdk');
const sns = new AWS.SNS();
exports.handler = function (event, context, callback) {


	callback(null, 'Successfully executed');
	console.log("triggered with existing sns");

	sns.publish({
		Message: 'This is the message content',
		Subject: 'EMAIL_JSON SNS',
		MessageAttributes: {
			'sender': {
				DataType: 'String',
				StringValue: 'upulie'
			},
		},
		MessageStructure: 'String',
		TopicArn: 'arn:aws:sns:us-east-1:480964559519:topic_emailjson'
	}).promise()
		.then(data => {
			// your code goes here

			console.log("Success - published to subscriber ");
		})
		.catch(err => {
			// error handling goes here

			console.log("Error Encountered" ,err);
		});



}