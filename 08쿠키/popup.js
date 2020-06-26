//쿠키확인함수
function getCookie(name) {
    var cookies = document.cookie.split("; ");
    for (var i in cookies) {
        if (cookies[i].search(name) != -1) {
            return true; //찾은 의미로 true반환
        }
    }

}

//쿠키생성함수() -매개변수를 받아서 해당이름으로 1일간 유지되는 쿠키생성
function createCookie(cookie) {
    var date = new Date();
    date.setDate(date.getDate() + 1);

    var coo = "";
    coo += cookie + "=" + "true;";
    coo += "expires=" + date.toUTCString();

    document.cookie = coo;
}