function fillstate()
{   removeOptions(state)
	switch(country.selectedIndex)
	{
		case 1:
		      var india=["Madhya Praadesh","Uttar Pradesh"]
		      filldd(india,state)
		      break;

		case 2:
		      var pak=["Baluchistan","sindh"]
		      filldd(pak,state)
		      break;
}

}

function fillcity()
{ removeOptions(city)
  switch(country.selectedIndex)
  {
	  case 1:
	        switch(state.selectedIndex)
	        {  case 1:
	                 var mp=["Gwalior","Bhopal","Datia"]
	                 filldd(mp,city)
	                 break

	           case 2:
			   	    var up=["Kanpur","Agra","Lucknow"]
			   	    filldd(up,city)
	                break
		  }
		  break

	  case 2:
	       switch(state.selectedIndex)
		   	        {  case 1:
		   	                var b1=["xyz","pqr","abc"]
		   	                filldd(bl,city)
		   	                 break

		   	           case 2:
		   			   	    var mp=["karachi","JJ","TT"]
		   			   	    filldd(mp,city)
		   	                break
		  }

  }



}


function filldd(arr,dd)
{
	for (i=0;i<arr.length;i++)
			{
				var opt=document.createElement("Option")
				opt.text=arr[i]
		    	dd.add(opt);
             }
}

function removeOptions(dd)
{
	for(j=dd.options.length-1;j>=1;j--)
	{
	   dd.remove(j)
    }

}