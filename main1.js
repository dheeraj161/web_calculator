var b1=document.querySelector("#b1");
var b2=document.querySelector("#b2");
var b3=document.querySelector("#b3");
var b4=document.querySelector("#b4");
var b5=document.querySelector("#b5");
var b6=document.querySelector("#b6");
var b7=document.querySelector("#b7");
var b8=document.querySelector("#b8");
var b9=document.querySelector("#b9");
var b0=document.querySelector("#b0");
var add=document.querySelector("#add");
var sub=document.querySelector("#sub");
var mul=document.querySelector("#mul");
var div=document.querySelector("#div");
var input1=document.querySelector("#input1");
var input2=document.querySelector("#input2");
var ans=document.querySelector("#ans");
var output=document.querySelector("#output");
var clear=document.querySelector("#clear");


let in1="";
let in2="";

let x;
let x1;
let x2;
let operation=0;



	//take input
	b1.addEventListener("click", function(){
		if(operation==0){
			in1=in1+"1";
			input1.textContent=in1;
		}
		else{
			in2=in2+"1";
			input2.textContent=in2;
		 }
	});
	b2.addEventListener("click", function(){
		if(operation==0){
			in1=in1+"2";
			input1.textContent=in1;
		}
		else{
			in2=in2+"2";
			input2.textContent=in2;
		}
	});
	b3.addEventListener("click", function(){
		if(operation==0){
			in1=in1+"3";
			input1.textContent=in1;
		}
		else{
			in2=in2+"3";
			input2.textContent=in2;
		}
	});
	b4.addEventListener("click", function(){
		if(operation==0){
			in1=in1+"4";
			input1.textContent=in1;
		}
		else{
			in2=in2+"4";
			input2.textContent=in2;
		}
	});
	b5.addEventListener("click", function(){
		if(operation==0){
			in1=in1+"5";
			input1.textContent=in1;
		}
		else{
			in2=in2+"5";
			input2.textContent=in2;
		 }
	});
	b6.addEventListener("click", function(){
		if(operation==0){
			in1=in1+"6";
			input1.textContent=in1;
		}
		else{
			in2=in2+"6";
			input2.textContent=in2;
		 }
	});
	b7.addEventListener("click", function(){
		if(operation==0){
			in1=in1+"7";
			input1.textContent=in1;
		}
		else{
			in2=in2+"7";
			input2.textContent=in2;
		 }
	});
	b8.addEventListener("click", function(){
		if(operation==0){
			in1=in1+"8";
			input1.textContent=in1;
		}
		else{
			in2=in2+"8";
			input2.textContent=in2;
		 }
	});
	b9.addEventListener("click", function(){
		if(operation==0){
			in1=in1+"9";
			input1.textContent=in1;
		}
		else{
			in2=in2+"9";
			input2.textContent=in2;
		 }
	});
	b0.addEventListener("click", function(){
		if(operation==0){
			in1=in1+"0";
			input1.textContent=in1;
		}
		else{
			in2=in2+"0";
			input2.textContent=in2;
		 }
	});



//operations
add.addEventListener("click", function(){
	operation=1;
});
sub.addEventListener("click", function(){
	operation=2;
});
mul.addEventListener("click", function(){
	operation=3;
});
div.addEventListener("click", function(){
	operation=4;
	
});

//answer
ans.addEventListener("click", function(){
x1=Number(in1);
x2=Number(in2);
if(operation==1){
	x=x1+x2;
}
else if(operation==2){
	x=x1-x2;
}
else if(operation==3){
	x=x1*x2;
}
else{
	x=x1/x2;
}
output.textContent=x;
});



//clear all the data
clear.addEventListener("click", function(){
	in1="";
	in2="";
	operation=0;
	input1.textContent="";
	input2.textContent="";
	output.textContent="0";

});