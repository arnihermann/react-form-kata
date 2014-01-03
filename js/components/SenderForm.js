/** @jsx React.DOM */
var React = require('react');

var SenderForm = React.createClass({
  render: function() {
    return <div class="row">
      <div class="col-md-4">
        <h4>Sender</h4>
        <div class="form-group">
          <label class="sr-only" for="senderSSN">Sender SSN</label>
          <input type="email" class="form-control" id="senderSSN" placeholder="Sender SSN"/>
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

module.exports = SenderForm;
