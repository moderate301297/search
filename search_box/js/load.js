$(document).ready(function () {

    var type_search = "content";
    // $.ajaxSetup({ cache: false });

    $('.type-search').click(function () {
        $('#smart-search').attr('placeholder', 'Tìm kiếm theo ' + this.name)
        type_search = this.name

    })

    $('#smart-search').click(function () {

    })



    $('#smart-search').keyup(function () {
        $('#dropdown').hide()
        $('#submit').css('margin-left', '10px')
        $('#upload-file').css('margin-left', '39px')
        $('#smart-search').css('margin-left', '0px')
        $('#result').html('');
        $('#live-search').val('');
        var searchField = $('#smart-search').val();
        var expression = new RegExp(searchField, "i");

        if (expression == '/(?:)/i') {
            document.getElementById('live-search').innerHTML = '<p></p>'
        } else {
            $.ajax({
                type: "POST",
                contentType: "application/json",
                data: JSON.stringify({ "mgs": $('#smart-search').val() }),
                dataType: 'json',
                cache: false,
                url: "http://45.119.81.89:5002/related",
                success: function (res) {
                    document.getElementById('live-search').innerHTML = ''
                    $.each(res, function (key, value) {
                        if (value.search_related.search(expression) != -1) {
                            $('#live-search').append('<li class="list-group-item link-class"> ' + value.search_related + '</li>');
                        }
                    })
                }
            })


        }

        $('#live-search').on('click', 'li', function () {
            var click_text = $(this).text().split('|');
            $('#smart-search').val($.trim(click_text[0]));
            $("#live-search").html('');
            $('#related').show()

        });



    })

    $('body').click(function () {
        document.getElementById('live-search').innerHTML = ''
        $('#dropdown').show()
        $('#submit').css('margin-left', '9px')
        $('#upload-file').css('margin-left', '10px')
        // $('#smart-search').css('margin-left', '5px')
        $(document).ready(function () {
            if ($('#div-dropdown').attr('class') === 'dropdown') {
                $('#result-box').css('border-radius', '40px')
            } else {
                $('#result-box').css('border-radius', '20px')
                $('#result-box').css('border-bottom-left-radius', 'inherit')
                $('#result-box').css('border-bottom-right-radius', 'inherit')
            }
        })

    })

    $('#smart-search').keypress(function (event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '13') {
            smartSearch(type_search, $('#smart-search').val())
            $('#related').show()
            loadRelated($('#smart-search').val())
        }
    });

    $('#submit').click(function () {
        smartSearch(type_search, $('#smart-search').val())
        $('#related').show()
        loadRelated($('#smart-search').val())

    })

    function smartSearch(type, text) {
        document.getElementById('list-result').innerHTML = ''
        var key_search = $("#smart-search").val();
        if (key_search == '') {
        } else {
            $.ajax({
                type: "get",
                url: "http://45.119.81.89:8090/rest/search/" + type + "/" + text,
                success: function (res) {
                    html_count = '<p id="p-info-result">Khoảng ' + res.length + ' kết quả</p>'
                    document.getElementById('info-result').innerHTML = html_count

                    if (res.length === 0) {
                        var html = '<p id="p-info-result">không có kết quả thỏa mãn</p>'
                        document.getElementById('list-result').innerHTML = html

                    } else {
                        pagtination(res, 1);
                        loadSearch(res, 1)
                        loadDetail(res)
                    }
                }
            })

        }
    }

    function loadSearch(res, value) {
        var html = ''
        html += '<div class="scrollbar" id="style-7">'
        html += '<div class="force-overflow">'
        value = value * 10 - 10
        if (value + 10 < res.length) {
            for (i = value; i < value + 10; i++) {
                html += '<div id="item' + i + '" class="info-search">'
                html += '<div id="title-result" ><a href="#">' + res[i].content + '</a></div>'
                html += '<div class="head-result" ><p>' + res[i].url + '</p></div>'
                html += '<div class="space-result"><br></div></div>'
            }
        } else {
            for (i = value; i < res.length; i++) {

                html += '<div id="item' + i + '" class="info-search">'
                html += '<div id="title-result" ><a href="#">' + res[i].content + '</a></div>'
                html += '<div class="head-result" ><p>' + res[i].url + '</p></div>'
                html += '<div class="space-result"><br></div></div>'
            }
        }
        html += '</div>'
        html += '</div>'
        document.getElementById('list-result').innerHTML = html

    }

    function loadDetail(res) {
        res.forEach(function (element, i) {
            $('#item' + i).click(function () {
                html = ''
                html += '<div class="scrollbar" id="style-7">'
                html += '<div class="force-overflow">'

                html += '<pre class="pre-content-detail">' + res[i].content + '</pre>'

                html += '</div></div>'
                document.getElementById('content-detail').innerHTML = html
                // document.getElementById('detail-content').innerHTML = res[i].description
            })
        })
    }

    function pagtination(res, value) {
        var htmlPagtination = ""
        htmlPagtination += '<a href="#section" class="a-pagination" id="pagination-left" name=1>&laquo;</a>'
        var count = 0;
        if (value == 1 || value == 2) {
            for (i = 1; i <= res.length / 10 + 1; i++) {
                count++ ,
                    htmlPagtination += '<a href="#section" class="a-pagination" name="' + i + '">' + i + '</a>'
                if (count == 3) {
                    break;
                }
            }
        } else {
            for (i = value - 1; i <= res.length / 10 + 1; i++) {
                count++ ,
                    htmlPagtination += '<a href="#section" class="a-pagination" name="' + i + '">' + i + '</a>'
                if (count == 3) {
                    break;
                }
            }
        }

        htmlPagtination += '<a href="#section" class="a-pagination" id="pagination-right" name=2>&raquo;</a>'
        document.getElementById('pagination').innerHTML = htmlPagtination


        var jsonLength = 0;
        if (res.length / 10 > parseInt(res.length / 10)) {
            jsonLength = parseInt(res.length / 10) + 1
        } else {
            jsonLength = parseInt(res.length / 10)
        }
        console.log(value)
        if (parseInt(value) == 1) {
            $("#pagination-left").attr("name", 1);
            $('#pagination-right').attr("name", 2);
        } else if (parseInt(value) == jsonLength) {
            $("#pagination-left").attr("name", jsonLength - 1);
            $('#pagination-right').attr("name", jsonLength);
        } else {
            $("#pagination-left").attr("name", parseInt(value) - 1);
            $('#pagination-right').attr("name", parseInt(value) + 1);
        }

        $('.a-pagination').click(function () {
            pagtination(res, this.name)
            loadSearch(res, this.name)
            loadDetail(res)
        })
    }

    function pagination(res, value) {

        loadSearch(res, value)
        loadDetail(res)

        var jsonLength = 0;
        if (res.length / 10 > parseInt(res.length / 10)) {
            jsonLength = parseInt(res.length / 10) + 1
        } else {
            jsonLength = parseInt(res.length / 10)
        }
        if (parseInt(value) == 1) {
            $("#pagination-left").attr("name", 1);
            $('#pagination-right').attr("name", 2);
        } else if (parseInt(value) == jsonLength) {
            $("#pagination-left").attr("name", jsonLength - 1);
            $('#pagination-right').attr("name", jsonLength);
        } else {
            $("#pagination-left").attr("name", parseInt(value) - 1);
            $('#pagination-right').attr("name", parseInt(value) + 1);
        }

    }
    function loadRelated(value) {

        $.ajax({
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify({ "mgs": $('#smart-search').val() }),
            dataType: 'json',
            cache: false,
            url: "http://45.119.81.89:5002/related",
            success: function (res) {
                var html = '<br>';
                html += '<div id="title-result" class="col-md-1" ></div>'
                html += '<div>'
                html += '<div>Searches related to<b> ' + value + '</b></div>'
                html += '<div class="col-md-2"></div>'
                for (i = 0; i < res.length; i += 3) {
                    html += '<div class="col-md-5">'
                    html += '<div class="related" ><b><a class="related-search" href="#">' + res[i].search_related + '</a></p></div>'
                    html += '<div class="related" ><b><a class="related-search" href="#">' + res[i + 1].search_related + '</a></p></div>'
                    html += '<div class="related" ><b><a class="related-search" href="#">' + res[i + 2].search_related + '</a></p></div>'
                    html += '</div>'
                }
                html += '</div>'
                document.getElementById('related').innerHTML = html

                $('.related-search').click(function () {
                    $('#smart-search').val(this.text)
                    smartSearch(type_search, this.text)
                })
            },
            error: function (e) {
                console.log('error      ' + e)
            }


        })




    }


    $('#upload-file').click(function () {
        $('#result-box').hide()
        $('#smart-search-file').show()

    })

    var arr = '';
    var file_search
    // var file
    $('#input-smart-search-file').change(function (e) {
        $('#show-content').hide()
        $('#p-info-result').hide()
        $('#displayCheck').show()
        $('#select-box').show()
        file_search = this.files[0]
        // file = e.target.files[0];
        // var reader = new FileReader();
        // var csv = reader.result.split(',');
        // reader.readAsText(file)
    })

    $('#submit-search-file').click(function () {
        $('#text-check').hide()
        $('#related').hide()
        $('#result-box').show()
        $('#smart-search-file').hide()
        $('#show-content').show()
        arr = '';
        for (i = 1; i < 12; i++) {
            arr += $('#sel' + i).val()
            if (i != 11) {
                arr += ','
            }
        }

        var formData = new FormData();
        formData.append('files', file_search);
        if (arr != '0,0,0,0,0,0,0,0,0,0,0') {
            formData.append('arr', arr);
        }

        $.ajax({
            type: "POST",
            // contentType: "application/json",
            data: formData,
            processData: false,
            contentType: false,
            // dataType: 'json',
            cache: false,
            url: "http://45.119.81.89:5000/",
            success: function (res) {
                html_count = '<p id="p-info-result">Khoảng ' + res.length + ' kết quả</p>'
                document.getElementById('info-result').innerHTML = html_count

                if (res.length === 0) {
                    var html = '<p id="p-info-result">không có kết quả thỏa mãn</p>'
                    document.getElementById('list-result').innerHTML = html
                } else {
                    pagtination(res, 1);
                    loadSearch(res, 1)
                    loadDetail(res)
                }

            },
            error: function (e) {

            }


        })

    })

    $('#smart-search-file').change(function (e) {
        $("#text-check").show()
    })
})
