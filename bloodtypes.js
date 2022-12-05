const bloodType = ["O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-"];
function canGiveBlood(a, b){
	if (b[0] == "B" && a[0] == "A"){
		return false;
	}
	else if(b[0] == "O" && a[0] != "O"){
		return false;
	}
	else if(b[0] == "A" && b[1] != "B" && (a[0] == "B" || (a[0] == "A" && a[1] == "B"))){
        	return false;
	}
	else if(a[a.length - 1] == "+" && b[b.length - 1] == "-"){
		return false;
	}
	else if(!bloodType.includes(a) || !bloodType.includes(b)){
		return false;
	}
	else{
		return true;
	}
}

console.log(canGiveBlood("O+", "A+"));
console.log(canGiveBlood("A-", "B-"));
console.log(canGiveBlood("A-", "AB+"));	 