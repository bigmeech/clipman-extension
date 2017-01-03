'use strict';

import React from 'vendor/react'

export default class ExtensionRoot extends React.Component{
  constructor(){
    super();
    this.displayName = 'ExtensionRoot'
  }

  render (){
    return (
      <div id='clipman-main'></div>
    )
  }
}
