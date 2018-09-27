module.exports = function getZerosCount(number, base) {

  //We take the base of the number system N 
  //and factorize it N = p1 ^ q1 * p2 ^ q2 * ... * pk ^ qk
  // Legendre formula to find out how many times pi enters M!
  // The number of trailing zeroes in N factorial in Base B is given by the formulae
  // min(1/p1(n/a + n/(a*a) + ….), 1/p2(n/b + n/(b*b) + ..), …).

var arr = [] // array for prime divisors ;

for(let i = 2; i <= base; i++){
	while(base % i == 0 && base > 1){
		arr.push(i);
		base = base / i;
	}
	if(base/i == 1){
		arr.push(base);
	}
}

var arr2=[];
for (var i = 0; i < arr.length; i++){
	if (arr2[arr[i]]!=undefined) arr2[arr[i]]++;
	else  arr2[arr[i]]= 1;
}

arr2 = arr2.filter(Boolean);

var arr3 = [] // array with the result of the Legendre formula
var count; // counter of zeros
var div; // result of division
var n; // degree of
for( var i = 0; i < arr.length; i++){
	count = 0;
	div = 1; 
	n = 1;
	while(div>=1){
		count = count + Math.floor(number / Math.pow(arr[i], n));
		div = Math.floor(number / Math.pow(arr[i], n)); 
		n++; 
	}

	arr3.push(count);
}
var arr4=[]; // array with the result of the Legendre formula

for (var i = 0; i < arr3.length; i++){
	if (arr3[i] != arr3[i+1]) arr4.push(arr3[i]);
}

var min  = 9999;
var c = 0; // count zeros

for (var i = 0; i < arr4.length; i++){
	c =  arr4[i] / arr2[i];
	if( c < min) min = c;
}

		        return Math.floor(c);
}