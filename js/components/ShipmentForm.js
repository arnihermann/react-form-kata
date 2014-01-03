/** @jsx React.DOM */
var React = require('react');

var ShipmentForm = React.createClass({
  render: function() {
    return <div class="row">
      <div class="col-md-12"><h4>Shipment</h4></div>
      <div class="col-md-4">
        <div class="form-group">
          <textarea class="form-control" rows="3" placeholder="Description"></textarea>
        </div>

        <div class="form-group">
          <label for="numberOfPackages">Number of packages</label>
          <input class="form-control" placeholder="Number of packages" type="number" id="numberOfPackages" name="numberOfPackages" min="1" max="5"/>
        </div>
      </div>
    </div>;
  }
});

module.exports = ShipmentForm;
