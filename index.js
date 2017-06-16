var linebot = require('linebot');
var express = require('express');

var bot = linebot({
  channelId: '1520329452',
  channelSecret: '073f6f58110af82260afb8b5add03991',
  channelAccessToken: '56lwzzNQi7me6s1RoybcHKDdoNw+EJanuNeJZ8R9a1DAdryjKPEGTLVmLSRHkk1cTMZMT47FsBCpRNMSW+IO1uQq+GHL1UWYzxz3/5y/0SV7wDG+84eHjHDvZGRl3AWpvXIOCgk8Lhs92WddlLqDpAdB04t89/1O/w1cDnyilFU='
});
bot.on('message', function(event) {
   if (event.message.type = 'text') {
    var msg = event.message.text;
    event.reply(msg).then(function(data) {
      // success 
      console.log(msg);
    }).catch(function(error) {
      // error 
      console.log('error');
    });
   }
});

const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

//因為 express 預設走 port 3000，而 heroku 上預設卻不是，要透過下列程式轉換
var server = app.listen(process.env.PORT || 8080, function() {
  var port = server.address().port;
  console.log("App now running on port", port);
});