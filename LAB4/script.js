

function f1()
{
	s=document.getElementById("tb1").value;
	nb1=document.getElementById("nb1").value;
	d='';
	for (var i=0;i<nb1;i++) {
		
		d=d.concat(s.charAt(i));
	}

	document.getElementById("r1").innerHTML = d;
}
function f2()
{
	s=document.getElementById("tb2").value;
  	document.getElementById("r2").innerHTML = s.charAt(0).toUpperCase() + s.slice(1);
	
}
function f3()
{	
	s=document.getElementById("tb3").value;
	nb3=document.getElementById("nb3").value;
	c=s.split(" ");
	d='';
	for (var i =0; i<nb3;i++) {
		if (typeof c[i] == "undefined") 
			{break}
		d=d.concat(c[i]);
		d=d.concat(" ");
	}
	document.getElementById("r3").innerHTML = d;

}
function f4()
{
	a=document.getElementById("tb4a").value;
	b=document.getElementById("tb4b").value;

	if(a<b){document.getElementById("r4").innerHTML=b;};
	if(a>b){document.getElementById("r4").innerHTML=a;};
	if(a==b){document.getElementById("r4").innerHTML="a=b";}
	
}
function f5(){
	d='';
	for(var i=0;i<21;i++)
	{
		if(i%2==1){console.log(i+' este impar')};
		if(i%2==0){console.log(i+' este par')};
	}



	
}
function f6()
{	
	nb6=document.getElementById("nb6").value;
	
	for(var num=1;num<nb6;num++)
	{
		if(isPrime(num)==true){console.log(num+" este prim");}

	}
	
}

function isPrime(num)
{
	if(num==1){console.log('1 este prim');}
	else{
	for(var i = 2; i < num; i++)
    		if(num % i === 0) return false;
  		return num > 1;
  	}
}



function f7()
{
	s=document.getElementById("tb7").value;
	d=s.split(";");
	tablou=d.map(parseFloat);
	var suma=0.0;
	var min=10000.0;
	var max=0.0;
	for (var i = tablou.length - 1; i >= 0; i--) {
		suma=suma+tablou[i]
		m_aritmetica=suma/tablou.length;
		if(tablou[i]<min){min=tablou[i];};
		if(tablou[i]>max){max=tablou[i];};
	}
	document.getElementById("r7").innerHTML="Tablou vechi: "+d +"\n Tablou nou: "+tablou;
	console.log("SUMA: "+suma);
	console.log("MEDIA ARITMETICA: "+m_aritmetica);
	console.log("MIN: "+min);
	console.log("MAX: "+max);

}