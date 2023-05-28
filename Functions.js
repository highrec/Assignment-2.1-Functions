
function newAlert()
{
    confirm("Scramble the Numbers");
}

function upDate()
{   
    var num1 = Math.ceil(Math.random() *10);
    var num2 = Math.ceil(Math.random() *10);
    var sum = num1 + num2;
    if (num1 % 2 == 0 && num1 == num2)
    { 
       document.getElementById("results").innerHTML = "Even and equal - you win" 
    }
    else if (num2 == 8 || sum ==10)
    {
        document.getElementById("results").innerHTML = "I told you that you would lose! LOL!"
    }
    else
       
    {
        document.getElementById("results").innerHTML = ("If requirements are not met, try Again!")
    }
    document.getElementById("num1").innerHTML = "num1 = " + num1;
    document.getElementById("num2").innerHTML = "num2 = " + num2;




}