/**
 *
 * Copyright StrongLoop 2014
 *
 * User: seanbrookes
 * Date: 2014-02-13
 * Time: 4:46 PM
 *
 */
var app = require('../app');
var installation = app.models.installation;

installation.afterRemote('create', function(ctx, user, next) {
  // override the result completely
  var Notification = app.models.notification;
  var PushModel = app.models.push;
  var badge = 1;
  function postDealerNotification(){
    console.log('Post Dealer Notification');
    var note = new Notification({
      expirationInterval: 3600, // Expires 1 hour from now.
      badge: badge++,
      sound: 'ping.aiff',
      alert: 'Hot weekend rates on now',
      messageFrom: 'iCars'
    });

    PushModel.notifyById(1, note, function (err) {
      if (err) {
        console.error('Cannot notify %j: %s', 1, err.stack);
        // next(err);
        return;
      }
      console.log('pushing notification to %j', 1);
      //res.send(200, 'OK');
    });
  }

console.log('|---- Start the timer ');

  //setTimeout(postDealerNotification,14000);
  console.log('this is where we would have stared the timer ------- ');
  next();

});