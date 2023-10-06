let user=parseInt(prompt("Enter a number"));

let ans=function(){
	
	let find=user-13;
	
	console.log(find);
	
	if(find>13){
		
		document.write(find*find);
		
	}
	
	else{
		
		document.write("Error");
		
	}
	
}

ans()