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
    )
  }
});

React.render(<Extension></Extension>, document.body);
