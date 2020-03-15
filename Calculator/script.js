var calculator_object = {
	'display-str':"0",
	'curr-val': 0,
	'saved-val': 0,
	'mem-val': 0,
	'arith-pressed': false;
	'arith-op': ""
};

document.addEventListener("DOMContentLoaded", function(event) { 
	const calculator = document.querySelector(".calc");
	const nums = document.querySelectorAll(".num");
	const onc = document.querySelector(".on-clear");
	const arith = document.querySelectorAll(".arith");
	const calculator_display = document.querySelector(".calc-display");
	const equal = document.querySelector(".equal");

	console.log(nums);
	console.log(calculator_display);

	function updateDisplay(){
		calculator_display.innerHTML = calculator_object['display-str'];
	}

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
    		updateDisplay();
  		});
	});

	//Clear button functionality
	onc.addEventListener("click", (event) => {
		console.log("clear");
		calculator_object['curr-val'] = 0;
		calculator_object['display-str'] = "0";
		calculator_object['saved-val'] = 0;
		calculator_object['arith-pressed'] = false;
		calculator_object['arith-op'] = "";
		updateDisplay();
	
	});

	//Adding arithmetic functionality
	arith.forEach((btn) => {
  		btn.addEventListener("click", (event) => {
  			console.log("arith");
  			calculator_object['saved-val'] = calculator_object['curr-val'];
  			console.log(btn.innerHTML);
  			switch(btn.innerHTML){
  				"%":
  				"/":
  				"X":
  				"-":
  				"+":
  			}

  		});
	});

	equal.addEventListener("click", (event) =>{
		console.log("equal");
		if(calculator_object['arith-pressed']){
			calculator_objectp['curr-val'] += calculator_object['saved-val'];
		}

	})



});



