/** @jsx React.DOM */
var React = require('react');

var Address = require('./Address');
var fakeids = require('./fakeids.json');

var ReceiverForm = React.createClass({
  getInitialState: function() {
    return {ssn: ''};
  },
  changeReceiver: function(e) {
    this.setState({ssn: e.target.value});
  },
  render: function() {
    var address = fakeids[this.state.ssn];
    return <div class="row">
      <div class="col-md-12"><h4>Receiver</h4></div>
      <div class="col-md-4">
        <div class="form-group">
          <label class="sr-only" for="receiverSSN">Recipient SSN</label>
          <input type="text" class="form-control" id="receiverSSN" placeholder="Recipient SSN" onChange={this.changeReceiver}/>
        </div>
      </div>
      {address ? Address({address: address}) : ''}
    </div>;
  }
});

module.exports = ReceiverForm;
