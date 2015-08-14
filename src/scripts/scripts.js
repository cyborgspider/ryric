(function(){

var songList = [];

//This function returns a string (such as 3:30) into milliseconds
function minutesToMilli(time){
	return (Number(time.split(':')[0])*60+Number(time.split(':')[1]))*1000;
}

function displayLyrics(arr, index){
	console.log(arr[0].lyrics[index]);
	console.log(arr[0].timestamp[index]);
}
function generateTimestamps(arr){
	return arr[0].timestamp.map(function(timestamp){
 		return minutesToMilli(timestamp);
	});
}

function createTimeouts(index, timestamp){
	setTimeout(function(){console.log(index);}, timestamp);
}

function init(){
	// var len = songList[0].lyrics.length,
	// 		i = 0;

	// while (i < len){
 //   	createTimeouts(songList[0].lyrics[i], minutesToMilli(songList[0].timestamp[i]));
 //   i++;
 // }
	$.ajax({
		url:'json/songs.js',
	})
		.done(function(data){
			console.log(data);
	})
		.fail(function(){
			console.log('failed');
	});
}

init();
})();
