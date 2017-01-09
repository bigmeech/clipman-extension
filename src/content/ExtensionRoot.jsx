'use strict';

import React, {Component} from 'react'
import ClipSpace from './ClipSpace'

/**
 *
 */
export default class ExtensionRoot extends Component{
  /**
   *
   */
  constructor(props){
    super(props);
    this.displayName = 'ExtensionRoot';
    console.log(props);
    this.handleToggleEvent = this.handleToggleEvent.bind(this)
  }

  handleToggleEvent(e){
    this.props.onToggleUI(e);
  }

  /**
   * renders clipspaces
   * @returns {JSX}
   */
  render (){
    return (
      <div onKeyPress={this.handleToggleEvent}>
        <ul>
          {this.props.clipboards.map((clipboardObject) => {
            return <ClipSpace>{clipboardObject}</ClipSpace>
          })}
        </ul>
      </div>
    )
  }
}
