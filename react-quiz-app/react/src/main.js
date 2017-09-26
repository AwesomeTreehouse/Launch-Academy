import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App'
import data from '../src/constants/data';

$(function() {
  ReactDOM.render(
    <App data={data}/>,
    document.getElementById('app')
  );
});

// So this works now which is good. It sucks that I ran out of time
// but I at least feel good that I understand everything that is going on
// in the app and why things are structured the way they are. I think right now
// my weakness is just syntax stuff. I understand the core concepts fine but
// knowing syntax works vs. what doesn't trips me up big time.

// I refactored the two functions I had into one function that does both
// things. Not sure which is better but it's fun to play around with.
