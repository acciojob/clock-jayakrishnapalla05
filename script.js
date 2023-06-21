//your JS code here. If required.
function update()
	{
		let element=document.getElementById("timer");
		let date=new Date();
		element.textContent=date.toLocaleString();
		
	}
setInterval(update, 1000);
