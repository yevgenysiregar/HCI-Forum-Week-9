function digitalDecipher(message, key){
	for(let i = 0; i < message.length; i++){
	    message[i] -= parseInt(key.toString()[i % key.toString().length]);}
	const alphabetLetters = "abcdefghijklmnopqrstuvwxyz";
	var decipher = "";
	for(let i = 0; i < message.length; i++){
		decipher += alphabetLetters[message[i] - 1];}
	return decipher;
}

console.log(digitalDecipher([10, 12, 17, 24, 11, 10, 23, 16, 23, 5, 20] , 7023)) 
console.log(digitalDecipher([14, 30, 11, 1, 20, 17, 18, 18], 1990)) 
console.log(digitalDecipher([10, 4, 1, 3, 9, 20], 100)) 