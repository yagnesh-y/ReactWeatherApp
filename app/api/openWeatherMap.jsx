var axios = require('axios');

module.exports = {
    getTemp: function(location){
        var encodedLocation = encodeURIComponent(location);
        const OPEN_WEATHER_URI= 'http://api.openweathermap.org/data/2.5/weather?q='+encodedLocation+'&appid=ae4b1b3a99c4accda74fa3592c357a1a&units=metric';
       return axios.get(OPEN_WEATHER_URI).then(function(res){
            if(res.data.cod && res.data.message){
                throw new Error(res.data.message);
            }
            else{
                return res.data.main.temp;
            }
        }, function(res){
            throw new Error(res.message);
        });
    }
}