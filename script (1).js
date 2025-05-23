function calculateTip()
{
   var billAmount = document.getElementById("billAmount").value, serviceQuality = document.getElementById("serviceQuality").value, numPeople = document.getElementById("totalPeople").value;
    
    if (billAmount === "" || serviceQuality == 0) 
    {
        window.alert("Please enter value!");
        return;
    }
    
    if(numPeople === "" || numPeople <= 1) 
    {
        numPeople = 1;
        document.getElementById("each").style.display = "none";
    } 
    else 
    {
         document.getElementById("each").style.display = "block";
    }
    

    var total = (billAmount * serviceQuality) / numPeople;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    document.getElementById("totalTip").style.display = "block";    document.getElementById("tip").innerHTML = total;
}

document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";
document.getElementById("calculate").onclick = function(){calculateTip();};