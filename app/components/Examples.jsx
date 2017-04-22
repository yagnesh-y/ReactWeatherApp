import React from 'react';
var { Link } = require('react-router');

var Examples = (props) => {
    return (
        <div>
            <h3 className="text-center">Few Example to get you started!</h3>
            <ul>
                <li>
                    <Link to='/?location=Hyderabad'>Hyderabad</Link>
                </li>
                <li>
                    <Link to='/?location=Mumbai'>Mumbai</Link>
                </li>
                <li>
                    <Link to='/?location=Delhi'>Delhi</Link>
                </li>
            </ul>
        </div>
    );
}
module.exports = Examples;