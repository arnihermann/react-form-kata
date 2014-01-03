/** @jsx React.DOM */
var React = require('react');

var SenderForm = require('../components/SenderForm'),
    ReceiverForm = require('../components/ReceiverForm'),
    ShipmentForm = require('../components/ShipmentForm'),
    DeliveryForm = require('../components/DeliveryForm');

var RegisterShipmentPage = React.createClass({
  changeSender: function(sender) {
    if (sender) {
      //this.setState()
      console.log('new sender selected', sender)
    } else {
      // remove selected sender
    }
  },
  render: function() {
    return <div class="container container-form">
      <form role="form">
        <SenderForm onChangeSender={this.changeSender} />
        <ReceiverForm/>
        <ShipmentForm/>
        <DeliveryForm/>
        <button type="submit" class="btn btn-success">Register shipment</button>
      </form>
    </div>;
  }
});

module.exports = RegisterShipmentPage;
