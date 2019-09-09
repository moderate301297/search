$(document).ready(function() {

    $('#detail').click(function() {
        
        $.ajax({
            type: "get",
            xhrFields: {
                withCredentials: true
            },
            datatype: "application/json",
            url: "/detail",
            success: function(res) {
                console.log(res)
                var html = ''

                document.getElementById('detail').innerHTML = html
                $('#detail').show();
            },
            error: function() {
                $('#detail').hide()
            },
        })
    })

    $('.title-result').click(function() {
        

        // fake data
        // $.ajax({
        //     type: "get",
        //     xhrFields: {
        //         withCredentials: true
        //     },
        //     datatype: "application/json",
        //     url: "/detail",
        //     success: function(res) {
            var res = { "title":"Doi tuyen viet Nam ve nuoc",
            "speical_digit":"nguyentienkhuong1104@tekai.com ",
            "content": "nh công nhờ cự ly đội hình chặt chẽ, hợp lý.àn bộ cầu thủ, cả chính thức lẫn vào sân từ ghế dự bị, đều chơi cố gắng tới phút cuối. Tôi hài lòng với tinh thần chiến đấu của Việt Nam. Duy chỉ hơi đáng tiếc ở vị trí tiền đạo. Nếu Công Phượng đá chính, làm nhiệm vụ quấy phá, hàng thủ Thái Lan có thể xuống sức và bộc lộ nhiều sơ hở hơn vào cuối trận. Việt Nam hoàn toàn có thể tận dụng tốc độ vào lúc này để tìm bàn thắng."
            }
                var html = ''

                document.getElementById('detail-title').innerHTML = res.title

                document.getElementById('detail-content').innerHTML = res.content
    //         },
    //         error: function() {
    //             $('#detail').hide()
    //         },
    //     })
    })


})