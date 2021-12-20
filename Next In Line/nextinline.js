var a = parseInt(gets());
var b = parseInt(gets());

if (a > b) {
  var c = a - b + a;
} else {
  var c = b - a + b;
}
print(c);
