var express = require('express');
// var router = express.Router();
var app = express();

var Web3 = require('web3');

web3 = new Web3(new Web3.providers.HttpProvider("http://35.154.153.206:8001"));

eth = web3.eth;

personal = web3.personal;

app.get('/sendTxn',function(req,res){
   eth.sendTransaction({from:eth.accounts[4],to:eth.accounts[5],value:1000},function(err,data){
     if(!err){
       res.send("ok");
     }
   })
});

app.listen(3000, function() {
    console.log('tseting on 3000');
    personal.unlockAccount(eth.accounts[4],"tx",0);
});
