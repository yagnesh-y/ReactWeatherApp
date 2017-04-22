import React from 'react';

var WeatherMessage = (props) => {
    var {location, temp} = props;
    return (
        <h4 className="text-center">Temperature in {location} is {temp}</h4>
    );
}


module.exports = WeatherMessage;