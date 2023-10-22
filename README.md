### JavaScript_CodingTest
programmers 0단계


```javascript
👉한번 씩 더 봐두면 좋은 코드들(참고)

10.js "문자열 섞기"
function solution(str1, str2) {
  return [...str1].map((a, i) => a + str2[i]).join("");
}

13.js "더 크게 합치기"
function solution(a, b) {
    return Math.max(Number(`${a}${b}`), Number(`${b}${a}`))
}

22.js "문자열 겹쳐쓰기"
function solution(my_string, overwrite_string, s) {    
    return my_string.slice(0,s)+overwrite_string+my_string.slice(s+overwrite_string.length)
}

23.js "이어 붙인 수"
// 첫번 째 방법
function solution(num_list) {
    let sol = num_list.filter(el=>(el%2===1));
    let sol2 = num_list.filter(el=>(el%2===0));
    return Number(sol.join(''))+Number(sol2.join(''));
}

// 두번 째 방법
function solution(num_list) {
    var even = num_list.filter(n => n % 2 === 0).reduce((acc, cur) => acc+cur, '');
    var odd = num_list.filter(n => n % 2 === 1).reduce((acc, cur) => acc+cur, '');
    return Number(even) + Number(odd);
}

24.js "원소들의 곱과 합"
// 첫번 째 방법
function solution(num_list) {
  return num_list.reduce((a, b) => a * b, 1) >
    num_list.reduce((a, b) => a + b, 0) ** 2
    ? 0
    : 1;
}

// 두번 째 방법 Math.pow를 이용
function solution(num_list) {
  return Math.pow(
    num_list.reduce((a, b) => a + b),
    2
  ) > num_list.reduce((a, b) => a * b)
    ? 1
    : 0;
}

26.js "글자 이어 붙여 문자열 만들기"
function solution(my_string, index_list) {
   return index_list.map(i => my_string[i]).join('');
}

👉27.js "문자열 여러 번 뒤집기"(해결하는데 오래걸림)
function solution(my_string, queries) {
  let str = my_string.split("");
  queries.forEach(([start, end]) => {
    const changeStr = str.slice(start, end + 1);
    str.splice(start, changeStr.length, ...changeStr.reverse());
  });
  return str.join("");
}

29.js "중복된 숫자 개수"
function solution(array, n) {
    return array.filter((v) => v === n).length;
}

31.js "두 수의 합"(32,33,34 같은 방식 문제)
// 내가 푼 방식
function solution(num1, num2) {
  return num1 + num2;
}

// 더 짧게 쓰는 방식
const solution = (num1, num2) => num1 + num2;

35.js "두 수의 나눗셈"
const solution = (num1,num2) => Math.trunc((num1/num2)*1000);
👉trunc(소수점 이하 버릴 때)

38.js "배열 두 배 만들기"
// reduce 사용
function solution(numbers) {
    return numbers.reduce((a, b) => [...a, b * 2], []);
}

// map 사용
const solution = (numbers) => numbers.map((number) => number * 2)

40.js "중앙값 구하기"
function solution(array) {
  return array.sort((a, b) => a - b)[Math.trunc(array.length / 2)];
}


```
📄[reduce를 정리한 벨로그글](https://velog.io/@yeong6415/arr.reduce-%EB%A9%94%EC%86%8C%EB%93%9C): 23.js 문제

📄[sort 정렬](https://change-words.tistory.com/entry/JavaScript-sortfunctiona-b-return-a-b-%EA%B0%80-%EC%9E%91%EB%8F%99%ED%95%98%EB%8A%94-%EC%9B%90%EB%A6%AC): 40.js 문제

```javascript
👉이해력의 문제로 문제가 이해안됨
18.js "조건 문자열"

👉나중에 다시 읽자 지금은 싫으니까
37.js "분수의 덧셈"

👉문제 풀이 나중에 다시 읽자 지금은 읽기 싫으니까
41.js "최빈값 구하기"

👉문제 풀이 왜 생각이 안나냐
43.js "피자 나눠 먹기(1)
44.js "피자 나눠 먹기(2)


```
