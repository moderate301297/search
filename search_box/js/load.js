$(document).ready(function() {

    $('#submit').click(function() {
        // $.ajax({
        //     type: "get",
        //     xhrFields: {
        //         withCredentials: true
        //     },
        //     datatype: "application/json",
        //     url: "#",
        //     success: function(res) {

                var res = [{ "title":"Doi tuyen viet Nam ve nuoc 1",
                "speical_digit":"nguyentienkhuong1104@tekai.com ",
                "content": "nh công nhờ cự ly đội hình chặt chẽ, hợp lý.àn bộ cầu thủ, cả chính thức lẫn vào sân từ ghế dự bị, đều chơi cố gắng tới phút cuối. Tôi hài lòng với tinh thần chiến đấu của Việt Nam. Duy chỉ hơi đáng tiếc ở vị trí tiền đạo. Nếu Công Phượng đá chính, làm nhiệm vụ quấy phá, hàng thủ Thái Lan có thể xuống sức và bộc lộ nhiều sơ hở hơn vào cuối trận. Việt Nam hoàn toàn có thể tận dụng tốc độ vào lúc này để tìm bàn thắng."
                },
                { "title":"Doi tuyen viet Nam ve nuoc 2",
                "speical_digit":"nguyentienkhuong1104@tekai.com ",
                "content": "nh công nhờ cự ly đội hình chặt chẽ, hợp lý.àn bộ cầu thủ, cả chính thức lẫn vào sân từ ghế dự bị, đều chơi cố gắng tới phút cuối. Tôi hài lòng với tinh thần chiến đấu của Việt Nam. Duy chỉ hơi đáng tiếc ở vị trí tiền đạo. Nếu Công Phượng đá chính, làm nhiệm vụ quấy phá, hàng thủ Thái Lan có thể xuống sức và bộc lộ nhiều sơ hở hơn vào cuối trận. Việt Nam hoàn toàn có thể tận dụng tốc độ vào lúc này để tìm bàn thắng."
                }]
                var html = ''

                res.forEach(element => {
                    html += '<div id="title-result" ><a href="#">' + element.title + '</a></div>'
                    html += '<div class="content-result">' + element.content + '</div>'
                    html += '<div class="space-result"><br></div>'
                });
                html_count =  'Khoảng ' + res.length + ' kết quả'
                
                document.getElementById('info-result').innerHTML = html_count
                document.getElementById('list-result').innerHTML = html

        //     },
        //     error: function() {
        //         console.log("error")
        //     },
        // })
    })

    $('#list-result').click(function() {
        console.log("test3")
        var res = { "title":"Doi tuyen viet Nam ve nuoc 1",
            "speical_digit":"nguyentienkhuong1104@tekai.com ",
            "content": "nh công nhờ cự ly đội hình chặt chẽ, hợp lý.àn bộ cầu thủ, cả chính thức lẫn vào sân từ ghế dự bị, đều chơi cố gắng tới phút cuối. Tôi hài lòng với tinh thần chiến đấu của Việt Nam. Duy chỉ hơi đáng tiếc ở vị trí tiền đạo. Nếu Công Phượng đá chính, làm nhiệm vụ quấy phá, hàng thủ Thái Lan có thể xuống sức và bộc lộ nhiều sơ hở hơn vào cuối trận. Việt Nam hoàn toàn có thể tận dụng tốc độ vào lúc này để tìm bàn thắng."
        }

        document.getElementById('detail-title').innerHTML = res.title
        document.getElementById('detail-content').innerHTML = res.content
    })

    // $(window).scroll(function(){
    //     var scroll = $(window).scrollTop();
    //       if (scroll > 30) {
    //         $(".header").css("position;" , "fixed"); 
    //       }
    //       else{
    //         $(".header").css("position;" , "fixed");    
    //       }
    //   })


})