$(document).ready(function(){
    var arr= []
    var file_search

    $('#load-file').change(function(e){
        $('#displayCheck').show()
        $('#select-box').show()
        file_search = this.files
        var file = e.target.files[0];
        var reader = new FileReader();
        reader.onload = function (e) {
            var csv = reader.result.split(',');
            $('#textarea1').val(csv.join('\n'));
            console.log(reader.result.split(','))
        }
        reader.readAsText(file)
    })

    $('#submit-search-file').click(function(){
        $('#text-check').hide()

        $('#result-box').show()
        $('#smart-search-file').hide()

        for (i = 1; i < 12; i ++) {
            arr.push($('#sel'+i).val())
        }
            // $.ajax({
            //     type: "POST",
            //     contentType: "application/json",
            //     data: JSON.stringify({"file":file_search},{"arr":arr}),
            //     dataType: 'json',
            //     cache: false,
            //     url: "http://192.168.1.26:5001/",
            //     success: function(res){
            //         console.log(res)

            //     }
            // })

    })

    $('#smart-search-file').change(function(e){
        $("#text-check").show()
      })
})