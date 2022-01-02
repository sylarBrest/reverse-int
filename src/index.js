module.exports = function reverse (n) {
  n=Math.abs(n)+'';
  n=n.split("").reverse().join("");
  return +n;
}
