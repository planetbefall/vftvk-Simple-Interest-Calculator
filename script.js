function compute()
{
    var principal = document.getElementById("principal").value;

    //Check to see if principal has positive, 0, or negative value (needs positive to work)
   if(principal < 1){
       alert("Enter a positive value");
       document.getElementById("principal").focus();
       return false;
   }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    //Calculate interest
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years) ;
    var amount = interest
    //Display result, use <mark> to highlight numbers in the result
    document.getElementById("result").innerHTML="If you deposit <mark>"+principal+"</mark>,\<br\>at an interest rate of <mark>"+rate+"</mark>%\<br\>You will receive an amount of <mark>"+amount+"</mark>,\<br\>in the year <mark>"+year+"</mark>.\<br\>"

}
// For value change of percentage to the right of the slider bar when it is moved left or right.
function updateRate() 
{
    var ratenew = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=+ratenew+"%";
}

        