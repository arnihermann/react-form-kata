/** @jsx React.DOM */
var React = require('react');

var SenderForm = require('../components/SenderForm'),
    ReceiverForm = require('../components/ReceiverForm'),
    ShipmentForm = require('../components/ShipmentForm');

var RegisterShipmentPage = React.createClass({
  render: function() {
    return <div class="container container-form">
      <form role="form">
        <SenderForm/>
        <ReceiverForm/>
        <ShipmentForm/>
      </form>
    </div>;
  }
});

module.exports = RegisterShipmentPage;
