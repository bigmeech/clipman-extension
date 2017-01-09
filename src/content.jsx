'use strict';

import React from 'react'
import ReactDom from 'react-dom'
import ExtensionRoot from './content/ExtensionRoot'

export default class Extension extends React.Component {

  constructor(){
    super();
  }

  componentDidMount(){
    document.addEventListener('keypress', (e) => {
      console.log('responding to keypress', e);
    });

    document.addEventListener('copy', (e) => {
      console.log('responding to copy', e);
    });

    document.addEventListener('cut', (e) => {
      console.log('responding to cut', e);
    });

    document.addEventListener('paste', (e) => {
      console.log('responding to paste', e);
    })
  }

  /**
   * handle keypress and show popup
   */
  onToggleUI(event){
    console.log('handled Key Down!!!', event)
  }

  /**
   * Render component root
   */
  render(){
    return (
        <ExtensionRoot onToggleUI={this.onToggleUI} clipboards={[]}></ExtensionRoot>
    )
  }
}

// TODO: refactor this later happen inside a root component
const mountNode = document.createElement('div');
mountNode.id = 'clipman';
document.body.appendChild(mountNode);
ReactDom.render(<Extension/>, mountNode);
