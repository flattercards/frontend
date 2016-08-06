import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.query('card', { filter: { code: params.code } }).then(cards => {
      const card = cards.get('firstObject');
      if (!card) return this.transitionTo('index');
      return card;
    }, () => {
      return this.transitionTo('offline');
    });
  }
});
