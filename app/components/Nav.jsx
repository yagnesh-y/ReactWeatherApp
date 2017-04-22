import React from 'react';
import { IndexLink, Link } from 'react-router';

var Nav = React.createClass({
    onSearch: function(e){
        e.preventDefault();
        alert('Hola');

    },
    render: function() {

       return (
           <div className="top-bar">
            <div className="top-bar-left">
                <ul className="menu">
                    <li class="menu-text">React Weather App</li>
                    <li><IndexLink to="/" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Get Weather </IndexLink></li>
                    <li><IndexLink to="/about" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>About</IndexLink></li>
                    <li><IndexLink to="/examples" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Examples</IndexLink></li>
                </ul>
            </div>
            <div className="top-bar-right">
                <form onSubmit={this.onSearch}>
                     <ul className="menu">
                        <li><input type="search" placeholder="Search"/></li>
                        <li><button type="submit" className="button">Get Weather</button></li>
                    </ul>
                </form>
            </div>
        </div>
    );
    
}
});

module.exports = Nav;
var old = (
    <div>
            <h2>Nav bar !!</h2>
            <IndexLink to="/" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Get Weather </IndexLink>
            <IndexLink to="/about" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>About</IndexLink>
            <IndexLink to="/examples" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Examples</IndexLink>
        </div>
)
