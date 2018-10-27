const AWS = require('aws-sdk')
const cognito = new AWS.CognitoIdentityServiceProvider({apiVersion: '2016-04-18'})
const dotenv = require('dotenv');

dotenv.load();

module.exports = {
    getUserAttributes: function(req, res, next) {
        // get user sub from request context
        let userSub = req.apiGateway.event.requestContext.identity.cognitoAuthenticationProvider.split(':CognitoSignIn:')[1];
        let poolId = process.env.COGNITO_USER_POOL_ID;
        let cognitoRequest = {
            UserPoolId: poolId,
            Filter: `sub = "${userSub}"`,
            Limit: 1
        }
        // get attributes for the user who made this request
        cognito.listUsers(cognitoRequest, (err, response) => {
            if (err) {
                // if there was an error, short circuit the request
                res.json({error: err});
            } else if (response.Users.length != 1) {
                // something went wrong with the cognito request...
                res.json({error: "couldn't find the user that made this request"});
            } else {
                console.log(response.Users[0]);
                console.log(response.Users[0].attributes);
                // if the request was successful, attach user object to the request
                // so future middlewares can access user attributes
                req.user = response.Users[0];
                next();
            }
        });
    },

    requiresAdmin: function(req, res) {
        console.log(req.user);
        res.json({user: req.user});
    }
};