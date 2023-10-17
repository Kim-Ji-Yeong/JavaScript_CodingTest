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

👉이해력의 문제로 문제가 이해안됨
18.js "조건 문자열"
```
