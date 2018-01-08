var a = prompt("Wprowadź zmienną 'a'");
var b = prompt("Wprowadź zmienną 'b'");
var value = (a*a)-(2*a*b)+(b*b);
console.log("Wynik to: ", value);
if (value>0) {
	console.log("Wynik dodatni");
} else if (value<0) {
	console.log("Wynik ujemny");
} else {
	console.log("Wynik równa się zero");
}
