var calculator_object = {
	'display-str':"0",
	'curr-val': 0,
	'saved-val': 0,
	'mem-val': 0
};

document.addEventListener("DOMContentLoaded", function(event) { 
	const calculator = document.querySelector(".calc");
	const nums = document.querySelectorAll(".num");
	const onc = document.querySelector(".on-clear");
	const arith = document.querySelectorAll(".arith");
	const calculator_display = document.querySelector(".calc-display");

	console.log(nums);
	console.log(calculator_display);


	//Number key functionality
	nums.forEach((btn) => {
  		btn.addEventListener("click", (event) => {
  			console.log("hi");

    		if(calculator_object['curr-val'] == 0 ){
    			calculator_object['display-str'] = btn.innerHTML;
    			calculator_object['curr-val'] = Number(btn.innerHTML);
    		}else{
    			calculator_object['display-str'] += btn.innerHTML;
    			calculator_object['curr-val'] = Number(calculator_object['display-str']);
    		}
    		calculator_display.innerHTML = calculator_object['display-str'];
  		});
	});

	//Clear button functionality
	onc.addEventListener("click", (event) => {
		console.log("clear");
		calculator_object['curr-val'] = 0;
		calculator_object['display-str'] = "0";
		calculator_display.innerHTML = calculator_object['display-str'];
	
	});




});



