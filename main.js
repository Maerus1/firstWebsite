var pics = document.querySelector("#pics");

var picArray = [];
picArray[0] = "url('dcml1.jpg')";
picArray[1] = "url('bioshock_rapture.png')";
picArray[2] = "url('Bioshock_gameplay-screen.jpg')";
var increase = 0;
pics.backgroundImage = picArray[increase];
pics.addEventListener("click", clickHandler, false);

function clickHandler()
{
	if(increase == 2)
	{
		increase = 0;
	}
	increase++;
	pics.backgroundImage = picArray[increase];
}