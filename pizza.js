 function show()
 {
pn.innerHTML=pizza.value
pimg.src=pizza.value+".png"

if(pizza.value=="tamato pizza")
{
    pprice.innerHTML="140"
    fn.color="red"
}

else if(pizza.value=="onion")
{
     pprice.innerHTML="150"
}

else if(pizza.value=="margetta pizza")
{
     pprice.innerHTML="260"
     fn.color="orange"
}

else if(pizza.value=="cheese pizza")
{
 }    pprice.innerHTML="560"

}
function getprice()
{
  var x=pprice.innerHTML*qty.value
  amt.innerHTML=x
  }

