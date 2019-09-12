$(document).ready(function() {

    var type_search = "fuzzy";
    $.ajaxSetup({ cache: false });

    $('.type-search').click(function(){
        $('#smart-search').attr('placeholder', 'Tìm kiếm theo '+ this.name)
        type_search = this.name
        
    })

    $('#smart-search').click(function(){

    })


    $('#smart-search').keyup(function(){
        $('#dropdown').hide()
        $('#submit').css('margin-left', '40px')
        $('#smart-search').css('margin-left', '0px')
        $('#result').html('');
        $('#live-search').val('');
        var searchField = $('#smart-search').val();
        var expression = new RegExp(searchField, "i");
        
        
        var res = [ 
            {"title":"dai duong"},
            {"title":"dai duong2"},
            {"title":"dai duong3"},
            {"title":"tien khuong"},
            {"title":"tien khuong2"},
            {"title":"tien khuong3"},
            {"title":"van luat"},
            {"title":"thi quynh"}
        ]
        if(expression=='/(?:)/i'){
                    document.getElementById('live-search').innerHTML = '<p></p>'
        }else {
            $.ajax({
                type: "POST",
                contentType: "application/json",
                data: JSON.stringify({"mgs":"đại hội"}),
                dataType: 'json',
                cache: false,
                url: "http://192.168.1.83:5003/check",
                success: function(res){
                    console.log(res)

                    document.getElementById('live-search').innerHTML = ''
                    $.each(res, function(key, value){
                        if (value.data.search(expression) != -1)
                        {
                            $('#live-search').append('<li class="list-group-item link-class"> '+value.data+'</li>');
                        }
                    })

                }
            })

           
        }

        $('#live-search').on('click', 'li', function() {
            var click_text = $(this).text().split('|');
            $('#smart-search').val($.trim(click_text[0]));
            $("#live-search").html('');
           });

        
        
    })

    $('div').click(function(){
        document.getElementById('live-search').innerHTML = ''
        $('#dropdown').show()   
        $('#submit').css('margin-left', '10px')
        $('#smart-search').css('margin-left', '10px')
    })

    $('#smart-search').keypress(function(event){
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){
            smartSearch(type_search, $('#smart-search').val())
            // loadRelated($('#smart-search').val())
        }
    });

    $('#submit').click(function() {
        smartSearch(type_search, $('#smart-search').val())
        // loadRelated($('#smart-search').val())
    })

    function smartSearch(type ,text){
        var key_search = $("#smart-search").val();
        if (key_search == '' ) {
        } else {
            $.ajax({
                type: "get",
                url: "http://c60a8637.ngrok.io/rest/search/"+ type+ "/" + text,
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
                                html += '<div id="title-result" ><a href="#">' + res[i].content + '</a></div>'
                                html += '<div class="head-result" ><p>' + res[i].tag + '</p></div>'
                                html += '<div class="space-result"><br></div></div>'
                            }
                        }else {
                            for (i = value; i < res.length; i ++) {
        
                                html += '<div id="item'+ i + '" class="info-search">'
                                html += '<div id="title-result" ><a href="#">' + res[i].content + '</a></div>'
                                html += '<div class="head-result" ><p>' + res[i].tag + '</p></div>'
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
                                html = ''
                                html += '<div class="scrollbar" id="style-7">'
                                html += '<div class="force-overflow">'
                                
                                html += res[i].content

                                html += '</div></div>'
                                document.getElementById('detail-title').innerHTML = html
                                // document.getElementById('detail-content').innerHTML = res[i].description
                            })
                        })
                    }
                    loadDetail()
                }
            })
            
        }
    }

    // function loadRelated(value){
    //     var res = [
    //         {"related": 'dai duong'},
    //         {"related": 'dai duong2'},
    //         {"related": 'dai duong3'},
    //         {"related": 'dai duong4'},
    //         {"related": 'dai duong5'},
    //         {"related": 'dai duong6'},
    //     ]
    //     var html ='';
    //     html += '<div id="title-result" class="col-md-1" ></div>'
    //     html += '<div class="col-md-4">'
    //     html += '<div><h3>Searches related to<b> '+value+'</b></h3></div>'
    //     for (i = 0; i < res.length ; i+=3) {
    //         html += '<div class="col-md-6">'
    //         html += '<div id="title-result" class="related" ><b><a class="related-search" href="#">' + res[i].related + '</a></p></div>'
    //         html += '<div id="title-result" class="related" ><b><a class="related-search" href="#">' + res[i+1].related + '</a></p></div>'
    //         html += '<div id="title-result" class="related" ><b><a class="related-search" href="#">' + res[i+2].related + '</a></p></div>'
    //         html += '</div>'
    //     }
    //     html += '</div>'
    //     html += '<div id="title-result" class="col-md-7" ></div>'
    //     document.getElementById('related').innerHTML = html

    //     $('.related-search').click(function(){
    //         $('#smart-search').val(this.text)
    //         smartSearch(type_search, this.text)
    //     })

    // }


})