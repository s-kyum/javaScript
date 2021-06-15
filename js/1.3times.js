
var count=0; //전역변수
var n = prompt("100이하의 숫자를 입력하세요.");
for(var i = 1; i<=100; i++){
    if(i%n===0){document.write(i+'&nbsp;');
    count = count + 1;   //count += 1;
}}
document.write('<br>');
document.write("<p>3의 배수의 개수 : " + count + "</p>");