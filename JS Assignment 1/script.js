let year = prompt("Enter any Year");
if(year%400===0)
{
    console.log("This year is a leap year");
}
else
{
    if (year%4===0) {
        console.log("this is a leap year");
    }
    else
    {
        console.log("this is not a leap year");
    }
}
