/**
 *
 */
const Extension = React.createClass({
  displayName: 'Dialog',
  render: function(){
    return (
      <div id='clipman-main'></div>
    );
  }
});

const Space = React.createClass({
  displayName: 'Space',
  render: function(){
    return (
        <li>{ this.props.link }</li>
    );
  }
});

$('body').append('<div id="clipman"></div>');

React.render(<Extension></Extension>, document.getElementById('clipman'));
