var index = 0;
var isTriangle = false;
var color = ["#e91e63","#00bcd4","#ffeb3b","#129d17","#d736f4","#171010","purple"];
var chShape = document.getElementById("shape");
var chColor = document.getElementById("color");


chShape.addEventListener("click",changeShape);
chColor.addEventListener("click",changeColor);

function changeColor()
{
    document.getElementById("outerDiv").style.backgroundColor=color[index++];
    if(index == 7)
      index = 0;
}

function changeShape()
{
  if(!isTriangle)
  {
    var i = document.getElementsByClassName('innerDiv')[0];
    i.className = "triangle-bottomleft";
    isTriangle = true;
  }
  else
  {
    var i = document.getElementsByClassName("triangle-bottomleft")[0];
    i.className = "innerDiv";
    isTriangle = false;
  }
}