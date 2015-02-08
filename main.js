var pics = document.querySelector("#pics");

var picArray = [];
picArray[0] = "url('bioshock_rapture.png')";
picArray[1] = "url('dcml1.jpg')";
picArray[2] = "url('Bioshock_gameplay-screen.jpg')";
var increase = 0;


function clickHandler()
{
	console.log(picArray[increase]);
	if(increase == 2)
	{
		increase = -1;
	}
	increase++;
	pics.style.backgroundImage = picArray[increase];
}