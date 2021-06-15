  //오른쪽 이미지 클릭하면 이미지 넘기기
  var num = 1; //전역 변수
  function nextGallery(){
     // var num = 1; 이경우 한장만 넘어감 지역변수라서 소멸하기때문 
      num+=1;
      if(num>7){num=1;}
      document.getElementById("gallery").src = "../images/img" + num + ".jpg";
  }
  //var num = 7; 전역변수 없어도됌 이미 위에 var num=1;로 선언해놨기때문
  function prevGallery(){
      num -=1;
      if(num<1){num=7;}
      document.getElementById("gallery").src ="../images/img" +num+".jpg";}