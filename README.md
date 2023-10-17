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
```
📄[reduce를 정리한 벨로그글](https://velog.io/write?id=d9c89bd0-c695-462f-bb46-3bcb4d969dac): 23.js 문제

```javascript
👉이해력의 문제로 문제가 이해안됨
18.js "조건 문자열"
```
