import React from 'react';
import { Router, Route,IndexRoute  } from 'react-router';
import {App,Home,Profile} from '../containers';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="profile/:username" component={Profile} />
  </Route>
)
