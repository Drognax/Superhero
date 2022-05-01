$(document).ready(function() {
    $('#buscador').click(function(){

        let personaje = document.getElementById('personaje').value;

        if(isNaN(personaje) || personaje<1){
            alert("¡Ingrese un número valido!");
            
        }  
        else {

        
        var newData = [];
        $.ajax({
            type: "GET",
            url: "https://www.superheroapi.com/api.php/10224452404358844/"+personaje,
            dataType: "json",
            success: function (res){

                for(let i in res.powerstats){

                    newData.push( { y: res.powerstats[i], label: i} );
                }        

                var chart = new CanvasJS.Chart("chartContainer", {
                    theme: "dark1", // "light1", "light2", "dark1", "dark2"
                    exportEnabled: false,
                    animationEnabled: true,
                    title: {
                        text: "Estadisticas de poder para " + res.name
                    },
                    data: [{
                        type: "pie",
                        startAngle: 25,
                        toolTipContent: "<b>{label}</b>: {y}",
                        showInLegend: "true",
                        legendText: "{label}",
                        indexLabelFontSize: 16,
                        indexLabel: "{label} - {y}",
                        dataPoints: newData
                    }]
                });
                chart.render();
                $("#contenidoHero").removeClass("visually-hidden");
                $("#nombreHero").text("Nombre: " + res.name);
                $("#heroConections").text("Conexiones: " + res.connections["group-affiliation"]);                
                $("#publicador").text("Publicador: " + res.biography.publisher);     
                $("#ocupation").text("Ocupación: "+ res.work.occupation);
                $("#firstAp").text("Primera Aparición: "+res.biography[ "first-appearance"]);
                $("#altura").text("Altura: " +res.appearance.height);
                $("#peso").text("Peso: " +res.appearance.weight);
                $("#aliance").text("Alianzas: "+res.biography.aliases);
                $("#imageHero").attr('src',res.image["url"]);
                
                

            },
            error: function (res){
                alert("Ups, Ocurrio un error, intente nuevamente");
            }
        })
        }
        
    }
    )
    
});