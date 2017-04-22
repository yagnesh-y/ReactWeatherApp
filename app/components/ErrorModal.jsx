var React = require('react');

var ErrorModal = React.createClass({
    componentDidMount: function(){
        var modal= new Foundation.Reveal($('#error-modal'));
        modal.open();
    },
    render: function(){
        return (
            <div id="error-modal" className="reveal tiny text-center" data reveal>
                <h4>Some H4</h4>
                <p>Some Error</p>
                 <button class="close-button"  data-close aria-label="Close modal" type="button">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        );
    }
});

module.exports = ErrorModal;