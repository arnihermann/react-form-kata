/** @jsx React.DOM */
var React = require('react');

var Address = require('./Address');
var fakeids = require('./fakeids.json');

var SenderForm = React.createClass({
  getInitialState: function() {
    return {ssn: ''};
  },
  changeSender: function(e) {
    this.setState({ssn: e.target.value});
    this.props.onChangeSender(fakeids[e.target.value]);
  },
  render: function() {
    var address = fakeids[this.state.ssn];
    return <div class="row">
      <div class="col-md-12"><h4>Sender</h4></div>
      <div class="col-md-4">
        <div class="form-group">
          <label class="sr-only" for="senderSSN">Sender SSN</label>
          <input type="email" class="form-control" id="senderSSN" placeholder="Sender SSN" onChange={this.changeSender}/>
        </div>
      </div>
      {address ? Address({address: address}) : ''}
    </div>;
  }
});

module.exports = SenderForm;
