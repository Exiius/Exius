function addNumbers() 
{
  let num1 = document.getElementById("n1").value;
  let num2 = document.getElementById("n2").value;
  ans = parseInt (num1) + parseInt (num2);
  document.getElementById("result").value = ans;
  
}
function subtractNumbers() 
{
  let num1 = document.getElementById("n1").value;
  let num2 = document.getElementById("n2").value;
  ans = parseInt (num1) - parseInt (num2);
  document.getElementById("result").value = ans;
  
}
function multiplyNumbers() 
{
  let num1 = document.getElementById("n1").value;
  let num2 = document.getElementById("n2").value;
  ans = parseInt (num1) * parseInt (num2);
  document.getElementById("result").value = ans;
  
}
function divideNumbers() 
{
  let num1 = document.getElementById("n1").value;
  let num2 = document.getElementById("n2").value;
  ans = parseInt (num1) / parseInt (num2);
  document.getElementById("result").value = ans;
  
}
function Clear()
{
  document.getElementById("n1").value = "";
  document.getElementById("n2").value = "";
  document.getElementById("result").value = "";
}
