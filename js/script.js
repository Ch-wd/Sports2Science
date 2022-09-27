x = document.querySelector(".fade-in-effect");
y = document.querySelector(".nav-items");
z = document.querySelector(".header-container");
logo = document.querySelector(".logo-container");
title = document.querySelector(".title-container");
function expose()  {
	x.classList.add("start-effect");
};

function dropdown(){
	y.style.display= "block";
};

window.onscroll = function(){
	if(window.scrollY > 0){
		z.style.backgroundColor = "#35353591";
		z.style.height = "100px";
		logo.style.scale = "0.5";
		// title.style.scale = "0.8";
	}
	else
	{
		z.style.backgroundColor = "initial";
		logo.style.scale = "initial";
		z.style.height = "intial";
		// title.style.scale = "initial";
	}
};