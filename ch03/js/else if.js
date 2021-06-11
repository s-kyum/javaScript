 // var age = 12;
 var age = prompt("나이를 입력하세요");
 var charge;

 if(age !== null){ 
     if(age<8){
         document.write("미취학 아동입니다.<br>");
         charge = 1000;
         //document.write("입장료는"+charge+"원 입니다.");
 }else if(8<=age && age<14){
         document.write("초등학생입니다.<br>");
         charge = 2000;
         //document.write("입장료는" + charge+ "원 입니다");
 }else if(14<=age && age<20){
         document.write("중,고등학생입니다.<br>");
         charge = 2500;
         //document.write("입장료는" + charge+ "원 입니다");
 }else{document.write("성인입니다.<br>");
       charge=3000;
       //document.write("입장료는" + charge + "원 입니다.");
 }document.write("입장료는 <span class = 'charge'>" + charge + "</span>원 입니다.");  }
 else{document.write("입력이 취소되었습니다.");} //age = null
