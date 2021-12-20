var numProblems = parseInt(gets());

for (let i = 0; i < numProblems; i++) {
  var fields = gets().split(" ");
  var a = parseInt(fields[0]);
  var b = parseInt(fields[1]);
  print(a + b);
}
