var colors = require('colors');
var fs = require('fs');

exports.info = function(msg){
	var tsText = timestamp.getTimestamp();
	console.log(colors.grey(tsText) + ' [INFO] ' + msg);
	writeToLog(tsText + ' [INFO] ' + msg);
}

exports.warn = function(msg){
	var tsText = timestamp.getTimestamp();
	console.log(colors.grey(tsText) + colors.yellow(' [WARN] ' + msg));
	writeToLog(tsText + ' [WARN] ' + msg);
}

exports.err = function(msg){
	var tsText = timestamp.getTimestamp();
	console.log(colors.grey(tsText) + colors.red(' [ERR]  ' + msg));
	writeToLog(tsText + ' [ERR]  ' + msg);
}

function writeToLog(msg){
	if(true){
			fs.appendFile('logs/' + timestamp.getLogStamp() + '.log', msg + '\n', function(err){});
	}
}

function getTimestamp(){
  var now = new Date(),
    	date = [now.getFullYear(), now.getMonth() + 1, now.getDate()],
      time = [now.getHours(), now.getMinutes(), now.getSeconds()];

	for (var i = 1; i < 3; i++) {
	  if (time[i] < 10) {
	    time[i] = "0" + time[i];
	  }
	}

  return date.join("-") + " " + time.join(":");
}

function getLogStamp(){
	var now = new Date(),
	    date = [now.getFullYear(), now.getMonth() + 1, now.getDate()];

	return date.join(".")
}
