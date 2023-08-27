function calculate()
{
	var a=rate.value*qty.value
	if(a>=10000)
	{dp=10
	}
	else
	  {dp=5}

	amt.innerHTML=a
	var d=a*dp/100
	dis.innerHTML=`[${dp}%]`+d
	var n=a-d
	na.innerHTML=n

}