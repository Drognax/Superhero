$(document).ready(function() {
    $('#buscador').click(function(){
        let personaje = document.getElementById('personaje').value;
        var newData = [];
        console.log(personaje);
        $.ajax({
            type: "GET",
            url: "https://www.superheroapi.com/api.php/10224452404358844/"+personaje,
            dataType: "json",
            success: function (res){

                for(let i in res.powerstats){

                    newData.push( { y: res.powerstats[i], label: i} );
                    console.log(newData);
                }        

                var chart = new CanvasJS.Chart("chartContainer", {
                    theme: "light2", // "light1", "light2", "dark1", "dark2"
                    exportEnabled: true,
                    animationEnabled: true,
                    title: {
                        text: "Desktop Browser Market Share in 2016"
                    },
                    data: [{
                        type: "pie",
                        startAngle: 25,
                        toolTipContent: "<b>{label}</b>: {y}%",
                        showInLegend: "true",
                        legendText: "{label}",
                        indexLabelFontSize: 16,
                        indexLabel: "{label} - {y}%",
                        dataPoints: newData
                    }]
                });
                chart.render();

            },
            error: function (res){
                alert("error");
            }
        })
        
    }
    )
    
});