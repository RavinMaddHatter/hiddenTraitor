const s3Url="https://s3.us-east-2.amazonaws.com/hiddentraitor.ravinmaddhatter.com/temp/";

imagePath = window.location.hash.substring(1);
document.getElementById("imgbox").src = s3Url+imagePath+"?"+Math.floor(Math.random() * 10000)
document.getElementById("imgboxBottom").src = document.getElementById("imgboxBottom").src = s3Url+imagePath+"?"+Math.floor(Math.random() * 10000)

addEventListener("hashchange", (event) => {
	imagePath = window.location.hash.substring(1);
	refreshImage()
	});

function refreshImage(){
	document.getElementById("imgbox").src = document.getElementById("imgbox").src = s3Url+imagePath+"?"+Math.floor(Math.random() * 10000)
	setTimeout(function() { 
		document.getElementById("imgboxBottom").src = document.getElementById("imgboxBottom").src = s3Url+imagePath+"?"+Math.floor(Math.random() * 10000)
	}, 1000);
}

const taskScheduler = setInterval(refreshImage, 10000);