//상세 설명 보기클릭-텍스트 보이기
function showText(){
    var text = document.getElementById("desc");
    text.style.display = "block"; //수직으로 보이기
    var button = document.getElementById("btn");
    button.style.display = "none";}

    // document.getElementById("desc").style.display ="block";   * 변수설정없이 한번에 하는 법
    // document.getElementById("btn").style.display ="none";

//상세 설명 닫기 클릭-텍스트 숨기기
function hideText(){
    var text = document.getElementById("desc");
    text.style.display = "none"; //수직으로 보이기
    var button = document.getElementById("btn");
    button.style.display = "block";}