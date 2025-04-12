const apiUrl="https://65p0fz5evl.execute-api.us-east-2.amazonaws.com/default/HiddenTraitor";
const s3Url="https://s3.us-east-2.amazonaws.com/hiddentraitor.ravinmaddhatter.com/temp/";

var gameIdstr = ""
var playerId = ""
var ghost = "TBD"
var gameNumber = 0
function newGame(){
	fetch(apiUrl, {
			method: 'GET',
			headers: {requestsettings:"newGame"}
		})
		.then(response => response.json())
		.then(response => {
			console.log(response)
			gameIdstr=response["gameId"]
			playerId = response["playerId"]
			updateUI()
		})
}
function joinGame(){
	gameIdstr = document.getElementById("gameId").value
	fetch(apiUrl, {
			method: 'GET',
			headers: {requestsettings:"joinGame",
					  GameId:gameIdstr}
		})
		.then(response => response.json())
		.then(response => {
			console.log(response)
			playerId = response["playerId"]
			updateUI()
		})
}
function leaveGame(){
	gameIdstr = document.getElementById("gameId").value
	playerId = document.getElementById("playerId").value
	fetch(apiUrl, {
			method: 'GET',
			headers: {requestsettings:"leaveGame",
					  GameId:gameIdstr,
					  playerId:playerId}
		})
		.then(response => response.json())
		.then(response => {
			console.log(response)
			playerId = ""
			updateUI()
		})
}
function startRound(){
	gameIdstr = document.getElementById("gameId").value
	fetch(apiUrl, {
			method: 'GET',
			headers: {requestsettings:"startRound",
					  GameId:gameIdstr}
		})
		.then(response => response.json())
		.then(response => {
			console.log(response)
			checkGame()
		})
}
function checkGame(){
	gameIdstr = document.getElementById("gameId").value
	playerId = document.getElementById("playerId").value
	fetch(apiUrl, {
			method: 'GET',
			headers: {requestsettings:"getStatus",
					  playerId:playerId,
					  GameId:gameIdstr}
		})
		.then(response => response.json())
		.then(response => {
			console.log(response)
			ghost = response["ghost"]
			gameNumber = response["gamenumber"]
			updateUI()
		})
	
}
var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};
function updateUI(){
	document.getElementById("gameId").value=gameIdstr
	document.getElementById("playerId").value=playerId
	document.getElementById("ghost").innerText=ghost
	document.getElementById("gameNumber").innerText=gameNumber
}