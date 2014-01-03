/** @jsx React.DOM */
var React = require('react');

var Address = React.createClass({
  render: function() {
    return <div class="col-md-4">
      <div class="well">
        <address>
          <strong>{this.props.address.name}</strong><br/>
          {this.props.address.address}<br/>
          {this.props.address.city}, {this.props.address.zip}<br/>
          <abbr title="Phone">P:</abbr> {this.props.address.phone}
        </address>
      </div>
    </div>;
  }
});

module.exports = Address;
