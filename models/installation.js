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
      alert: 'DEALER DISCOUNT ON NOW!!!!!!!',
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

  setTimeout(postDealerNotification,20000);
  next();
//  var result = ctx.result = {};
//
//
//  user.transactions(function(err, transactions) {
//    result.email = user.email;
//    result.firstName = user.firstName;
//    result.lastName = user.lastName;
//    result.transactions = transactions;
//    result.balance = calculateBalance(transactions);
//
//    transaction.find({
//      where: {
//        userId: user.id,
//        time: {gt: Date.now() - ONE_MONTH}
//      }
//    }, function(err, transactions) {
//      result.totalEarned = transactions
//        .filter(is('credit'))
//        .reduce(sum, 0);
//      result.totalSpent = transactions
//        .filter(is('debit'))
//        .reduce(sum, 0);
//
//    });
//  });
});