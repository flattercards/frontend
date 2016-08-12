import Ember from 'ember';
import fetch from 'ember-network/fetch';
const {
  Controller,
  on
} = Ember;

export default Controller.extend({
  fetchCountry: on('init', function() {
    fetch('http://ipinfo.io', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(response => {
      const res = JSON.parse(response._bodyText);
      console.log(res);
    });
  })
});
