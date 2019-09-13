$(document).ready(function(){
    var arr= []
    var file_search

    $('#input-smart-search-file').change(function(e){
        $('#displayCheck').show()
        $('#select-box').show()
        file_search = this.files
        var file = e.target.files[0];
        var reader = new FileReader();
            // var csv = reader.result.split(',');
        reader.readAsText(file)
    })

    $('#submit-search-file').click(function(){
        $('#text-check').hide()
        $('#result-box').show()
        $('#smart-search-file').hide()
        $('#show-content').show()
        console.log(file_search)

        for (i = 1; i < 12; i ++) {
            arr.push($('#sel'+i).val())
        }
            $.ajax({
                type: "POST",
                contentType: "application/json",
                data: file_search,
                processData: false,
                contentType: false,
                // dataType: 'json',
                // cache: false,
                url: "http://192.168.1.83:5000/",
                success: function(res){
                    console.log('res:       '+res)

                }
                
            })

    })

    $('#smart-search-file').change(function(e){
        $("#text-check").show()
      })
})