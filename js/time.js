var startdate = "202211130910";
var enddate = "202211170910";

var now = new Date(); //현재시간

year = now.getFullYear(); //현재시간 중 4자리 연도
month = now.getMonth() + 1; //현재시간 중 달. 달은 0부터 시작하기 때문에 +1 
if ((month + "").length < 2) {
    month = "0" + month; //달의 숫자가 1자리면 앞에 0을 붙임.
}
date = now.getDate(); //현재 시간 중 날짜.
if ((date + "").length < 2) {
    date = "0" + date;
}
hour = now.getHours(); //현재 시간 중 시간.
if ((hour + "").length < 2) {
    hour = "0" + hour;
}
min = now.getMinutes(); //현재 시간 중 분.
if ((min + "").length < 2) {
    min = "0" + min;
}
today = year + "" + month + "" + date + "" + hour + "" + min; //오늘 날짜 완성.
// 시간비교
if ((eval(today) > eval(startdate)) && ((eval(today) < eval(enddate)))) {
    function zoom() {
        alert("줌 들어오세요.")
    }
    // 근데 생각해보니까 조종례 없잖안ㅁ,럼ㅇ나러뮤
    // 내 생각엔 음 1교시를 해두자.... 근데 1교시 다른데 어떡하지......
    // 각각 할 수도 없고
    //그냥 alert로 줌 수업 들어오세요 팝업창 띄워야겠다.
}