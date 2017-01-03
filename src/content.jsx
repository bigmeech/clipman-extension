'use strict';

import React from './vendor/react'
import ExtensionRoot from './content/ExtensionRoot'

// TODO: refactor this later happen inside a root component
const mountNode = document.createElement('div');
mountNode.id = 'clipman';
document.body.appendChild(mountNode);

React.render(<ExtensionRoot></ExtensionRoot>, document.getElementById('clipman'));
