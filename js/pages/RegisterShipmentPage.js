/** @jsx React.DOM */
var React = require('react');

var SenderForm = require('../components/SenderForm'),
    ReceiverForm = require('../components/ReceiverForm'),
    ShipmentForm = require('../components/ShipmentForm'),
    DeliveryForm = require('../components/DeliveryForm');

var RegisterShipmentPage = React.createClass({
  render: function() {
    return <div class="container container-form">
      <form role="form">
        <SenderForm/>
        <ReceiverForm/>
        <ShipmentForm/>
        <DeliveryForm/>
        <button type="submit" class="btn btn-default">Register shipment</button>
      </form>
    </div>;
  }
});

module.exports = RegisterShipmentPage;
