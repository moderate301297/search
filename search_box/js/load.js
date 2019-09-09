$(document).ready(function() {

    $('#submit').click(function() {

        var key_search = $("#search").val();
        console.log("key_search", key_search)
        if (key_search == '' ) {
        } else {
        // $.ajax({
        //     type: "post",
        //     processData: false,
        //     contentType: false,
        //     data: key_search,
        //     url: "#",
        //     success: function(res) {

                var res = [{ "title":"Doi tuyen viet Nam ve nuoc 1",
                "speical_digit":"nguyentienkhuong1104@tekai.com ",
                "content": "nh công nhờ cự ly đội hình chặt chẽ, hợp lý.àn bộ cầu thủ, cả chính thức lẫn vào sân từ ghế dự bị, đều chơi cố gắng tới phút cuối. Tôi hài lòng với tinh thần chiến đấu của Việt Nam. Duy chỉ hơi đáng tiếc ở vị trí tiền đạo. Nếu Công Phượng đá chính, làm nhiệm vụ quấy phá, hàng thủ Thái Lan có thể xuống sức và bộc lộ nhiều sơ hở hơn vào cuối trận. Việt Nam hoàn toàn có thể tận dụng tốc độ vào lúc này để tìm bàn thắng."
                },
                { "title":"Doi tuyen viet Nam ve nuoc 2",
                "speical_digit":"nguyentienkhuong1104@tekai.com ",
                "content": "nh công nhờ cự ly đội hình chặt chẽ, hợp lý.àn bộ cầu thủ, cả chính thức lẫn vào sân từ ghế dự bị, đều chơi cố gắng tới phút cuối. Tôi hài lòng với tinh thần chiến đấu của Việt Nam. Duy chỉ hơi đáng tiếc ở vị trí tiền đạo. Nếu Công Phượng đá chính, làm nhiệm vụ quấy phá, hàng thủ Thái Lan có thể xuống sức và bộc lộ nhiều sơ hở hơn vào cuối trận. Việt Nam hoàn toàn có thể tận dụng tốc độ vào lúc này để tìm bàn thắng."
                },
                { "title":"Doi tuyen viet Nam ve nuoc 3",
                "speical_digit":"nguyentienkhuong1104@tekai.com ",
                "content": "nh công nhờ cự ly đội hình chặt chẽ, hợp lý.àn bộ cầu thủ, cả chính thức lẫn vào sân từ ghế dự bị, đều chơi cố gắng tới phút cuối. Tôi hài lòng với tinh thần chiến đấu của Việt Nam. Duy chỉ hơi đáng tiếc ở vị trí tiền đạo. Nếu Công Phượng đá chính, làm nhiệm vụ quấy phá, hàng thủ Thái Lan có thể xuống sức và bộc lộ nhiều sơ hở hơn vào cuối trận. Việt Nam hoàn toàn có thể tận dụng tốc độ vào lúc này để tìm bàn thắng."
                },
                { "title":"Doi tuyen viet Nam ve nuoc 4",
                "speical_digit":"nguyentienkhuong1104@tekai.com ",
                "content": "nh công nhờ cự ly đội hình chặt chẽ, hợp lý.àn bộ cầu thủ, cả chính thức lẫn vào sân từ ghế dự bị, đều chơi cố gắng tới phút cuối. Tôi hài lòng với tinh thần chiến đấu của Việt Nam. Duy chỉ hơi đáng tiếc ở vị trí tiền đạo. Nếu Công Phượng đá chính, làm nhiệm vụ quấy phá, hàng thủ Thái Lan có thể xuống sức và bộc lộ nhiều sơ hở hơn vào cuối trận. Việt Nam hoàn toàn có thể tận dụng tốc độ vào lúc này để tìm bàn thắng."
                }, 
                { "title":"Doi tuyen viet Nam ve nuoc 5",
                "speical_digit":"nguyentienkhuong1104@tekai.com ",
                "content": "nh công nhờ cự ly đội hình chặt chẽ, hợp lý.àn bộ cầu thủ, cả chính thức lẫn vào sân từ ghế dự bị, đều chơi cố gắng tới phút cuối. Tôi hài lòng với tinh thần chiến đấu của Việt Nam. Duy chỉ hơi đáng tiếc ở vị trí tiền đạo. Nếu Công Phượng đá chính, làm nhiệm vụ quấy phá, hàng thủ Thái Lan có thể xuống sức và bộc lộ nhiều sơ hở hơn vào cuối trận. Việt Nam hoàn toàn có thể tận dụng tốc độ vào lúc này để tìm bàn thắng."
                },
                { "title":"Doi tuyen viet Nam ve nuoc 6",
                "speical_digit":"nguyentienkhuong1104@tekai.com ",
                "content": "nh công nhờ cự ly đội hình chặt chẽ, hợp lý.àn bộ cầu thủ, cả chính thức lẫn vào sân từ ghế dự bị, đều chơi cố gắng tới phút cuối. Tôi hài lòng với tinh thần chiến đấu của Việt Nam. Duy chỉ hơi đáng tiếc ở vị trí tiền đạo. Nếu Công Phượng đá chính, làm nhiệm vụ quấy phá, hàng thủ Thái Lan có thể xuống sức và bộc lộ nhiều sơ hở hơn vào cuối trận. Việt Nam hoàn toàn có thể tận dụng tốc độ vào lúc này để tìm bàn thắng."
                },
                { "title":"Doi tuyen viet Nam ve nuoc 7",
                "speical_digit":"nguyentienkhuong1104@tekai.com ",
                "content": "nh công nhờ cự ly đội hình chặt chẽ, hợp lý.àn bộ cầu thủ, cả chính thức lẫn vào sân từ ghế dự bị, đều chơi cố gắng tới phút cuối. Tôi hài lòng với tinh thần chiến đấu của Việt Nam. Duy chỉ hơi đáng tiếc ở vị trí tiền đạo. Nếu Công Phượng đá chính, làm nhiệm vụ quấy phá, hàng thủ Thái Lan có thể xuống sức và bộc lộ nhiều sơ hở hơn vào cuối trận. Việt Nam hoàn toàn có thể tận dụng tốc độ vào lúc này để tìm bàn thắng."
                },
                { "title":"Doi tuyen viet Nam ve nuoc 8",
                "speical_digit":"nguyentienkhuong1104@tekai.com ",
                "content": "nh công nhờ cự ly đội hình chặt chẽ, hợp lý.àn bộ cầu thủ, cả chính thức lẫn vào sân từ ghế dự bị, đều chơi cố gắng tới phút cuối. Tôi hài lòng với tinh thần chiến đấu của Việt Nam. Duy chỉ hơi đáng tiếc ở vị trí tiền đạo. Nếu Công Phượng đá chính, làm nhiệm vụ quấy phá, hàng thủ Thái Lan có thể xuống sức và bộc lộ nhiều sơ hở hơn vào cuối trận. Việt Nam hoàn toàn có thể tận dụng tốc độ vào lúc này để tìm bàn thắng."
                },
                { "title":"Doi tuyen viet Nam ve nuoc 9",
                "speical_digit":"nguyentienkhuong1104@tekai.com ",
                "content": "nh công nhờ cự ly đội hình chặt chẽ, hợp lý.àn bộ cầu thủ, cả chính thức lẫn vào sân từ ghế dự bị, đều chơi cố gắng tới phút cuối. Tôi hài lòng với tinh thần chiến đấu của Việt Nam. Duy chỉ hơi đáng tiếc ở vị trí tiền đạo. Nếu Công Phượng đá chính, làm nhiệm vụ quấy phá, hàng thủ Thái Lan có thể xuống sức và bộc lộ nhiều sơ hở hơn vào cuối trận. Việt Nam hoàn toàn có thể tận dụng tốc độ vào lúc này để tìm bàn thắng."
                },
                { "title":"Doi tuyen viet Nam ve nuoc 10",
                "speical_digit":"nguyentienkhuong1104@tekai.com ",
                "content": "nh công nhờ cự ly đội hình chặt chẽ, hợp lý.àn bộ cầu thủ, cả chính thức lẫn vào sân từ ghế dự bị, đều chơi cố gắng tới phút cuối. Tôi hài lòng với tinh thần chiến đấu của Việt Nam. Duy chỉ hơi đáng tiếc ở vị trí tiền đạo. Nếu Công Phượng đá chính, làm nhiệm vụ quấy phá, hàng thủ Thái Lan có thể xuống sức và bộc lộ nhiều sơ hở hơn vào cuối trận. Việt Nam hoàn toàn có thể tận dụng tốc độ vào lúc này để tìm bàn thắng."
                },
                { "title":"Doi tuyen viet Nam ve nuoc 11",
                "speical_digit":"nguyentienkhuong1104@tekai.com ",
                "content": "nh công nhờ cự ly đội hình chặt chẽ, hợp lý.àn bộ cầu thủ, cả chính thức lẫn vào sân từ ghế dự bị, đều chơi cố gắng tới phút cuối. Tôi hài lòng với tinh thần chiến đấu của Việt Nam. Duy chỉ hơi đáng tiếc ở vị trí tiền đạo. Nếu Công Phượng đá chính, làm nhiệm vụ quấy phá, hàng thủ Thái Lan có thể xuống sức và bộc lộ nhiều sơ hở hơn vào cuối trận. Việt Nam hoàn toàn có thể tận dụng tốc độ vào lúc này để tìm bàn thắng."
                }

            ]

                var html = ''
                html_count =  'Khoảng ' + res.length + ' kết quả'
                document.getElementById('info-result').innerHTML = html_count

                if (res.length > 10) {

                    current = 1
                    console.log("tessst")
                    html_current = '<span id="numbers'+ current + '" class="page-numbers current" href="#">' + current + '</span>'
                    var html_page = ''

                    for (i=1; i <= res.length % 10 + 1; i ++) {
                        if ( current != i) {
                            html_page  += '<a id="numbers' +  i + '" class="page-numbers" href="#">' + i +'</a>'
                        } else {
                            html_page += html_current
                        }

                    }

                    if (current != res.length % 10 + 1) {
                        html_next = '<a class="next page-numbers" href="#">Next  →</a>'
                    }

                    html_page += html_next

                    document.getElementById('page-navigation').innerHTML = html_page
                    for (i = 0; i < 10; i ++) {
                        
                        html += '<div id="item'+ i + '">'
                        html += '<div id="title-result" ><a href="#">' + res[i].title + '</a></div>'
                        html += '<div class="content-result">' + res[i].content + '</div>'
                        html += '<div class="space-result"><br></div></div>'
                    }
                    document.getElementById('list-result').innerHTML = html

                    test = [1, 2]

                    

                    test.forEach(function(element, i) {
                        console.log("a", i)
                        h = i + 1
                        $('#numbers' + h).click(function() {
                            current = h
                            k = res.length % 10
                            if (current < k + 1) { 
                                console.log("current", current)
                                html = ''
                                for (i = 0; i < 10; i ++) {
                                    if ( current == 1) {
                                            html += '<div id="item'+ i + '">'
                                            html += '<div id="title-result" ><a href="#">' + res[i].title + '</a></div>'
                                            html += '<div class="content-result">' + res[i].content + '</div>'
                                            html += '<div class="space-result"><br></div></div>'
                                    } else {
                                            j = current * 10 - 10
                                            html += '<div id="item'+ j + '">'
                                            html += '<div id="title-result" ><a href="#">' + res[j].title + '</a></div>'
                                            html += '<div class="content-result">' + res[j].content + '</div>'
                                            html += '<div class="space-result"><br></div></div>'
                                    }
                                }
                            } else {
                                console.log("current2", current)
                                html = ''
                                count = res.length - (res.length % 10) * 10
                                for (i = 0; i < count; i ++) {
                                    j = current * 10 - 10
                                    html += '<div id="item'+ j + '">'
                                    html += '<div id="title-result" ><a href="#">' + res[j].title + '</a></div>'
                                    html += '<div class="content-result">' + res[j].content + '</div>'
                                    html += '<div class="space-result"><br></div></div>'
                                }
                            }
                            document.getElementById('list-result').innerHTML = html

                        })
                    })

                } else {
                    console.log("aa")
                    res.forEach(function(element, i) {
                        html += '<div id="item'+ i + '">'
                        html += '<div id="title-result" ><a href="#">' + element.title + '</a></div>'
                        html += '<div class="content-result">' + element.content + '</div>'
                        html += '<div class="space-result"><br></div></div>'
                    });
                    document.getElementById('list-result').innerHTML = html
                }

                res.forEach(function(element, i) {
                    $('#item' + i).click(function() {
                        console.log("test3")
                
                        document.getElementById('detail-title').innerHTML = res[i].title
                        document.getElementById('detail-content').innerHTML = res[i].content
                    })
                })
                


        //     },
        //     error: function() {
        //         console.log("error")
        //     },
        // })
        }
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