/** @jsx React.DOM */
var React = require('react');

var ReceiverForm = React.createClass({
  render: function() {
    return <div class="row">
      <div class="col-md-12"><h4>Receiver</h4></div>
      <div class="col-md-4">
        <div class="form-group">
          <label class="sr-only" for="receiverSSN">Recipient SSN</label>
          <input type="password" class="form-control" id="receiverSSN" placeholder="Recipient SSN"/>
        </div>
      </div>
      <div class="col-md-4">
        <div class="well">
          <address>
            <strong>Twitter, Inc.</strong><br/>
            795 Folsom Ave, Suite 600<br/>
            San Francisco, CA 94107<br/>
            <abbr title="Phone">P:</abbr> (123) 456-7890
          </address>
        </div>
      </div>
    </div>;
  }
});

module.exports = ReceiverForm;
