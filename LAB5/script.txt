
function f1()
{
var currentdate = new Date(); 
var datetime = "Last Sync: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

document.getElementById("r1").innerHTML=datetime;
}
function f2()
{

 
document.getElementById("r2").innerHTML=window.location.href;
}
function f3()
{	binary=document.getElementById("tb3").value;
	var digit = parseInt(binary, 2);
	document.getElementById("r3").innerHTML=digit;
}

function f7()
{
	if(document.getElementById("dexterTheLumberjack").style.backgroundColor=="green")
	{document.getElementById("dexterTheLumberjack").style.backgroundColor = "red";}
	else
		{document.getElementById("dexterTheLumberjack").style.backgroundColor = "green";}
	
}