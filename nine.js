function fillcity()
{
	removeDD()
	switch(state.selectedIndex)
	{
		case 1:
		var mp=["Gwalior","Indore","Bhopal","Jablalpur"]
		fillDD(mp)
		break

		case 2:
		var up=["Agra","jhansi","Lucknow","Noida"]
	    fillDD(up)
        break

        case 3:
	    var pb=["Amritsar","Jallandhar","Mohali","Ludhiyana"]
		fillDD(pb)
		break

		case 4:
		var hr=["Rohtak","Sonipat","Panipat","Gurugram"]
		fillDD(hr)
		break
}

}

function fillDD(arr)
{
	for(var i=0;i<arr.length;i++)
			{
				var opt=document.createElement("option")
				opt.text=arr[i]
		    	opt.value=arr[i]
		    	city.add(opt);
             }
}

function removeDD()
{
	for(var k=city.options.length-1;k>=0;k--)
	{
		city.remove(k)
}
}