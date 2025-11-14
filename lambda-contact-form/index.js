const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = 'PortfolioContacts';

exports.handler = async (event) => {
    try {
        // Parse the body if coming from API Gateway
        const body = JSON.parse(event.body);

        // Define the data to be saved
        const params = {
            TableName: TABLE_NAME,
            Item: {
                // Use a timestamp or UUID for a unique ID
                SubmissionID: Date.now().toString(), 
                name: body.name,
                email: body.email,
                message: body.message,
                timestamp: new Date().toISOString()
            }
        };

        // Save to DynamoDB
        await dynamodb.put(params).promise();

        return {
            statusCode: 200,
            headers: {
                // IMPORTANT: Allows your React app to call this API
                'Access-Control-Allow-Origin': '*', 
            },
            body: JSON.stringify({ message: "Contact form submitted successfully!" })
        };
    } catch (error) {
        console.error("Error submitting data:", error);
        return {
            statusCode: 500,
            headers: { 'Access-Control-Allow-Origin': '*' },
            body: JSON.stringify({ error: error.message })
        };
    }
};