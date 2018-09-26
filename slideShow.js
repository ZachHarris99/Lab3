var myImage = document.getElementById("myIm");
var images = ["http://www.visitroseburg.com/wp-content/uploads/2015/01/CraterLake-1.png", "https://assets.bigcartel.com/product_images/164550868/Multnomah_3848.jpg", "https://traveloregon.com/wp-content/uploads/2016/10/MtHoodVillages-07-2000.jpg", "https://i.ytimg.com/vi/1osDyTkf3II/maxresdefault.jpg", "https://res.cloudinary.com/simpleview/image/fetch/c_fill,f_auto,h_452,q_75,w_982/http://res.cloudinary.com/simpleview/image/upload/v1467306102/clients/lanecounty/sweet_creek_falls_autumn_9cc221ee-49ca-44bf-bc40-7261510ce7c8.jpg"]
var num = 0;
function nextImage() {
	num++;
	if (num == 5)
	{
		num = 0;
	}
	myImage.src = images[num];
}
function prevImage() {
	num--;
	if (num == -1)
	{
		num = 4;
	}
	myImage.src = images[num];
}
