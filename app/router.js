import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('card', { path: '/:code' }, function() {
    this.route('person', { path: '/:person' }, function() {
      this.route('messages', { path: '/messages' });
    });
  });
});

export default Router;
