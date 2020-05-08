var push = require('web-push')

let vapidKeys = {
    publicKey: 'BG3OWS4yh-h1B_ETMQBeFBkbksorZUF2c67T_i4PCmVPyichjwK9tPsiDkLszdcUyIssNL_aR7DbLg-waflTB4s',
    privateKey: 'hNj6czKgWI1gBZoi7TIJx8hCyGDrRX75IAoiWhJv8b4'
}

push.setVapidDetails('mailto :srikanth@zenwork.com', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {};

push.sendNotification(sub, 'test message')