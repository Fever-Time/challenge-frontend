// Kakao.init('{JS_KEY}');
Kakao.init('7004ea44101be7c75067b28e563db611');
console.log(Kakao.isInitialized());

function loginWithKakao() {
    Kakao.Auth.login({
        success: function (authObj) {
            $.ajax({
                type: 'POST',
                url: 'http://localhost:8080/login/kakao',
                contentType: "application/json",
                data: JSON.stringify({'token': authObj['access_token']}),
                success: function (response) {
                    localStorage.setItem("token", response['token']);
                    localStorage.setItem("username", response['username']);
                }
            })
        },
        fail: function (err) {
            alert(JSON.stringify(err))
        },
    })
}