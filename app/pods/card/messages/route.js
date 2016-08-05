import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return {
      action: params.action,
      card: this.modelFor('card')
    }
  }
});
