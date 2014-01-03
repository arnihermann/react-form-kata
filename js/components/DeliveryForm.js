/** @jsx React.DOM */
var React = require('react');

var DeliveryForm = React.createClass({
  render: function() {
    return <div class="row">
      <div class="col-md-12"><h4>Delivery</h4></div>
      <div class="col-md-4">
        <div class="form-group">
          <label for="date">Date</label>
          <input class="form-control" placeholder="Date" type="date" id="date" name="date"/>
        </div>
        <div class="form-group">
          Between
          <input placeholder="from" type="time" id="from" name="from"/>
          and
          <input placeholder="to" type="time" id="to" name="to"/>
        </div>
        <div class="form-group">
          <textarea class="form-control" rows="3" placeholder="Delivery instructions"></textarea>
        </div>
      </div>
    </div>;
  }
});

module.exports = DeliveryForm;
