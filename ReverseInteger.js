function reverse(x) {
  var temp = x;
  var newX =
    temp < 0
      ? Math.abs(temp).toString().split("").reverse().join("")
      : temp.toString().split("").reverse().join("");

  if (newX > 2 ** 31 - 1) return 0;
  else if (temp < 0) return newX * -1;
  else return newX;
}

console.log(reverse(123));
