function multiply(){
var result = 1;
for(var i=0; i<arguments.length;i++){
	result *= arguments[i];
}
retuen result;

}
function divide(){
	
	var num1= document.getElementById('number1').value;
	var num2= document.getElementById('number2').value;
	var result= num1/num2;
document.getElementById('result').innerHTML=result;
}
window.onload=function(){
	var num1 = document.getElementById('number1').value;
	var num2 = document.getElementById('number2').value;
	document.getElementById('multiply').onclick = function(){
		multiply();
	};
	document.getElementById('divide').onclick= function(){
		divide();
	};
	
};