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


  console.log('|');
  console.log('|');
  console.log('|      YAHOOOO !!!!  ');
  console.log('|');
  console.log('|');
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