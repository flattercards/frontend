import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {

    const card = this.modelFor('card');
    const from = params.from;

    // Detect who is write this message
    switch (from) {
      case 'write':
      case 'receive':
        break;
      default:
        return this.transitionTo('card.index');
    }

    return {
      card,
      from
    }
  }
});
