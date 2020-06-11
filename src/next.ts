/** @format */

import _ from 'lodash'
import React from 'react';
import ReactDOM from 'react-dom';

export default function next() {
  console.log('my name is bricechou!', React, ReactDOM, _.map([1, 2], (r) => r))
}
