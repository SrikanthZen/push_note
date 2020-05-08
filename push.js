var push = require('web-push')

/* for below keys first we need to do like this 
let vapidKeys = push.generateVAPIDKeys();

console.log(vapidKeys); 

then run "node push.js" command in terminal
 after you will get publivKey and privateKey in consoloe 
*/

let vapidKeys = {
    publicKey: 'BG3OWS4yh-h1B_ETMQBeFBkbksorZUF2c67T_i4PCmVPyichjwK9tPsiDkLszdcUyIssNL_aR7DbLg-waflTB4s',
    privateKey: 'hNj6czKgWI1gBZoi7TIJx8hCyGDrRX75IAoiWhJv8b4'
}

push.setVapidDetails('mailto :srikanth@zenwork.com', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/c5f5UExHYvo:APA91bGxZqUUVEIhYNgTs1JgdA2SvBaEYZlZSHUrQJjjvea2kA9homKhz0XZbGHKURhblYJwIe2wWSBQqZlKDaVsvT9MAGZlNxRxwbD59F86EtsLrDNCOKSRAdMFa0ct7tl94pugqde0",
    "expirationTime": null,
    "keys": {
        "p256dh": "BNnCABRYKcgXmkTJgwvREz07mCKxxWh2WSTWR_MqLfNbNIm3q8dSUk-oHJc-6ILBJ3l7x0W52P4mEtivKUn2r7U",
        "auth": "mRyUN8IEiXtrDsY5qVOHZw"
    }
};

push.sendNotification(sub, 'test message')