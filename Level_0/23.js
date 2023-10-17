//첫번 째 방법
function solution(num_list) {
  let sol = num_list.filter((el) => el % 2 === 1);
  let sol2 = num_list.filter((el) => el % 2 === 0);
  return Number(sol.join("")) + Number(sol2.join(""));
}

//두번 째 방법
function solution(num_list) {
  var even = num_list
    .filter((n) => n % 2 === 0)
    .reduce((acc, cur) => acc + cur, "");
  var odd = num_list
    .filter((n) => n % 2 === 1)
    .reduce((acc, cur) => acc + cur, "");
  return Number(even) + Number(odd);
}
