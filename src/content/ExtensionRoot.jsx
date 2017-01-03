'use strict';

import React from '../vendor/react'
import ClipSpace from './ClipSpace'

/**
 *
 */
export default class ExtensionRoot extends React.Component{
  /**
   *
   */
  constructor(){
    super();
    this.displayName = 'ExtensionRoot'
  }

  /**
   * renders clipspaces
   * @returns {JSX}
   */
  render (){
    return (
      <ul>
        {this.props.clipboards.map((clipboardObject) => {
          return <ClipSpace>{clipboardObject}</ClipSpace>
        })}
      </ul>
    )
  }
}
