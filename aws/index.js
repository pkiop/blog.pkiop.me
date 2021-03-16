console.log('Loading function');

exports.handler = function(event, context, callback) {

	console.log(JSON.stringify(event, null, 2));
	event.Records.forEach(function(recode)) {
		console.log(recode.eventID);
		console.log(recode.eventName);
		console.log('DynamoDB Record: %j', recode.dynamodb);
	});
	callback(null, 'message');
}


