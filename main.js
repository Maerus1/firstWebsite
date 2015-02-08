var pics = document.querySelector("#pics");

var picArray;
picArray[0] = "url('http://www.datishop.com.br/media/catalog/product/d/c/dcml1.jpg')";
picArray[1] = "url('http://www.nvnews.net/articles/bioshock_gameplay/images/bioshock_rapture.png')";
picArray[2] = "url('http://stylefavor.com/wp-content/uploads/2012/10/Bioshock_gameplay-screen.jpg')";
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