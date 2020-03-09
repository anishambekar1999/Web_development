var b=document.getElementsByClassName("boxes");
var hs=document.getElementsByTagName("h1");
var jm=document.getElementsByClassName("jumbotron");

var colors=[];
var tcolors=6;
play();

function play(){
	fillcolors();
	for(var i=0;i<tcolors;i++)
	{
		b[i].style.backgroundColor=colors[i];
	}
	if(tcolors===3)
	{
		for(var i=3;i<6;i++)
		{
			b[i].style.backgroundColor="rgb(0, 0, 0)";
		}
	}
	var j=Math.floor(Math.random() * tcolors);
	hs[0].textContent=colors[j];
}
function fillcolors(){
	for(var i=0;i<tcolors;i++)
	{
		var r=Math.floor(Math.random() * 256);
		var g=Math.floor(Math.random() * 256);
		var b=Math.floor(Math.random() * 256);
		var color="rgb("+r+", "+g+", "+b+")";
		colors.push(color);
	}
}

var brand=document.getElementsByClassName("navbar-brand");
brand[0].addEventListener("click",function(){
	colors=[];
	play();
	jm[0].style.backgroundColor="rgb(0, 0, 0)";
});


var links=document.getElementsByClassName("nav-link");
links[0].addEventListener("click",function(){
	colors=[];
	tcolors=3;
	play();
	jm[0].style.backgroundColor="rgb(0, 0, 0)";
});

links[1].addEventListener("click",function(){
	colors=[];
	tcolors=6;
	play();
	jm[0].style.backgroundColor="rgb(0, 0, 0)";
});

for(var i=0;i<tcolors;i++)
{
	b[i].addEventListener("click",function(){
		if(this.style.backgroundColor===hs[0].textContent)
		{
			for(var j=0;j<tcolors;j++)
			{
				b[j].style.backgroundColor=this.style.backgroundColor;
				jm[0].style.backgroundColor=this.style.backgroundColor;
			}
		}
		else
		{
			this.style.backgroundColor="rgb(0, 0, 0)";
		}
	});
}