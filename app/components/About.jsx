import React from 'react';

var About = (props) => {
    return (
        <div>
            <h3 className="text-center">About</h3>
            <p>Sample Weather Application built using React!</p>
            <p>Here are some of the tools used!</p>
            <ul>
                <li>
                    <a href='https://facebook.github.io/react/' target='_blank'>React</a>: Javascript framework used
                </li>
                <li>
                    <a href='https://openweathermap.org/' target='_blank'>OpenWeatherMap</a>: OpenWeatherMap's API is used to fetch the  weather data
                </li>

            </ul>
        </div>
    );
}
module.exports = About;