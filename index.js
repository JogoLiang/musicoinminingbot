var linebot = require('linebot');
var express = require('express');
var getJSON = require('get-json');

var bot = linebot({
  channelId: '1520329452',
  channelSecret: '073f6f58110af82260afb8b5add03991',
  channelAccessToken: '56lwzzNQi7me6s1RoybcHKDdoNw+EJanuNeJZ8R9a1DAdryjKPEGTLVmLSRHkk1cTMZMT47FsBCpRNMSW+IO1uQq+GHL1UWYzxz3/5y/0SV7wDG+84eHjHDvZGRl3AWpvXIOCgk8Lhs92WddlLqDpAdB04t89/1O/w1cDnyilFU='
});



    bot.on('message', function(event) {
    if (event.message.type = 'text') {
        var msg = event.message.text;
        var Result = '';
        var replyMsg = '';
        if(msg.indexOf('小咖 MC查詢 ') != -1){
        console.log('查詢');
          var search = msg.split(" ");
          //console.log(search[2]);
           Result = _getJSON(search[2]);   
        //    console.log('Log:'+Result);       
        }else{
          Result = msg;
        }
        
        event.reply(Result).then(function(data) {
        // success 
        //console.log(Result);
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


function _getJSON(code) {
  
  getJSON('http://gpumine.org:8580/api/accounts/'+code, function(error, response) {
    console.log('resLog:'+response) ;
    var aa = (response.currentHashrate/1000000).toFixed(6);
    console.log(aa)    
    var result = '現在挖礦均速(30分):'+aa;
    return result;
  });
 
}

// function CoinFormate(coinValue)
// {

// }