$(document).ready(function () {

    $.ajax({
        type: "get",
        url: "http://45.119.81.89:8090/rest/search/all",
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

    var arrDetail = ['content', 'name']
    var arrNumber = [1, 1, 1]

    var check_search = 0;

    arrDetail.forEach(function (element, i) {

        $('#input-' + arrDetail[i]).change(function () {
            arrNumber.splice(i, 1, this.value);
            document.getElementById(arrDetail[i] + '-number').innerHTML = this.value
        })
    })
    var value_check_search = 1;

    $('#checkbox-search').click(function () {

        console.log(this.value)
        if (this.value == 1) {
            $('#checkbox-search').attr('value', 2)
            check = 2
        } else {
            $('#checkbox-search').attr('value', 1)
            check = 1
        }

        if (check == 2) {
            $('.check-li').show()
        } else {
            $('.check-li').hide()
        }

    })




    var type_search = "content";
    // $.ajaxSetup({ cache: false });

    $('.type-search').click(function () {
        $('#smart-search-content').attr('placeholder', 'Tìm kiếm theo ' + this.name)
        type_search = this.name

    })

    $('#smart-search-content').keyup(function () {
        $('#dropdown').hide()
        $('#submit').css('margin-left', '10px')
        $('#upload-file').css('margin-left', '39px')
        $('#smart-search-content').css('margin-left', '0px')
        $('#result').html('');
        $('#live-search').val('');
        var searchField = $('#smart-search-content').val();
        var expression = new RegExp(searchField, "i");

        if (expression == '/(?:)/i') {
            document.getElementById('live-search').innerHTML = '<p></p>'
        } else {
            $.ajax({
                type: "POST",
                contentType: "application/json",
                data: JSON.stringify({ "mgs": $('#smart-search-content').val() }),
                dataType: 'json',
                // cache: false,
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
            $('#smart-search-content').val($.trim(click_text[0]));
            $("#live-search").html('');
            $('#related').show()

        });



    })

    $('body').click(function () {
        document.getElementById('live-search').innerHTML = ''
        $('#dropdown').show()
        $('#submit').css('margin-left', '9px')
        $('#upload-file').css('margin-left', '10px')
        // $('#smart-search-content').css('margin-left', '5px')
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

    $('#smart-search-content').keypress(function (event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '13') {
            $('#related').show()
            loadRelated($('#smart-search-content').val())

            if ($('#checkbox-search').val() == 1) {
                smartSearchDocument($('#smart-search-content').val())
            } else {
                smartSearch($('#smart-search-content').val())

            }
        }
    });

    $('#submit').click(function () {
        smartSearch(type_search, $('#smart-search-content').val())
        $('#related').show()

        if ($('#checkbox-search').val() == 2) {
            smartSearchDocument($('#smart-search-content').val())
        } else {
            smartSearch($('#smart-search-content').val())

        }

    })

    function smartSearch(text) {
        document.getElementById('list-result').innerHTML = ''
        var key_search = $("#smart-search").val();
        if (key_search == '') {
        } else {
            $.ajax({
                type: "get",
                url: "http://45.119.81.89:8090/rest/search/field" + "/" + text,
                success: function (res) {
                    html_count = '<p id="p-info-result">Khoảng ' + res.length + ' kết quả</p>'
                    document.getElementById('info-result').innerHTML = html_count

                    if (res.length === 0) {
                        var html = '<p id="p-info-result">không có kết quả thỏa mãn</p>'
                        document.getElementById('list-result').innerHTML = html

                    } else {
                        pagtination(res, 1);
                        loadSearchField(res, 1)
                        loadDetailField(res)
                    }
                }
            })

        }
    }

    function smartSearchDocument(text) {
        document.getElementById('list-result').innerHTML = ''
        var key_search = $("#smart-search").val();
        if (key_search == '') {
        } else {
            $.ajax({
                type: "get",
                url: "http://45.119.81.89:8090/rest/search/raw/content/" + text,
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
            data: JSON.stringify({ "mgs": $('#smart-search-content').val() }),
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
                    $('#smart-search-content').val(this.text)
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

    $('#logo-search').click(function () {
        $('#result-box').show()
        $('#smart-search-file').hide()
    })

    var file_search
    $('#input-smart-search-file').change(function (e) {
        $('#show-content').hide()
        $('#p-info-result').hide()
        $('#displayCheck').show()
        $('#select-box').show()
        file_search = this.files[0]
    })

    var arrDetailFile = ['sel1', 'sel2', 'sel3', 'sel4', 'sel5', 'sel6', 'sel7', 'sel8', 'sel9', 'sel10', 'sel11']

    arrDetailFile.forEach(function (element, i) {
        $('#' + arrDetailFile[i]).change(function () {
            document.getElementById(arrDetailFile[i] + '-number').innerHTML = this.value
        })
    })

    $('#submit-search-file').click(function () {
        $('#text-check').hide()
        $('#related').hide()
        $('#result-box').show()
        $('#smart-search-file').hide()
        $('#show-content').show()
        var arr = ''

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
            url: "http://7d67e7a1.ngrok.io",
            success: function (res) {
                html_count = '<p id="p-info-result">Khoảng ' + res.length + ' kết quả</p>'
                document.getElementById('info-result').innerHTML = html_count

                if (res.length === 0) {
                    var html = '<p id="p-info-result">không có kết quả thỏa mãn</p>'
                    document.getElementById('list-result').innerHTML = html
                } else if (res === 'Sorry, no matching files found') {
                    var html = '<p id="p-info-result">không có kết quả thỏa mãn</p>'
                    document.getElementById('list-result').innerHTML = 'Sorry, no matching files found'
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

    function loadSearchField(res, value) {
        var html = ''
        html += '<div class="scrollbar" id="style-7">'
        html += '<div class="force-overflow">'
        value = value * 10 - 10
        if (value + 10 < res.length) {
            for (i = value; i < value + 10; i++) {
                html += '<div id="item' + i + '" class="info-search">'
                html += '<div id="title-result" ><a href="#">' + res[i].nhanXet + '</a></div>'
                html += '<div class="head-result" ><p>' + res[i].ten + '</p></div>'
                html += '<div class="space-result"><br></div></div>'
            }
        } else {
            for (i = value; i < res.length; i++) {

                html += '<div id="item' + i + '" class="info-search">'
                html += '<div id="title-result" ><a href="#">' + res[i].nhanXet + '</a></div>'
                html += '<div class="head-result" ><p>' + res[i].ten + '</p></div>'
                html += '<div class="space-result"><br></div></div>'
            }
        }
        html += '</div>'
        html += '</div>'
        document.getElementById('list-result').innerHTML = html

    }

    function loadDetailField(res) {
        res.forEach(function (element, i) {
            $('#item' + i).click(function () {
                html = ''
                html += '<div class="scrollbar" id="style-7">'
                html += '<div class="force-overflow">'

                html += '<p class="pre-content-detail">' + res[i].nhanXet + '</p>'

                html += '</div></div>'
                document.getElementById('content-detail').innerHTML = html
                // document.getElementById('detail-content').innerHTML = res[i].description
            })
        })
    }

})
