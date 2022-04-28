$(document).ready(function() {
    $('#buscador').click(function(){
        let personaje = document.getElementById('personaje').value;
        console.log(personaje);
        $.ajax({
            type: "GET",
            url: "https://www.superheroapi.com/api.php/10224452404358844/"+personaje,
            dataType: "json",
            success: function (res){
                console.log(res);
            },
            error: function (res){
                alert("error");
            }
        })
        
    }
    )
});