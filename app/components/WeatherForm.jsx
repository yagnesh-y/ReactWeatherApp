import React from 'react';

var WeatherForm = React.createClass({
    getWeather: function (e) {
        e.preventDefault();
        var location = this.refs.location.value;

        if (location) {
            this.refs.location.value = '';
            this.props.onSearch(location);
        }
        else {
            alert('Location cannot be empty!');
        }

    },
    render: function () {
        return (
            <div>
                <form onSubmit={this.getWeather}>
                    <input type="text" ref="location" />
                    <button className="button expanded hollow" type="submit">Get Weather</button>
                </form>
            </div>
        );
    }
})

module.exports = WeatherForm;