//나이가 15세 이상이면 "드라마 관람가"이고, 아니면 "드라마 관람불가" 출력
var age = prompt("나이를 입력하세요."); 
if(age !== null){if(age >=15){document.write("드라가 관람가<br><br>");}
else{document.write("드라마 관람불가<br><br>");}
document.write("나이는" + age + "세 입니다.");}
else{document.write("입력이 취소 되었습니다.");}