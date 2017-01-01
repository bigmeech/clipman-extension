
const Dialog = React.createClass({
  displayName: 'Dialog',
  render: function(){
    return (
        <ul>{ this.props.children }</ul>
    )
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

React.render(<Dialog><Space link="saw"/></Dialog>, document.body);