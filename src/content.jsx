'use strict';

import React from './vendor/react'
import $ from './vendor/jquery'

export default class ExtensionRoot extends React.Component{
  constructor(){
    super();
    this.displayName = '';
  }

  render (){
    return (
      "<div id='clipman-main'></div>"
    )
  }
}

class ClipSpaces extends React.Component{

}
const Extension = React.createClass({
  displayName: 'Dialog',
  render: function(){
    return (<div/>);
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
