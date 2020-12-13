$(document).ready(function() {
    $('form').submit(function() {
         var ciudad =$('.input-ciudad').val();
         $(".datos").show();
        var url="http://api.openweathermap.org/data/2.5/weather?q="+ ciudad +"&units=metric&lang=es&appid=b7e43b90fb680fa42f9246f9a137c51d";
        $.get(url, function(res) {
            
            $('.nom-ciudad').html(res.name);
            $(".country").html(res.sys.country);
            var tempActual=res.main.temp;
            $(".temp-actual").html(tempActual+"°C");
            var tempMin=res.main.temp_min;
            $(".temp-min").html(tempMin+"°C");
            var tempMax=res.main.temp_max;
            $(".temp-max").html(tempMax+"°C");
            $(".latitud").html("Latitud: " + res.coord.lat);
            $(".longitud").html("Longitud: " + res.coord.lon);
            $(".humedad").html("Humedad: " + res.main.humidity + "%");
            $(".presion-at").html(res.main.pressure + " (Pa)");
            
            for(var i=0;i< res.weather.length;i++){

                var desc=res.weather[i].description;
                var iconcode = res.weather[i].icon;
            }
            var iconurl = "http://openweathermap.org/img/wn/" + iconcode + "@2x.png";
            $(".descripcion").html(desc);
            $('.icono img').attr('src', iconurl);
            
            
            
        }, 'json');
    return false;
        
    });
});