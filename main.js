function image_slider(){
document.addEventListener("DOMContentLoaded", function(){
			
	var fadeComplete= function(e) {stage.appendChild(arr[0]); };
			
	var stage= document.getElementById("image-slider");
	var arr= stage.getElementsByTagName("a");
			
	for (var i=0; i<arr.length; i++)
	{
		arr[i].addEventListener("animationend", fadeComplete, false);
	}
}, false);
}


/*const btn = document.querySelector('.btn');

btn.onmousemove = function(e){
	const x = e.pageX-btn.offsetLeft;
	const y = e.pageY - btn.offsetTop;
	
	btn.style.setProperty('--x', x + 'px');
	btn.style.setProperty('--y', y + 'px');*/
	

function thankUser()
{
	alert("Thank you for your submission");
}

