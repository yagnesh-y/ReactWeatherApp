import React from 'react';
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
    getDefaultProps: function () {
        return {
            location: "Hyderabad"
        };
    },
    getInitialState: function () {
        return {
            isLoading: false
        }
    },
    handleSearch: function (location) {
        var that = this;
        this.setState({ 
            isLoading: true,
            errorMessage: undefined
         });
        openWeatherMap.getTemp(location).then(function (temp) {
            that.setState({
                location: location,
                temp: temp,
                isLoading: false
            });
        }, function (err) {
            that.setState({ isLoading: false });
            console.log('ERROR occured', err)
            //debugger;
            //return <ErrorModel />
             errorMessage: err.message
        })
    },
    render: function () {
        var location = this.state.location;
        var temp = this.state.temp;
        var isLoading = this.state.isLoading;
        var errorMessage = this.state.errorMessage;

        function renderError(){
            if(errorMessage){
                return (
                    <ErrorModal />
                );
            }
        }
        
        function renderMessage() {
            if (isLoading) {
                return <h3 className="text-center">Fetching Weather...</h3>;
            }
            else if (temp) {
                return <WeatherMessage location={location} temp={temp} />;
            }
        }

        return (
            <div>
                <h3>Weather Component!</h3>
                <WeatherForm onSearch={this.handleSearch} />
                {renderMessage()}
                {renderError()}
            </div>
        );
    }
})

module.exports = Weather;