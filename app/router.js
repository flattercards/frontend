import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('what');
  this.route('search');
  this.route('order');
  this.route('faq');
  this.route('card', { path: '/:code' }, function() {
    this.route('messages', { path: '/:from/messages' });
    this.route('404', { path: '*path'});
  });
});

export default Router;
