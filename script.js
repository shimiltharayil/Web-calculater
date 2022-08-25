function buttonclick(val)
{
    document.getElementById("inner-screen").value=document.getElementById("inner-screen").value+val;
}
function clearscreen()
{
    document.getElementById("inner-screen").value=""
}
function equalCLick()
{
    var text=document.getElementById("inner-screen").value
    var result=eval(text)
    document.getElementById("inner-screen").value=result;
}