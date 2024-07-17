function fibonacci(num) {
// your code here
	let a = 0;
	let b = 1;
	let c ;

	for(let i = 3; i<=num; i++){
		c = a + b;
		a = b;
		b = c;
		
	}
	return num === 1 ? 0 : b;
}

module.exports = fibonacci;
