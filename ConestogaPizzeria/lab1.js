function getNumbers(){
var nums=[];
nums.push(document.getElementById('number1').value);
nums.push(document.getElementById('number2').value);
return nums;
}
	
	function showError(messages){
		document.getElementById('errors').classlist.remove('hidden');
		document.getElementById('error').innerHTML=message;
	}
window.onload=function(){
	document.getElementById('multiply').onclick=function(){
		
	var numbers= getNumbers();
	for(var i=0;i<numbers.length;i++){
		if(isNaN(numbers[i])){
			var index = i+1;
			showError("The number " + index + " is not a number!");
			return;
		}
		if(isEmpty(numbers[i])){
			alert('empty');
			return;
		}
		
	}
	
	document.getElementById('multiply').onclick = function(){
		multiply();
	};
	document.getElementById('divide').onclick= function(){
		divide();
	};


	