    //숫자를 입력받아서 그 숫자까지 출력하는 프로그램
    var n = 1;
    var i= prompt("숫자를 입력하세요.");
    if(i !== null){while(true){document.write(n + "&nbsp;");
    n += 1;
    if(n>i){break;}}}
    else{document.write("입력이 취소되었습니다.");}