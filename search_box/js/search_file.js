$(document).ready(function(){
    var arr = [];
    var x;
    var reader = new FileReader();

    $('#load-file').change(function(e){
    $('#select-box').show()
        x = this.files
        
                var file = e.target.files[0];
                var reader = new FileReader();
                reader.onload = function (e) {
                    var csv = reader.result.split(',');
                    $('#textarea1').val(csv.join('\n'));
                    // console.log(reader.result.split(','))
                }
                reader.readAsText(file)

    $('#submit-pushh-file').click(function(){
        console.log(x)
        for (i = 1; i < 12; i ++) {
            arr.push($('#sel'+i).val())
        }
            $.ajax({
                type: "POST",
                contentType: "application/json",
                data: JSON.stringify({"file":x},{"arr":arr}),
                dataType: 'json',
                cache: false,
                url: "http://192.168.1.26:5001/",
                success: function(res){
                    console.log(res)

                }
            })

    })
    })

})