$(document).ready(function() {

    $.ajaxSetup({ cache: false });

    $('#search').keyup(function(){
        $('#result').html('');
        $('#live-search').val('');
        var searchField = $('#search').val();
        var expression = new RegExp(searchField, "i");
        // $.ajax
        var res = [ 
            {"title":"dai duong"},
            {"title":"tien khuong"},
            {"title":"tien khuong xau vl"},
            {"title":"tien khuong so khanh"},
            {"title":"van luat"},
            {"title":"thi quynh Ngáo"}
        ]
        if(expression=='/(?:)/i'){
                    document.getElementById('live-search').innerHTML = '<p></p>'
        }else {
            document.getElementById('live-search').innerHTML = ''
            $.each(res, function(key, value){
                if (value.title.search(expression) != -1)
                {
                    $('#live-search').append('<li class="list-group-item link-class"> '+value.title+'</li>');
                }
            })
        }

        $('#live-search').on('click', 'li', function() {
            var click_text = $(this).text().split('|');
            $('#search').val($.trim(click_text[0]));
            $("#live-search").html('');
           });

        
        
    })

    $('div').click(function(){
        document.getElementById('live-search').innerHTML = ''

    })

    $('#search').keypress(function(event){
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){
            smartSearch($('#search').val())
        }
    });

    $('#submit').click(function() {
        smartSearch($('#search').val())
    })

    function smartSearch(url){
        var res = []
        var key_search = $("#search").val();
        if (key_search == '' ) {
        } else {
            $.ajax({
                type: "get",
                url: "http://192.168.1.2:8090/rest/search/description/" + url,
                success: function(res) {
                    html_count =  '<p>Khoảng ' + res.length + ' kết quả</p>'
                    document.getElementById('info-result').innerHTML = html_count
        
                    function pagtination(value){
                        var htmlPagtination = ""
                        htmlPagtination  += '<a href="#section" class="a-pagination" id="pagination-left" name=1>&laquo;</a>'
                        var count = 0;
                        if(value==1 || value ==2){
                            for (i=1; i <= res.length / 10 + 1; i ++) {
                                count++,
                                htmlPagtination  += '<a href="#section" class="a-pagination" name="'+i+'">'+i+'</a>'
                                if(count==3){
                                    break;
                                }
                            }
                        }else {
                            for (i=value-1; i <= res.length / 10 + 1; i ++) {
                                count++,
                                htmlPagtination  += '<a href="#section" class="a-pagination" name="'+i+'">'+i+'</a>'
                                if(count==3){
                                    break;
                                }
                            }
                        }
                        
                        htmlPagtination  += '<a href="#section" class="a-pagination" id="pagination-right" name=2>&raquo;</a>'
                        document.getElementById('pagination').innerHTML = htmlPagtination
        
        
                        var jsonLength = 0;
                        if(res.length/10 > parseInt(res.length/10)){
                            jsonLength = parseInt(res.length/10) +1
                        }else {
                            jsonLength = parseInt(res.length/10)
                        }
        
                       if(parseInt(value)==1){
                            $("#pagination-left").attr("name", 1);
                            $('#pagination-right').attr("name", 2);
                       }else if(parseInt(value) == jsonLength){
                            $("#pagination-left").attr("name", jsonLength-1);
                            $('#pagination-right').attr("name", jsonLength);
                       }else {
                            $("#pagination-left").attr("name", parseInt(value)-1);
                            $('#pagination-right').attr("name", parseInt(value)+1);
                       }
        
        
                        $('.a-pagination').click(function(){
                            pagtination(this.name)
                            loadSearch(this.name)
                            loadDetail()
                        })
                    }
                    pagtination(1);
        
                    
        
                    function pagination(value){
        
                        loadSearch(value)
                        loadDetail()
        
                        var jsonLength = 0;
                        if(res.length/10 > parseInt(res.length/10)){
                            jsonLength = parseInt(res.length/10) +1
                        }else {
                            jsonLength = parseInt(res.length/10)
                        }
        
                       if(parseInt(value)==1){
                            $("#pagination-left").attr("name", 1);
                            $('#pagination-right').attr("name", 2);
                       }else if(parseInt(value) == jsonLength){
                            $("#pagination-left").attr("name", jsonLength-1);
                            $('#pagination-right').attr("name", jsonLength);
                       }else {
                            $("#pagination-left").attr("name", parseInt(value)-1);
                            $('#pagination-right').attr("name", parseInt(value)+1);
                       }
        
                    }
        
                    function loadSearch(value){
                        var html = ''
                        html += '<div class="scrollbar" id="style-7">'
                        html += '<div class="force-overflow">'
                        value = value*10 -10
                        if(value+10<res.length){
                            for (i = value; i < value + 10; i ++) {
                                html += '<div id="item'+ i + '" class="info-search">'
                                html += '<div id="title-result" ><a href="#">' + res[i].title + '</a></div>'
                                html += '<div class="head-result" ><p>' + res[i].url + '</p></div>'
                                html += '<div class="content-result">' + res[i].description + '</div>'
                                html += '<div class="space-result"><br></div></div>'
                            }
                        }else {
                            for (i = value; i < res.length; i ++) {
        
                                html += '<div id="item'+ i + '" class="info-search">'
                                html += '<div id="title-result" ><a href="#">' + res[i].title + '</a></div>'
                                html += '<div class="head-result" ><p>' + res[i].url + '</p></div>'
                                html += '<div class="content-result">' + res[i].description + '</div>'
                                html += '<div class="space-result"><br></div></div>'
                            }
                        }
                        html += '</div>'
                        html += '</div>'
                        document.getElementById('list-result').innerHTML = html
                        
                    }
                    
                    loadSearch(1)
        
                    function loadDetail(){
                        res.forEach(function(element, i) {
                            $('#item' + i).click(function() {
                        
                                document.getElementById('detail-title').innerHTML = res[i].title
                                document.getElementById('detail-content').innerHTML = res[i].description
                            })
                        })
                    }
                        
                    loadDetail()
                }
            })
            
           


        //     },
        //     error: function() {
        //         console.log("error")
        //     },
        // })
        }
    }



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