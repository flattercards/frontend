import Ember from 'ember';
const { Route } = Ember;

export default Route.extend({
  model(params) {
    return this.store.query('card', {
      filter: {
        code: params.code
      },
      include: 'messages'
    });
  },

  afterModel(model) {
    if (model.get('length') === 0) {
      return this.transitionTo('index');
    }
  },

  actions: {
    error() {
      return this.intermediateTransitionTo('offline');
    }
  }
});
