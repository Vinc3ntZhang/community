//用户回复问题JSON
function post() {
    var $questionId = $("#question_id").val();
    var $content = $("#comment_content").val();
    var login_url = "https://github.com/login/oauth/authorize?client_id=edb08beb3b762852a9b1&redirect_uri=http://localhost:8888/callback&scope=user&state=1";

    if (!$content) {
        alert("不能回复空内容~~~~");
        return;
    }

    $.ajax({
        type: "POST",
        url: "/comment",
        contentType: "application/json",
        data: JSON.stringify({
            "parentId": $questionId,
            "content": $content,
            "type": 1
        }),
        success: function (response) {
            if (response.code == 200) {
                window.location.reload();
            } else {//账号未登录逻辑
                if (response.code == 2003) {
                    var isAccepted = confirm(response.message);
                    if (isAccepted) {
                        window.open(login_url);
                        window.localStorage.setItem("closable", true);
                    }
                } else {
                    alert(response.message);
                }
            }
            console.log(response);
        },
        dataType: "json"
    });
    // alert($questionId + $content);
}