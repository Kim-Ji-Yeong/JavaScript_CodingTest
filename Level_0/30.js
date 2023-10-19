function solution(array, height) {
  let answer = array.filter((h) => h > height);
  return answer.length;
}
