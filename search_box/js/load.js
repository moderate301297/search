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
})