// reduce 사용
function solution(numbers) {
  return numbers.reduce((a, b) => [...a, b * 2], []);
}

// map 사용
const solution = (numbers) => numbers.map((number) => number * 2);
